const express = require('express')
const router = express.Router()

router.post('/login',(req,res)=>{
	res.cookie('name', req.body.userName,{ expires: new Date(Date.now() + 90000000),httpOnly:true })
    res.redirect('/')
})

router.post('/logout',(req,res)=>{
	res.clearCookie('name')
    res.redirect('/')
})

module.exports = router