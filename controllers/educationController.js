const Education = require('../models/education');

// Display list of all educations.
const getEducationList = async (req, res) => {
    try {
        const educationList = await Education.find();
        res.status(200).json(educationList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Display detail page for a specific education.
const getEducationDetail = async (req, res) => {
    try {
        const education = await Education.findById(req.params.id);
        if (education == null) {
            return res.status(404).json({ message: 'Education not found' });
        }
        res.json(education);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle education create on POST.
const createEducation = async (req, res) => {
    const education = new Education({
        degree: req.body.degree,
        field: req.body.field,
        years: req.body.years,
        institution: req.body.institution,
        cgpa: req.body.cgpa,
        cgpaVal: req.body.cgpaVal
    });

    try {
        const newEducation = await education.save();
        res.status(201).json(newEducation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle education delete on DELETE.
const deleteEducation = async (req, res) => {
    try {
        const education = await Education.findById(req.params.id);
        if (education == null) {
            return res.status(404).json({ message: 'Education not found' });
        }
        await Education.findByIdAndDelete(req.params.id);
        res.json({ message: 'Education deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle education update on PUT.
const updateEducation = async (req, res) => {
    try {
        const education = await Education.findById(req.params.id);
        if (education == null) {
            return res.status(404).json({ message: 'Education not found' });
        }
        if (req.body.degree != null) {
            education.degree = req.body.degree;
        }
        if (req.body.field != null) {
            education.field = req.body.field;
        }
        if (req.body.years != null) {
            education.years = req.body.years;
        }
        if (req.body.institution != null) {
            education.institution = req.body.institution;
        }
        if (req.body.cgpa != null) {
            education.cgpa = req.body.cgpa;
        }
        if (req.body.cgpaVal != null) {
            education.cgpaVal = req.body.cgpaVal;
        }
        const updatedEducation = await education.save();
        res.json(updatedEducation);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getEducationList,
    getEducationDetail,
    createEducation,
    deleteEducation,
    updateEducation
}
