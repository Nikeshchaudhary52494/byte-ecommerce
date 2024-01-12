const ErrorHandler = require("../utils/errorhandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const { sendToken } = require("../utils/jwtToken");
const { sendEmail } = require("../utils/sendEmail");
const crypto = require("crypto")
const cloudinary = require("cloudinary");
const getDataUri = require("../utils/dataUri");
const Cart = require("../models/cartModel");

// Regiser a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    let myCloud;
    try {
        const image = req.files.image;
        const fileUri = getDataUri(image);
        myCloud = await cloudinary.uploader.upload(fileUri.content);
        const { name, email, password } = req.body;
        const verificationToken = crypto.randomBytes(20).toString('hex');
        const verificationLink = `https://byte-ecommerce.vercel.app/user/verify/${verificationToken}`;
        const message = `Click on the following link to verify your email: ${verificationLink}`;
        const user = await User.create({
            name,
            email,
            password,
            verificationToken,
            verified: false,
            avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            }
        });

        await sendEmail({
            email,
            subject: "Byte ecommerce verification link",
            message,
        });
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} ${message} successfully`
        });
    } catch (error) {
        await cloudinary.uploader.destroy(myCloud.public_id);
        return next(new ErrorHandler(error.message, 500));
    }
});

exports.verifyUser = catchAsyncErrors(async (req, res, next) => {
    const token = req.params.token;
    const user = await User.findOne({
        verificationToken: token
    });
    if (!user) {
        return next(new ErrorHandler('Invalid Token. Please check and try again.', 400));
    }
    if (user.verified) {
        return next(new ErrorHandler('User is already verified.', 400));
    }
    user.verified = true;
    await user.save();
    sendToken(user, 200, res);
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // checking if user has given password and email both
    if (!email || !password) {
        return next(new ErrorHandler("please Enter Email and Password", 400))
    }

    // all the details of the current login user is saved in user
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
        return next(new ErrorHandler('inValid Email and Password', 401));
    }
    if (!user.verified) {
        return next(new ErrorHandler('Please verify your account before logging in.', 401));
    }
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('inValid Email and Password', 401));
    }
    sendToken(user, 200, res);

})


// logout
exports.logoutuser = catchAsyncErrors(async (req, res, next) => {

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,

    })

    res.status(200).json({
        success: true,
        message: "Logged Out"
    })


})


// forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }


    // get resetPasswordToken
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false })
    const resetPasswordUrl = `https://byte-ecommerce.vercel.app/password/reset/${resetToken}`;

    const messgae = `your password reset token is:- \n\n ${resetPasswordUrl} \n if you have not requested this email then,please ignore it`

    try {
        await sendEmail({
            email: user.email,
            subject: "Ecommerce Password recovery",
            messgae,
        })

        res.status(200).json({
            success: true,
            messgae: `Email send to ${user.email} success`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false })
        return next(new ErrorHandler(error.message, 500));
    }
})

// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
        return next(new ErrorHandler("Resst Password Token is invalid or has been Expired", 400))
    }
    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password miss-Matched", 400))
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(user, 200, res);
})

// Get User deatails
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user
    })
})

// Update User Password
exports.updateUserPassword = catchAsyncErrors(async (req, res, next) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler(' Old Password does not matched', 400));
    }
    if (newPassword !== confirmPassword) {
        return next(new ErrorHandler('Password miss-Matched', 401));
    }
    user.password = newPassword;
    await user.save();

    sendToken(user, 200, res);

})


// Update User Profile
exports.updateUserProfile = catchAsyncErrors(async (req, res, next) => {
    const image = req.files?.avatar;
    console.log(req.body)
    let newUserData;
    const { name, email, oldAvatarUrl, oldAvatarPublicId } = req.body;
    if (image) {
        const fileUri = getDataUri(image);
        const myCloud = await cloudinary.uploader.upload(fileUri.content);
        newUserData = {
            name,
            email,
            avatar: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            }
        }
        await cloudinary.uploader.destroy(oldAvatarPublicId);
    } else {
        newUserData = {
            name,
            email,
            avatar: {
                public_id: oldAvatarPublicId,
                url: oldAvatarUrl
            }
        }
    }
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        success: true,
        user
    })

})
// Get All User (Admin)
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const UserCount = await User.countDocuments();
    const users = await User.find();
    res.status(200).json({
        success: true,
        UserCount,
        users,
    })
});
// Get singleUser (Admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
    // finding user with provided Id in parameters
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new ErrorHandler(`User not Foound with ID:${req.params.id}`))
    }
    res.status(200).json({
        success: true,
        user,
    })
});

exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        role: req.body.role,
    };

    await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });
});
