const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const mongoose = require("mongoose");
const url = require('./db_credentials_secure')
const RegularScoreModel = require('./model/regular')
const bodyParser = require('body-parser')
const CircularJSON = require('circular-json');
const cors = require("cors");
 mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client)=>{ 
    if(!err) { 
        console.log("successful connection with the server");   
    } 
    else
        console.log("Error in the connectivity"); 
})
io.on('connection', (socket) => {
    console.log('a user connected');
  });
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
/*         RegularScoreModel.countDocuments({regular:{$eq:1}}, function (err, count) {
            if (err){
                console.log(err)
            }else{
                const total = count;
                res.send(total.toString()); 
            }
            
        });  */
     }
    }); 
}); 


app.get('/api/',(req, res)=>{
        RegularScoreModel.countDocuments({regular:{$eq:1}}, function (err, count) {
            if (err){
                console.log(err)
            }else{
                const total = count;
                console.log(total)
               // res.send(total.toString()); 
            }
            
        });
     
    
}) 



http.listen(4000)

/* They are the inverse of each other. JSON.stringify() serializes a JS object into a JSON string, whereas JSON.parse() will deserialize a JSON string into a JS object. */
//https://www.geeksforgeeks.org/nodejs-crud-operations-using-mongoose-and-mongodb-atlas/
//https://stackoverflow.com/questions/14432165/uncaught-syntaxerror-unexpected-token-with-json-parse
//https://stackoverflow.com/questions/57016900/when-post-to-express-server-after-use-json-stringify-it-doesnt-work