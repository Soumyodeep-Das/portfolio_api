const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: 'Download My Resume'
    },
    thumbnail: {
        type: String,
        required: true,
        default: '../assets/resume-preview.png'
    },
    downloadLink: {
        type: String,
        required: true,
        default: 'https://drive.google.com/file/d/1HRNlaHyVioJ1uUmCvIDZD0Q3RqFb1269/view?usp=sharing'
    },
    buttonText: {
        type: String,
        required: true,
        default: 'Download'
    },
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;