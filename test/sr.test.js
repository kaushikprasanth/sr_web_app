const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

chai.should()

chai.use(chaiHttp)

let sr = {
    "buildingCode": "COH",
    "description" : "Please turn up the AC in suite 1200D. It is too hot here."
   }

describe('Service Request API',()=>{

    // GET Route - To check auth
    describe('GET /api/servicerequest',()=>{
        it('should return 403 Forbidden',(done)=>{
            chai.request(app)
                .get("/api/servicerequest")
                .end((err,res) =>{
                    res.should.have.status(403)
                done()
            })
        })
    })
    //POST - Create a SR
    describe('POST /api/servicerequest',()=>{
        it('create a service requests',(done)=>{
           
            chai.request(app)
                .post("/api/servicerequest")
                .set('Cookie', 'name=Kaushik')
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
            chai.request(app)
                .get("/api/servicerequest/"+sr['id'])
                .set('Cookie', 'name=Kaushik')
                .end((err,res) =>{
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('id')
                done()
            })
        })
    })
    //PUT - Update the created SR
    describe('PUT /api/servicerequest/:id',()=>{
        it('update the service requests',(done)=>{
            let upd_sr = {
                currentStatus:"InProgress"
            }
            chai.request(app)
                .put("/api/servicerequest/"+sr['id'])
                .send(upd_sr)
                .set('Cookie', 'name=Kaushik')
                .end((err,res) =>{
                    res.should.have.status(200)
                done()
            })
        })
    })
     //Delete - delete the created SR
     describe('DELETE /api/servicerequest/:id',()=>{
        it('delete the service requests',(done)=>{
            chai.request(app)
                .delete("/api/servicerequest/"+sr['id'])
                .set('Cookie', 'name=Kaushik')
                .end((err,res) =>{
                    res.should.have.status(201)
                done()
            })
        })
    })
    
})


