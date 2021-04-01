# Service Requests Web Application
Web Application to CRUD Service Requests

## Demo 
### https://sr-webapp.herokuapp.com/ 
There will be delay of few seconds for the first request as this deployed on Heroku free dyno.Free dynos will sleep after a half hour of inactivity (if they don’t receive any traffic).

## Steps to run
    git clone 
    cd sr_web_app
    npm i
    make a copy of .env.example , rename to .env and add the Sendgrid API Key 
    npm run dev

## Code Structure
    .
    |-- config       # contains all the configuration for the server (DB)
    |-- controller
    |-- helper       # mail functions
    |-- models       # database models - Service Requests
    |-- test         # unit tests
    |-- views        # ejs templates
    |-- index.js     # start 
    |-- package.json # scripts, dependencies

## Testing
    npm run test

## Tech Stack
* [Node](https://nodejs.org)
* [Express.js](https://expressjs.com/)
* [Sequelize ORM](https://sequelize.org/)
* [SQLite](https://www.sqlite.org/index.html)
* [Twilio SendGrid](https://sendgrid.com/)
* [EJS](https://ejs.co/)

### Unit Testing
* [Chai](https://www.chaijs.com/)
* [Mocha](https://mochajs.org/)

### Tools
* [VSCode](https://code.visualstudio.com/)
* [Postman](https://www.postman.com/)

### Server Hosting
* [Heroku](https://www.heroku.com/)

