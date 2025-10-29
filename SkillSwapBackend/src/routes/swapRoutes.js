const express = require('express');
const router = express.Router();
const swapController = require('../controllers/swapController');
const authProtect = require('../utils/authProtect');

// --- Protected Endpoints ---
// Only logged-in users can initiate a swap
router.post('/request', authProtect, swapController.createSwapRequest);

// Only logged-in users can view their swap history
router.get('/my-swaps', authProtect, swapController.getMySwapRequests); 

module.exports = router;