const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: String, default: 'Flexible' },
    prerequisites: { type: String, default: 'None' },
    tags: [String],
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
}, { timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;