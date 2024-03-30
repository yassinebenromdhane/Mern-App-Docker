const mongoose = require('mongoose')    
const Category = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },
    desription: {
        type: String
    },
    campaigns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'campaign'
    }]
}, { timestamps: true })
module.exports =  mongoose.model( 'categories' , Category)