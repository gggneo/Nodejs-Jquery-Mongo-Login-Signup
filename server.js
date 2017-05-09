const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
const router=express.Router();
const path=require('path');
const database=require("./config/db");
const session = require('express-session');
const port=process.env.port || 9999;

//controller
var authController=require('./server/controller/authController');

//database configuration
mongoose.connect(database.localURL);

app.use(express.static(path.join(__dirname,'public/jQuery')));
app.use(bodyParser.json());

//listen to server 3000
app.listen(port,()=>{
    console.log(app.get('port'));
});

app.post('/api/post',authController.signup);

app.post('/api/login',authController.login);
