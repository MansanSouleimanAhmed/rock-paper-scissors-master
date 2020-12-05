const express = require('express');
const app = express();
const server = app.listen(80);
const io = require('socket.io')(server);
const expsession = require('express-session');
const path = require('path');

// initialize session middleware
const sessionMiddleware = expsession({
  secret: 'random secret',
  saveUninitialized: true,
  resave: true
});

// hook up session for express routes
app.use(sessionMiddleware);

// hook up the session for socket.io connections
io.use(function(socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next);
});

// when a socket.io connect connects, get the session and store the id in it
io.on('connection', function(socket) {
    // socket.handshake.headers
    console.log(`socket.io connected: ${socket.id}`);
    // save socket.io socket in the session
    console.log("session at socket.io connection:\n", socket.request.session);
    socket.request.session.socketio = socket.id;
    socket.request.session.save();
});

// general middleware to demo an increasing, per-client value in the session
app.use(function(req, res, next) {
    // req.session
    const session = req.session;
    if (!session.cntr) session.cntr = 0;
    ++session.cntr;
    next();
});

// route handler to serve up default page    
app.get("/", function(req, res) {
    const session = req.session;
    console.log("\n\npage load\n---------------------------\n");
    console.log("session:\n", session);
    res.sendFile(path.join(__dirname, "socket-io-session.html"));
});

let cntr = 1;

// test route to show using socket.io .emit() from an express route
app.get("/api/test", function(req, res) {
    const session = req.session;
    io.sockets.connected[session.socketio].emit('show', cntr++);
    res.json({greeting: "hello"});
});



