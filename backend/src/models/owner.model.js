const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email:{ type:String, required:true , trim:true ,unique:true, lowercase:true},
    passwordHash:{ type:String , required:true},
    isActive:{ type:Boolean, default:true},
    isApproved:{ type:String,default:false},
    phone:{type:Number}
},{timestamps:true})

const Owner=mongoose.model('Owner',ownerSchema)

module.exports=Owner