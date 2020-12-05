
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const CircularJSON = require('circular-json');
const RegularScoreModel = require('./model/regular')
const url = require('./db_credentials_secure')
const express = require('express')
const socketio = require('socket.io')
const app = express()
const cors = require("cors");
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);
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
            if (err){
                console.log(err)
            }else{
                const total = count;
                res.send(total.toString()); 
                console.log(count)
            }
            
        });  
     }
    }); 
}); 
app.options('*', cors())
 app.get('/api/',(req, res)=>{
    RegularScoreModel.countDocuments({regular:{$eq:1}}, function (err, count) {
        if (err){
            console.log(err)
        }else{
            let total = count;
            console.log(count)
            res.send(total.toString()); 
        }
            
    });   
})
io.on('connection', socket => {
    console.log("New user connected")
})

server.listen(process.env.PORT || 4000, () => {
    console.log("server is running")
})

/* const io = socketio(server).use(cors(
    {
    cors: {
     ' origin': 'http://localhost:4000/api/',
      'Access-Control-Allow-Origin': '*',
    }
  })) */
  

/* They are the inverse of each other. JSON.stringify() serializes a JS object into a JSON string, whereas JSON.parse() will deserialize a JSON string into a JS object. */
//https://www.geeksforgeeks.org/nodejs-crud-operations-using-mongoose-and-mongodb-atlas/
//https://stackoverflow.com/questions/14432165/uncaught-syntaxerror-unexpected-token-with-json-parse
//https://stackoverflow.com/questions/57016900/when-post-to-express-server-after-use-json-stringify-it-doesnt-work

///////////////////////////////////////////////////////////////

const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const CircularJSON = require('circular-json');
const RegularScoreModel = require('./model/regular')
const url = require('./db_credentials_secure')
const express = require('express')
const socketio = require('socket.io')
const app = express()
const cors = require("cors");
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);
const { createProxyMiddleware } = require('http-proxy-middleware');
/* app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:4000/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
})); */
app.use(cors())
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, (err,client)=>{ 
    if(!err) { 
        console.log("successful connection with the server");   
    } 
    else
        console.log("Error in the connectivity"); 
})
app.use(cors());
app.use(bodyParser.json());
io.on('connect', (socket) => {
    console.log("New user connected")    
});
server.listen(process.env.PORT || 4000, () => console.log(`Server has started.`));















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