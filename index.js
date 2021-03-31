const express = require('express')

const db = require('./config/db')

const app = express()
app.set('view engine','ejs')
app.use(express.json())


db.authenticate()
    .then(()=> console.log('Database Connected'))
    .catch(err => console.log(err))

// DB Intialisation - Create Tables 
// alter true modifies the table based on model changes
db.sync({ alter: true })

app.use('/',require('./controller/mainController'))

app.use('/api/servicerequest',require('./controller/srController'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running at ${PORT}`))

module.exports = app