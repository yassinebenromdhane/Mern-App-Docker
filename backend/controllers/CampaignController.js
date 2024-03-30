const Campaign = require('../models/Campaign');

// Create a new campaign
exports.createCampaign = (req, res) => {
    try {
        const campaign = new Campaign(req.body);
        const savedCompaign = campaign.save();
        res.status(200).json({ message: 'Campaign created successfully', savedCompaign });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//get all campaigns and populate categorie and rewardLines
exports.getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find().populate('Category').populate('Reward');
        res.status(200).json({ data: campaigns, message: 'getting All campaigns' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


// Get a single campaign by ID 
exports.getCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id).populate('Category').populate('Reward');
        campaign ? res.status(200).json({ data: campaign, message: 'getting campaign by id ...' })
        : res.status(404).json({ message: 'there is no campaign with this id' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//update a campaign by ID with 

exports.updateCampaign = async (req, res) => {

    try {
        const campaign = req.body;
        await Campaign.findByIdAndUpdate(req.params.id, campaign);
        res.status(200).json({ message: "Campaign updated successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};




// Delete a campaign by ID using try catch and and before delete check if the campaign exist or not
exports.deleteCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Campaign deleted successfully' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

