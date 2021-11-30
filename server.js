// Setup Socket.io
//const PORT = process.env.PORT || 3000;
const PORT = 3000;
const { Console } = require('console');
const { Socket } = require('dgram');
var express = require('express'),
    app = express(), 
    server = require('http').createServer(app)
    var io = require('socket.io')(server, {
        cors: {
          origin: '*',
          methods: ["GET", "POST"],
          allowedHeaders: ["my-custom-header"],
          credentials: true
        }
      });
    path = require('path');
server.listen(PORT);
console.log('Server Started')

io.sockets.on('connection', newConnection);

function message(message) {
    io.emit('B_message', message);
}

function newConnection(socket) {
    socket.on('message', message);
    console.log(`${socket.id} connected`);
}