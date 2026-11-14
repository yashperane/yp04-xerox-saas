const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
    userName: { type: String, required: true, trim: true },
    email:{ type:String, required:true , trim:true ,unique:true, lowercase:true},
    passwordHash:{ type:String , required:true},
    isActive:{ type:Boolean, default:true},
    isApproved:{ type:Boolean,default:false},
    phone:{type:String}
},{timestamps:true})

const Owner=mongoose.model('Owner',ownerSchema)

module.exports=Owner