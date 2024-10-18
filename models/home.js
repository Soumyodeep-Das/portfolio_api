const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    profileLinks: [
        {
            id: Number,
            title: String,
            link: String,
            logo: String,
        },
    ],
    bannerImage: String,
    profileImage: String,
    typedStrings: [String],
    contactLink: String,
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;