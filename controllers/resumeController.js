const Resume = require('../models/resume');

// Display resume content
const getResume = async (req, res) => {
    try {
        const resume = await Resume.find();
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Handle resume create on POST.
const createResume = async (req, res) => {
    const resume = new Resume({
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        downloadLink: req.body.downloadLink,
        buttonText: req.body.buttonText
    });

    try {
        const newResume = await resume.save();
        res.status(201).json(newResume);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle resume delete on DELETE.
const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (resume == null) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        await Resume.findByIdAndDelete(req.params.id);
        res.json({ message: 'Resume deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle resume update on PUT.
const updateResume = async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (resume == null) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        resume.title = req.body.title;
        resume.thumbnail = req.body.thumbnail;
        resume.downloadLink = req.body.downloadLink;
        resume.buttonText = req.body.buttonText;
        const updatedResume = await resume.save();
        res.json(updatedResume);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getResume,
    createResume,
    deleteResume,
    updateResume
}