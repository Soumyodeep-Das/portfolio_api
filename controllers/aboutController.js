const About = require('../models/about');

// Display list of all abouts.
const getAboutList = async (req, res) => {
    try {
        const aboutList = await About.find();
        res.status(200).json(aboutList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Display detail page for a specific about.
const getAboutDetail = async (req, res) => {
    try {
        const about = await About.findById(req.params.id);
        if (about == null) {
            return res.status(404).json({ message: 'About not found' });
        }
        res.json(about);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle about create on POST.
const createAbout = async (req, res) => {
    const about = new About({
        aboutText: req.body.aboutText,
        image: req.body.image,
        shape: req.body.shape
    });

    try {
        const newAbout = await about.save();
        res.status(201).json(newAbout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle about delete on DELETE.
const deleteAbout = async (req, res) => {
    try {
        const about = await About.findById(req.params.id);
        if (about == null) {
            return res.status(404).json({ message: 'About not found' });
        }
        await About.findByIdAndDelete(req.params.id);
        res.json({ message: 'About deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle about update on PUT.
const updateAbout = async (req, res) => {
    try {
        const about = await About.findById(req.params.id);
        if (about == null) {
            return res.status(404).json({ message: 'About not found' });
        }
        about.aboutText = req.body.aboutText;
        about.image = req.body.image;
        about.shape = req.body.shape;
        const updatedAbout = await about.save();
        res.json(updatedAbout);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAboutList,
    getAboutDetail,
    createAbout,
    deleteAbout,
    updateAbout
}