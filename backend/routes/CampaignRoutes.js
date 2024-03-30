const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');
const campaignController = require('../controllers/CampaignController');

// Get all campaigns
router.get('/', campaignController.getCampaigns);

// Get one campaign
router.get('/:id', campaignController.getCampaign);

// Create one campaign
router.post('/', campaignController.createCampaign);

// Update one campaign
router.put('/:id', campaignController.updateCampaign);

// Delete one campaign
router.delete('/:id', campaignController.deleteCampaign);


module.exports = router;
