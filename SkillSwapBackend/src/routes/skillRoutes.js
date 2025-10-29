const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');
const authProtect = require('../utils/authProtect');

router.route('/')
    .get(skillController.getSkills) // Public access to view all skills
    .post(authProtect, skillController.createSkill); // Protected access to create a skill

router.get('/:id', skillController.getSkillById); // Public access to view skill detail

module.exports = router;