const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    degree: String,
    field: String,
    years: String,
    institution: String,
    cgpa: String,
    cgpaVal: String,
});

module.exports = mongoose.model('Education', educationSchema);
