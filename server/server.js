const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const url = require('./db_credentials_secure');
const CircularJSON = require('circular-json');
const RegularScoreModel = require('./model/regular');
const app = require('express')();
const cors = require('cors');
const { db } = require('./model/regular');
const http = require('http').Server(app);
const io = require('socket.io')(http, {
     cors: {
      origin: "http://localhost:1234",
      methods: ["GET", "POST"],
      transports: ['websocket']
    } 
  });

  mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client)=>{ 
    if(!err) { 
        console.log("successful connection with the server");   
    } 
    else
        console.log("Error in the connectivity"); 
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
  });
app.use(cors({credentials: false, origin: true}));
app.use(bodyParser.json());
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
               // console.log(count)
                s = count
            }
            
        });   
      
    }
    });

})
const connection = mongoose.connection;
connection.once("open", ()=>{
     const pipeline = [{ $match: { 'fullDocument.regular': {$eq : 1}} }]
    const test = connection.collection('regulars')
    const changeStream = test.watch()
    changeStream.on("change", next => {
        RegularScoreModel.countDocuments({regular:{$eq:1}}, function (err, count) {
            var s 
           if (err){
                   console.log(err)
               }else{
                   const total = count;
                  // res.send(total.toString()); 
                  //console.log("test " + count)
                 io.emit("hello", {score: count})
               }
               
           });   
    }) 
})
io.on("connection", (socket) => {
    socket.emit("hello", "world");
    RegularScoreModel.countDocuments({regular:{$eq:1}}, function (err, count) {
        var s 
       if (err){
               console.log(err)
           }else{
               const total = count;
               //res.send(total.toString()); 
              // console.log(count)
               socket.emit("hello", {score: count})
           }
           
       });   
  });
app.get('/api/', function (){
  
})
// Handle connection
// Add a connect listener
//io.on('connection', function(socket) {
/*     RegularScoreModel.countDocuments({regular:{$eq:1}}, function (err, count) {
        var s 
       if (err){
               console.log(err)
           }else{
               const total = count;
               //res.send(total.toString()); 
               console.log(count)
              
               socket.emit('event', {event: count})
          
           }
});  */ 
//console.log('Client connected.');
//io.send('chat', {data:"test"})
 /*socket.on('join', ()=>{ 
 io.send('Hello World from client'); 

 })
 io.emit('join', 'Hello World from client'); 
   // socket.emit('event', 'test')
    // Disconnect listener
    socket.on('disconnect', function() {
        console.log('Client disconnected.');
    }); */  
//});
const PORT = process.env.PORT || 5000;
http.listen(PORT, function(){
  console.log('listening on *:5000')
}) 
//https://medium.com/@mandalrajdeep/using-change-streams-in-mongodb-50ca3f44421a
///https://www.thegreatcodeadventure.com/real-time-react-with-socket-io-building-a-pair-programming-app/