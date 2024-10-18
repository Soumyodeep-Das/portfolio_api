const express = require('express'); 

const {
    getHeaderList,
    getHeaderDetail,
    createHeader,
    deleteHeader,
    updateHeader
} = require('../controllers/headerController');

const router = express.Router();

// GET request for list of all headers.
router.get('/', getHeaderList);

// GET request for one header.
router.get('/:id', getHeaderDetail);

// POST request for creating header.
router.post('/', createHeader);

// DELETE request to delete header.
router.delete('/:id', deleteHeader);

// PUT request to update header.
router.put('/:id', updateHeader);

module.exports = router;