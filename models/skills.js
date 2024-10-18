const mongoose = require('mongoose');

const { Schema } = mongoose;

const skillsSchema = new Schema({
    skill: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});

const technologiesSchema = new Schema({
    icon: {
        type: String,
        required: true,
    },
});

module.exports = {
    Skill: mongoose.model('Skill', skillsSchema),
    Technology: mongoose.model('Technology', technologiesSchema),
};