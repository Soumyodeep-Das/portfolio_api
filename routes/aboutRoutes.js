const express = require('express');

const {
    getAboutList,
    getAboutDetail,
    createAbout,
    deleteAbout,
    updateAbout
} = require('../controllers/aboutController');

const router = express.Router();

// GET request for list of all abouts.
router.get('/', getAboutList);

// GET request for one about.
router.get('/:id', getAboutDetail);

// POST request for creating about.
router.post('/', createAbout);

// DELETE request to delete about.
router.delete('/:id', deleteAbout);

// PUT request to update about.
router.put('/:id', updateAbout);

module.exports = router;