const axios = require('axios');
const url = 'http://localhost:'+(process.env.PORT||5000)

const getBdg = (req)=>{
    let bdg=[]
    let config = {
		method: 'get',
		url: url+'/api/building',
		headers: { 
		'Cookie': 'name='+req.cookies.name,
		'Content-Type': 'application/json'
		}
	  };
	  
	return axios(config)

}
module.exports = getBdg
