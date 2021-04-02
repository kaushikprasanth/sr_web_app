const express = require('express')
const router = express.Router()
const db = require('../config/db')
const ServiceRequest = require('../models/ServiceRequest')
const sendMail = require('../helper/sendMail')


router.use(function (req, res, next) {
    if(req.cookies.name != undefined)
        next()
    else
        res.sendStatus(403)
})

router.get('/',(req,res)=>{
	ServiceRequest.findAll().then(
		result => {
			if (result.length > 0)
			{
				res.status(200)
				res.send(result)
			}
			else{
				res.sendStatus(204)
			}
		})
		.catch(err =>{
            console.log(err)
			res.send('Error')
		})
})

router.get('/:id',(req,res)=>{
	let id = req.params.id
	ServiceRequest.findAll({ where: { id }})
        .then(
		result => {
			if (result.length > 0)
			{
				res.status(200)
				res.send(result[0])
			}
			else{
				res.sendStatus(404)
			}
		})
		.catch(err =>{
            console.log(err)
			res.send('Error')
		})
})

router.put('/:id',(req,res)=>{
    let id = req.params.id
    let body = { ...req.body,'lastModifiedBy':req.cookies.name}
    ServiceRequest.update( body , { where: { id } })
        .then(result => {
            if(result[0] > 0){
                res.sendStatus(200)
                if(body.currentStatus === "Complete")
                    sendMail(id,req.cookies.name)
            }
            else{
                res.sendStatus(404)
            }
            
        })
        .catch(err=> {
            console.log(err)
            res.sendStatus(400)
        })

})
router.post('/',(req,res)=>{
    let body = { ...req.body,'createdBy':req.cookies.name,"lastModifiedBy":req.cookies.name}
    ServiceRequest.create(body).then((result)=>{
        res.status(201)
        res.send(result)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(400)
    })

})
router.delete('/:id',(req,res)=>{
    let id = req.params.id
    ServiceRequest.destroy({ where: { id }})
    .then(
    result => {
        if( result > 0)
            res.sendStatus(201)
        else
            res.sendStatus(404)
    })
})
module.exports = router
