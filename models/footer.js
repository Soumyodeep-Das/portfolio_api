const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema(
    {
        about: {
            type: String,
            required: true,
        },
        contactData: [
            {
                id: {
                    type: Number,
                    required: true,
                },
                platform: {
                    type: String,
                    required: true,
                },
                link: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Footer = mongoose.model("footer", footerSchema);

module.exports = Footer;
