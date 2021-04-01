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
	res.render('new',{mode:'New',sr:{}})
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
	  res.redirect('/view/'+response.id)
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
	  res.render('new',{mode:'View',sr})
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
	  res.render('new',{mode:'Edit',sr})
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
	  res.redirect('/view/'+response.id)
	})
	.catch(error => {
	  console.log(error);
	//   res.render('index',{login:false})
	});
})
module.exports = router