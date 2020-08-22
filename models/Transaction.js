const mongoose = require('mongoose') ;


const transactionSchema  = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    incomeText: {
        type:String,
        required: true
    },

    incomeAmount : {
        type:Number,
        required:true
    },

 
})

module.exports = mongoose.model('transaction', transactionSchema)