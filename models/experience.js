const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    role: String,
    company: String,
    date: String,
    description: String,
});

module.exports = mongoose.model('Experience', experienceSchema);
