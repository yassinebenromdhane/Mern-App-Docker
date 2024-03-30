const Reward = require('../models/Reward');

// Create a new reward
const createReward = async (req, res) => {
    try {
        const reward = new Reward(req.body);
        await reward.save();
        res.status(201).send({ message: 'Reward saved successfuly', reward });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Get all rewards
const getAllRewards = async (req, res) => {
    try {
        const rewards = await Reward.find();
        res.status(200).send({ message : "getting all rewards ..." , data : rewards});
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get a reward by ID
const getRewardById = async (req, res) => {
    try {
        const reward = await Reward.findByIdAnd({ _id: req.params.id }).populate('RewardLines');
        if (!reward) {
            return res.status(404).send({ message: 'Reward not found' });
        }
        res.send({message : "Getting reward by id" ,data:reward});
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update a reward by ID
const updateRewardById = async (req, res) => {
    try {
        const reward = await Reward.findById({ _id: req.params.id });
        if (!reward) {
            return res.status(404).send({ message: 'Reward not found' });
        }
        Object.assign(reward, req.body);
        await reward.save();
        res.send(reward);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a reward by ID
const deleteRewardById = async (req, res) => {
    try {
        const reward = await Reward.findByIdAndDelete({ _id: req.params.id });
        if (!reward) {
            return res.status(404).send({ message: 'Reward not found' });
        }

        res.status(200).send({ message: 'Reward deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    createReward,
    getAllRewards,
    getRewardById,
    updateRewardById,
    deleteRewardById,
};
