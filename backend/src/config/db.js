const mongoose=require('mongoose')
require('dotenv').config()

const connectDB= async ()=>{
    try{
        const connection= await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDb connected ${connection.connection.host}`)
    }
    catch(error){
        throw error
    }
}

module.exports=connectDB