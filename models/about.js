const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    aboutText: String, // Added field for aboutText
    image: String, // Added field for image URL
    shape: String // Added field for shape URL
});

module.exports = mongoose.model('About', aboutSchema);
