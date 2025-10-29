const Skill = require('../models/Skill');

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
exports.getSkills = async (req, res) => {
    try {
        // Find all skills and populate mentor details from User model
        const skills = await Skill.find({}).populate('mentor', 'name swapGoal');
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get a single skill by ID
// @route   GET /api/skills/:id
// @access  Public
exports.getSkillById = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id).populate('mentor', 'name bio rating reviews swapGoal');
        
        if (skill) {
            res.json(skill);
        } else {
            res.status(404).json({ message: 'Skill not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new skill
// @route   POST /api/skills
// @access  Private 
exports.createSkill = async (req, res) => {
    const { title, description, category, tags, duration, prerequisites } = req.body;
    
    try {
        const skill = new Skill({
            title,
            description,
            category,
            tags,
            duration,
            prerequisites,
            mentor: req.userId, // Set mentor to the currently logged-in user (from authProtect)
        });

        const createdSkill = await skill.save();
        res.status(201).json(createdSkill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};