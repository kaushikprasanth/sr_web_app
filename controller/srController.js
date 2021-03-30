const express = require('express')
const router = express.Router()
const db = require('../config/db')
const ServiceRequest = require('../models/ServiceRequest')


router.get('/',(req,res)=>{
    ServiceRequest.findAll().then(
        result => console.log(result))
    res.send('SR Module')
})

router.get('/:id',(req,res)=>{
    id = req.params.id
    res.send(id)
})

module.exports = router