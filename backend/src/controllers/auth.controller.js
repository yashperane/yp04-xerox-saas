const authServices=require('../services/auth.services')

exports.signup=async(req,res)=>{
   try{
      const {userName,email,password,phone}=req.body

   const newUser=await authServices.signupService(req.body)

   res.status(200).json({ message:"rated"})
   
   }
  
     
}