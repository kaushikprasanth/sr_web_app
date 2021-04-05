const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

chai.should()

chai.use(chaiHttp)

let  bdg = {
    "buildingCode": "COH",
    "name" : "Tower 2"
   }

describe('Building API',()=>{

    // GET Route - To check auth
    describe('GET /api/building',()=>{
        it('should return 403 Forbidden',(done)=>{
            chai.request(app)
                .get("/api/building")
                .end((err,res) =>{
                    res.should.have.status(403)
                done()
            })
        })
    })
    //POST - Create a SR
    describe('POST /api/building',()=>{
        it('Add a building',(done)=>{
           
            chai.request(app)
                .post("/api/building")
                .set('Cookie', 'name=Kaushik')
                .send(bdg)
                .end((err,res) =>{
                    res.should.have.status(201)
                    res.body.should.be.a('object')
                done()
            })
        })
    })
})


