const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ContactUs = require("../models/contactUsModel");

exports.createMessage = catchAsyncErrors(async (req, res, next) => {
    const { message } = req.body;
    const { user } = req;
    if (!message) {
        return res.status(400).json({ error: "Message is a required field." });
    }
    try {
        const newMessage = new ContactUs({
            user: user._id,
            name: user.name,
            email: user.email,
            message,
        });
        const savedMessage = await newMessage.save();
        res.status(201).json({
            success: true,
            message: "Message created successfully.",
            data: savedMessage,
        });
    } catch (error) {
        console.error("Error creating message:", error);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});
exports.getAllMessages = catchAsyncErrors(async (req, res, next) => {
    try {
        const messages = await ContactUs.find();
        res.status(200).json({
            success: true,
            data: messages,
        });
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});

exports.deleteMessageById = catchAsyncErrors(async (req, res, next) => {
    const messageId = req.params.id;

    try {
        // Check if the message exists
        const existingMessage = await ContactUs.findById(messageId);
        if (!existingMessage) {
            return res.status(404).json({ error: "Message not found." });
        }

        // Check if the logged-in user is the owner of the message (optional, modify as needed)
        if (existingMessage.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: "You do not have permission to delete this message." });
        }

        // Delete the message
        await existingMessage.remove();

        res.status(200).json({
            success: true,
            message: "Message deleted successfully.",
        });
    } catch (error) {
        console.error("Error deleting message:", error);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
});