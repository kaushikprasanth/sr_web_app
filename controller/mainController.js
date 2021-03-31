const express = require('express')
const router = express.Router()
const axios = require('axios')
const url = 'http://localhost:'+(process.env.PORT||5000)

router.get('/',(req,res)=>{
	let sr =[]
	axios.get(url+'/api/servicerequest',{headers:req.headers})
	.then(response => {
	  sr = response.data;
	  res.render('index',{login:false,sr})
	})
	.catch(error => {
	//   console.log(error);
		res.render('index',{login:true,sr})
	});
})

router.get('/new',(req,res)=>{
	res.render('new',{mode:'New'})
})

router.get('/view/:id',(req,res)=>{
	let id = req.params.id
	let sr ={}
	axios.get(url+'/api/servicerequest/'+id,{headers:req.headers})
	.then(response => {
	  sr = response.data;
	  res.render('new',{mode:'View',sr})
	})
	.catch(error => {
	//   console.log(error);
	  res.redirect('/')
	});
})

router.get('/edit/:id',(req,res)=>{
	let id = req.params.id
	let sr ={}
	axios.get(url+'/api/servicerequest/'+id,{headers:req.headers})
	.then(response => {
	  sr = response.data;
	  res.render('new',{mode:'Edit',sr})
	})
	.catch(error => {
	//   console.log(error);
	  res.redirect('/')
	});
})
module.exports = router