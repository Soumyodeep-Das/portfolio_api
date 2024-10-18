const express = require('express');

const {
    getResume,
    createResume,
    deleteResume,
    updateResume
} = require('../controllers/resumeController');

const router = express.Router();

// GET request for list of all resumes.
router.get('/', getResume);

// POST request for creating resume.
router.post('/', createResume);

// DELETE request to delete resume.
router.delete('/:id', deleteResume);

// PUT request to update resume.
router.put('/:id', updateResume);

module.exports = router;