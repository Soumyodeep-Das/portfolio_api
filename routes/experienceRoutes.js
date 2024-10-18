const express = require('express');

const {
    getExperienceList,
    getExperienceDetail,
    createExperience,
    deleteExperience,
    updateExperience
} = require('../controllers/experienceController');

const router = express.Router();

// GET request for list of all experiences.
router.get('/', getExperienceList);

// GET request for one experience.
router.get('/:id', getExperienceDetail);

// POST request for creating experience.
router.post('/', createExperience);

// DELETE request to delete experience.
router.delete('/:id', deleteExperience);

// PUT request to update experience.
router.put('/:id', updateExperience);

module.exports = router;