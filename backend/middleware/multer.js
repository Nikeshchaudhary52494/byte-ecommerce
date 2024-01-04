const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'uploads',
    allowedFormats: ['jpg', 'png', 'jpeg'],
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    },
});

exports.upload = multer({ storage: storage }).single("file");
