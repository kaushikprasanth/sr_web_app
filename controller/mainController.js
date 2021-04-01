const express = require('express')
const router = express.Router()
const axios = require('axios')
const url = 'http://localhost:'+(process.env.PORT||5000)

router.get('/',(req,res)=>{
	let sr =[]
	axios.get(url+'/api/servicerequest',{headers:req.headers})
	.then(response => {
	  sr = response.data;
	  res.render('index',{login:false,sr,name:req.cookies.name})
	})
	.catch(error => {
	//   console.log(error);
		res.render('index',{login:true,sr,name:req.cookies.name})
	});
})

router.get('/new',(req,res)=>{
	if (req.cookies.name != undefined)
		res.render('new',{mode:'New',login:false,sr:{},name:req.cookies.name})
	else
		res.redirect('/')
})
router.post('/new',(req,res)=>{
	let data = JSON.stringify(req.body);
	let config = {
		method: 'post',
		url: url+'/api/servicerequest',
		headers: { 
		'Cookie': 'name='+req.cookies.name,
		'Content-Type': 'application/json'
		},
		data : data
	  };
	  
	axios(config).then(response => {
	  res.redirect('/view/'+response.data.id)
	})
	.catch(error => {
	  console.log(error);
	});
})

router.get('/view/:id',(req,res)=>{
	let id = req.params.id
	let sr ={}
	axios.get(url+'/api/servicerequest/'+id,{headers:req.headers})
	.then(response => {
	  sr = response.data;
	  res.render('new',{mode:'View',sr,login:false,name:req.cookies.name})
	})
	.catch(error => {
	  console.log(error);
	  res.redirect('/')
	});
})

router.get('/edit/:id',(req,res)=>{
	let id = req.params.id
	let sr ={}
	axios.get(url+'/api/servicerequest/'+id,{headers:req.headers})
	.then(response => {
	  sr = response.data;
	  res.render('new',{mode:'Edit',sr,login:false,name:req.cookies.name})
	})
	.catch(error => {
	//   console.log(error);
	  res.redirect('/')
	});
})
router.post('/edit/:id',(req,res)=>{
	let id = req.params.id
	let data = JSON.stringify(req.body);
	let config = {
		method: 'put',
		url: url+'/api/servicerequest/'+id,
		headers: { 
		'Cookie': 'name='+req.cookies.name,
		'Content-Type': 'application/json'
		},
		data : data
	  };
	  
	axios(config).then(response => {

	  res.redirect('/view/'+id)
	})
	.catch(error => {
	  console.log(error);
	  res.render('/')
	});
})
module.exports = router