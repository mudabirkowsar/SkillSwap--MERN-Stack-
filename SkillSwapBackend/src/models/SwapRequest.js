const mongoose = require('mongoose');

const swapRequestSchema = mongoose.Schema({
    requester: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    mentor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    requestedSkill: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Skill', 
        required: true 
    },
    skillOffered: { // The skill the requester is offering in return
        type: String, 
        required: true 
    },
    message: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Accepted', 'Rejected', 'Completed'],
        default: 'Pending'
    },
}, { timestamps: true });

const SwapRequest = mongoose.model('SwapRequest', swapRequestSchema);
module.exports = SwapRequest;