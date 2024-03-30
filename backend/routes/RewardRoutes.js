const express = require('express');
const router = express.Router();
const rewardController = require('../controllers/RewardController');

// Define reward routes
router.get('/', rewardController.getAllRewards);
router.get('/:id', rewardController.getRewardById);
router.post('/', rewardController.createReward);
router.put('/:id', rewardController.updateRewardById);
router.delete('/:id', rewardController.deleteRewardById);

module.exports = router;
