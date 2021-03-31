const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

chai.should()

chai.use(chaiHttp)

let sr = {
    "buildingCode": "COH",
    "description" : "Please turn up the AC in suite 1200D. It is too hot here.",
    "createdBy": "Kaushik"
   }

describe('Service Request API',()=>{

    // GET Route
    // describe('GET /api/servicerequest',()=>{
    //     it('should return all service requests',(done)=>{
    //         chai.request(app)
    //             .get("/api/servicerequest")
    //             .end((err,res) =>{
    //                 res.should.have.status(200)
    //             done()
    //         })
    //     })
    // })
    //POST - Create a SR
    describe('POST /api/servicerequest',()=>{
        it('create a service requests',(done)=>{
           
            chai.request(app)
                .post("/api/servicerequest")
                .send(sr)
                .end((err,res) =>{
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                    res.body.should.have.property('id')
                    sr['id'] = res.body.id
                done()
            })
        })
    })
     //GET - Get the created SR
     describe('GET /api/servicerequest/:id',()=>{
        it('create a service requests',(done)=>{
            console.log(sr)
            chai.request(app)
                .get("/api/servicerequest/"+sr['id'])

                .end((err,res) =>{
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('id')
                done()
            })
        })
    })
    
})


