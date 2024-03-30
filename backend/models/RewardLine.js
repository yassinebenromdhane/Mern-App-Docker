const mongoose = require("mongoose");
const RewardLine = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    quantityRemaining: {
      type: Number,
      default: this.quantity,
    },
    status: {
      type: String,
      enum: ["available", "unavailable", "pending"],
      default: "pending",
    },
    reward: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reward",
    },
    campain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "campaign",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("rewardLine", RewardLine);
