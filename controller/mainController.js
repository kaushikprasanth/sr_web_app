const express = require('express')
const router = express.Router()
const axios = require('axios')
const url = 'http://localhost:'+(process.env.PORT||5000)

router.get('/',async (req,res)=>{
	let sr =[]
	axios.get(url+'/api/servicerequest')
	.then(response => {
	  sr = response.data;
	  res.render('index',{sr})
	})
	.catch(error => {
	  console.log(error);
	});
})

router.get('/new',(req,res)=>{
	res.render('new')
})

router.get('/view/:id',(req,res)=>{
	res.render('new',{mode:'view'})
})
module.exports = router