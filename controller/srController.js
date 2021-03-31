const express = require('express')
const router = express.Router()
const db = require('../config/db')
const ServiceRequest = require('../models/ServiceRequest')


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
				res.send(result)
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
    let body = { ...req.body}
    ServiceRequest.update( body , { where: { id } })
        .then(result => {
            console.log(result)
            if(result[0] > 0){
                res.sendStatus(200)
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
    let body = { ...req.body,"lastModifiedBy":req.body.createdBy}
    ServiceRequest.create(body).then((result)=>{
        res.status(201)
        res.send(result)
    })
    .catch(err => res.sendStatus(400))

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
