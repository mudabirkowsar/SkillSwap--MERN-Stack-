const SwapRequest = require('../models/SwapRequest');
const Skill = require('../models/Skill');

// @desc    Initiate a new swap request
// @route   POST /api/swaps/request
// @access  Private
exports.createSwapRequest = async (req, res) => {
    const { requestedSkillId, skillOffered, message } = req.body;
    const requesterId = req.userId; // ID of the logged-in user

    try {
        const requestedSkill = await Skill.findById(requestedSkillId);

        if (!requestedSkill) {
            return res.status(404).json({ message: 'Requested skill not found.' });
        }
        
        // Ensure requester is not trying to swap with themselves
        if (requestedSkill.mentor.toString() === requesterId.toString()) {
            return res.status(400).json({ message: 'Cannot swap with your own skill.' });
        }

        const swapRequest = new SwapRequest({
            requester: requesterId,
            mentor: requestedSkill.mentor,
            requestedSkill: requestedSkillId,
            skillOffered,
            message,
            status: 'Pending',
        });

        const createdRequest = await swapRequest.save();
        res.status(201).json({ 
            message: 'Swap request initiated successfully.', 
            request: createdRequest 
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all swap requests made by or directed to the logged-in user
// @route   GET /api/swaps/my-swaps
// @access  Private
exports.getMySwapRequests = async (req, res) => {
    const userId = req.userId;
    try {
        // Find requests where the user is either the requester OR the mentor
        const requests = await SwapRequest.find({
            $or: [{ requester: userId }, { mentor: userId }]
        })
        .populate('requester', 'name email')
        .populate('mentor', 'name email')
        .populate('requestedSkill', 'title');

        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};