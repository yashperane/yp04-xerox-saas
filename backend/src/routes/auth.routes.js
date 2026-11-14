const express=require('express')
const router=express.Router()
const authControl=require('../controllers/auth.controller')

router.post('/signup', authControl.signup)

module.exports=router