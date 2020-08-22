const mongoose = require('mongoose') ;


const expenseSchema  = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    
    
   expenseText: {
    type:String,
    required: true
   },
    

    expenseAmount : {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('expense', expenseSchema)