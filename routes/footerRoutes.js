const express = require('express');

const {
    getFooterList,
    getFooterDetail,
    createFooter,
    deleteFooter,
    updateFooter
} = require('../controllers/footerController');

const router = express.Router();

// GET request for list of all footers.
router.get('/', getFooterList);

// GET request for one footer.
router.get('/:id', getFooterDetail);

// POST request for creating footer.
router.post('/', createFooter);

// DELETE request to delete footer.
router.delete('/:id', deleteFooter);    

// PUT request to update footer.
router.put('/:id', updateFooter);

module.exports = router;