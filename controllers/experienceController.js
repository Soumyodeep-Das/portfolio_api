const Experience = require('../models/experience')

// Display list of all experiences.
const getExperienceList = async (req, res) => {
    try {
        const experienceList = await Experience.find();
        res.status(200).json(experienceList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Display detail page for a specific experience.
const getExperienceDetail = async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);
        if (experience == null) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        res.json(experience);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle experience create on POST.
const createExperience = async (req, res) => {
    const experience = new Experience({
        id: req.body.id,
        role: req.body.role,
        company: req.body.company,
        date: req.body.date,
        description: req.body.description
    });

    try {
        const newExperience = await experience.save();
        res.status(201).json(newExperience);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle experience delete on DELETE.
const deleteExperience = async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);
        if (experience == null) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        await experience.remove();
        res.json({ message: 'Experience deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle experience update on PUT.
const updateExperience = async (req, res) => {
    try {
        const experience = await Experience.findById(req.params.id);
        if (experience == null) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        experience.id = req.body.id;
        experience.role = req.body.role;
        experience.company = req.body.company;
        experience.date = req.body.date;
        experience.description = req.body.description;

        const updatedExperience = await experience.save();
        res.json(updatedExperience);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getExperienceList,
    getExperienceDetail,
    createExperience,
    deleteExperience,
    updateExperience
}
