const mongoose = require("mongoose");
const Campaign = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true , 'Title is required'],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    bankRib: {
      type: String,
      required: [true , 'Bank Rib is required'],
    },
    goalAmount: {
      type: Number,
      required: [true , 'Goal Amount is required'],
    },
    goalRemaning: {
      type: Number,
      required: [true , 'Goal Remaning is required'],
    },
    startDate: {
      type: Date,
      required: [true , 'Start Date is required'],
    },
    endDate: {
      type: Date,
    },
    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    Reward:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reward",
      },

  },
  { timestamps: true }
);
module.exports = mongoose.model("campaign", Campaign);
