const mongoose = require("mongoose");
const BackerCompaign = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "campaign",
    },
    reward: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reward",
    },
    rewardLine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "rewardLine",
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["paypal", "visa", "mastercard"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("model name", BackerCompaign);
