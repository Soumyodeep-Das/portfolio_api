const Header = require('../models/header');

// Display list of all headers.
const getHeaderList = async (req, res) => {
    try {
        const headerList = await Header.find();
        res.status(200).json(headerList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Display detail page for a specific header.
const getHeaderDetail = async (req, res) => {
    try {
        const header = await Header.findById(req.params.id);
        if (header == null) {
            return res.status(404).json({ message: 'Header not found' });
        }
        res.json(header);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle header create on POST.
const createHeader = async (req, res) => {
    const header = new Header({
        logo: req.body.logo,
        navLinks: req.body.navLinks,
        actionButton: req.body.actionButton
    });

    try {
        const newHeader = await header.save();
        res.status(201).json(newHeader);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle header delete on DELETE.
const deleteHeader = async (req, res) => {
    try {
        const header = await Header.findById(req.params.id);
        if (header == null) {
            return res.status(404).json({ message: 'Header not found' });
        }
        await Header.findByIdAndDelete(req.params.id);
        res.json({ message: 'Header deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle header update on PUT.
const updateHeader = async (req, res) => {
    try {
        const header = await Header.findById(req.params.id);
        if (header == null) {
            return res.status(404).json({ message: 'Header not found' });
        }
        header.logo = req.body.logo;
        header.navLinks = req.body.navLinks;
        header.actionButton = req.body.actionButton;
        const updatedHeader = await header.save();
        res.json(updatedHeader);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getHeaderList,
    getHeaderDetail,
    createHeader,
    deleteHeader,
    updateHeader
}