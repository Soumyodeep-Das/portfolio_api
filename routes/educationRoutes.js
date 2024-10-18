const express = require('express');

const {
    getEducationList,
    getEducationDetail,
    createEducation,
    deleteEducation,
    updateEducation
} = require('../controllers/educationController');

const router = express.Router();

// GET request for list of all educations.
router.get('/', getEducationList);

// GET request for one education.
router.get('/:id', getEducationDetail);

// POST request for creating education.
router.post('/', createEducation);

// DELETE request to delete education.
router.delete('/:id', deleteEducation);

// PUT request to update education.
router.put('/:id', updateEducation);

module.exports = router;