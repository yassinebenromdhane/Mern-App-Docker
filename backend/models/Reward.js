const mongoose = require("mongoose");
const Reward = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    RewardLines: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rewardLine",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("reward", Reward);
