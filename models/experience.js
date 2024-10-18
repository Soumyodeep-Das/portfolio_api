const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    id: Number,
    role: String,
    company: String,
    date: String,
    description: String,
});

module.exports = mongoose.model('Experience', experienceSchema);
