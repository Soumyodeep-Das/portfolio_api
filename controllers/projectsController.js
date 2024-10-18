const Projects = require("../models/projects")

// Display list of all projects.
const getProjectList = async (req, res) => {
    try {
        const projectList = await Projects.find();
        res.status(200).json(projectList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Display detail page for a specific project.
const getProjectDetail = async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id);
        if (project == null) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle project create on POST.
const createProject = async (req, res) => {
    const project = new Projects({
        title: req.body.title,
        description: req.body.description,
        techStack: req.body.techStack,
        github: req.body.github,
        live: req.body.live
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Handle project delete on DELETE.
const deleteProject = async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id);
        if (project == null) {
            return res.status(404).json({ message: 'Project not found' });
        }
        await Projects.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// Handle project update on PUT.
const updateProject = async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id);
        if (project == null) {
            return res.status(404).json({ message: 'Project not found' });
        }
        project.title = req.body.title;
        project.description = req.body.description;
        project.techStack = req.body.techStack;
        project.github = req.body.github;
        project.live = req.body.live;

        const updatedProject = await project.save();
        res.json(updatedProject);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProjectList,
    getProjectDetail,
    createProject,
    deleteProject,
    updateProject
}