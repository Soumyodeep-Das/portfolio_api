const Home = require('../models/home');

// Display list of all homes.
const getHomeList = async (req, res) => {
    try {
        const homeList = await Home.find();
        res.status(200).json(homeList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Display detail page for a specific home.
const getHomeDetail = async (req, res) => {
    try {
        const home = await Home.findById(req.params.id);
        if (home == null) {
            return res.status(404).json({ message: 'Home not found' });
        }
        res.json(home);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle home create on POST.
const createHome = async (req, res) => {
    const home = new Home({
        profileLinks: req.body.profileLinks,
        bannerImage: req.body.bannerImage,
        profileImage: req.body.profileImage,
        typedStrings: req.body.typedStrings,
        contactLink: req.body.contactLink
    });

    try {
        const newHome = await home.save();
        res.status(201).json(newHome);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle home delete on DELETE.
const deleteHome = async (req, res) => {
    try {
        const home = await Home.findById(req.params.id);
        if (home == null) {
            return res.status(404).json({ message: 'Home not found' });
        }
        await home.remove();
        res.json({ message: 'Home deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle home update on PUT.
const updateHome = async (req, res) => {
    try {
        const home = await Home.findById(req.params.id);
        if (home == null) {
            return res.status(404).json({ message: 'Home not found' });
        }
        home.profileLinks = req.body.profileLinks;
        home.bannerImage = req.body.bannerImage;
        home.profileImage = req.body.profileImage;
        home.typedStrings = req.body.typedStrings;
        home.contactLink = req.body.contactLink;

        const updatedHome = await home.save();
        res.json(updatedHome);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getHomeList,
    getHomeDetail,
    createHome,
    deleteHome,
    updateHome
}
