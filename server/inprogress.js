const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const url = require('./db_credentials_secure');
const CircularJSON = require('circular-json');
const RegularScoreModel = require('./model/regular');
const app = require('express')();
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server, {
     cors: {
      origin: "http://localhost:1234",
      methods: ["GET", "POST"],
     
    } 
  });
  app.post('/api/', function(req, res){
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
                //res.send(total.toString()); 
                console.log(count)
                s = count
            }
            
        });   
      
    }
    });

})
  app.use(cors({credentials: false, origin: true}));
  app.use(bodyParser.json());
  mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client)=>{ 
    if(!err) { 
        console.log("successful connection with the server");   
    } 
    else
        console.log("Error in the connectivity"); 
})

  server.listen(5000);