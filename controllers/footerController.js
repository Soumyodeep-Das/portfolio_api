const Footer = require('../models/footer')

// Display list of all footers.
const getFooterList = async (req, res) => {
    try {
        const footerList = await Footer.find();
        res.status(200).json(footerList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Display detail page for a specific footer.
const getFooterDetail = async (req, res) => {
    try {
        const footer = await Footer.findById(req.params.id);
        if (footer == null) {
            return res.status(404).json({ message: 'Footer not found' });
        }
        res.json(footer);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle footer create on POST.
const createFooter = async (req, res) => {
    const footer = new Footer({
        about: req.body.about,
        contactData: req.body.contactData
    });

    try {
        const newFooter = await footer.save();
        res.status(201).json(newFooter);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle footer delete on DELETE.
const deleteFooter = async (req, res) => {
    try {
        const footer = await Footer.findById(req.params.id);
        if (footer == null) {
            return res.status(404).json({ message: 'Footer not found' });
        }
        await Footer.findByIdAndDelete(req.params.id);
        res.json({ message: 'Footer deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle footer update on PUT.
const updateFooter = async (req, res) => {
    try {
        const footer = await Footer.findById(req.params.id);
        if (footer == null) {
            return res.status(404).json({ message: 'Footer not found' });
        }
        footer.about = req.body.about;
        footer.contactData = req.body.contactData;
        const updatedFooter = await footer.save();
        res.json(updatedFooter);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getFooterList,
    getFooterDetail,
    createFooter,
    deleteFooter,
    updateFooter
}
