const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    platform: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);
const Form = mongoose.model('Form', formSchema);

module.exports = { Contact, Form };