const { Skill, Technology } = require('../models/skills');

// Display skills content
const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Handle skills create on POST.
const createSkills = async (req, res) => {
    const skill = new Skill({
        skill: req.body.skill,
        level: req.body.level,
        icon: req.body.icon
    });

    try {
        const newSkill = await skill.save();
        res.status(201).json(newSkill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle skills delete on DELETE.
const deleteSkills = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (skill == null) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        await skill.remove();
        res.json({ message: 'Skill deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle skills update on PUT.
const updateSkills = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (skill == null) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        skill.skill = req.body.skill;
        skill.level = req.body.level;
        skill.icon = req.body.icon;
        const updatedSkill = await skill.save();
        res.json(updatedSkill);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Display technology content
const getTechnologies = async (req, res) => {
    try {
        const technologies = await Technology.find();
        res.status(200).json(technologies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Handle technology create on POST.
const createTechnology = async (req, res) => {
    const technology = new Technology({
        name: req.body.name,
        description: req.body.description,
        icon: req.body.icon
    });

    try {
        const newTechnology = await technology.save();
        res.status(201).json(newTechnology);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle technology delete on DELETE.
const deleteTechnology = async (req, res) => {
    try {
        const technology = await Technology.findById(req.params.id);
        if (technology == null) {
            return res.status(404).json({ message: 'Technology not found' });
        }
        await technology.remove();
        res.json({ message: 'Technology deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle technology update on PUT.
const updateTechnology = async (req, res) => {
    try {
        const technology = await Technology.findById(req.params.id);
        if (technology == null) {
            return res.status(404).json({ message: 'Technology not found' });
        }
        technology.name = req.body.name;
        technology.description = req.body.description;
        technology.icon = req.body.icon;
        const updatedTechnology = await technology.save();
        res.json(updatedTechnology);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getSkills,
    createSkills,
    deleteSkills,
    updateSkills,
    getTechnologies,
    createTechnology,
    deleteTechnology,
    updateTechnology
}