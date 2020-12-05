const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const CircularJSON = require('circular-json');
const RegularScoreModel = require('./model/regular');
const url = require('./db_credentials_secure');
const express = require('express');
const app = express();
const cors = require("cors");


mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client)=>{ 
    if(!err) { 
        console.log("successful connection with the server");   
    } 
    else
        console.log("Error in the connectivity"); 
})
//app.use(timeout('5s')); //set 5s timeout for all requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.post('/api/', function(req, res) {  
    let request = req.body;
    var s;
    let score = new RegularScoreModel({regular:req.body.regular});
    score.save(function(err, data){ 
    if(err){
        console.log(error);
    }
    else{
       RegularScoreModel.countDocuments({regular:{$eq:1}}, function (err, count) {
         var s 
        if (err){
                console.log(err)
            }else{
                const total = count;
                res.send(total.toString()); 
                console.log(count)
                s = count
            }
            
        });   
     }
    }); 
}); 
//console.log("test " + s)
app.use(cors({credentials: false, origin: true}));
    app.get('/api/',(req, res)=>{ RegularScoreModel.countDocuments({regular:{$eq:1}}, function (err, count) {
        if (err){
            console.log(err)
        }else{
            let total = count;
            console.log(count)
            res.send(total.toString());     
        }
            
    });
 })


app.listen(5000, () => {
    console.log("server is running")
})
//https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server