const express = require('express');
const listen = require('./listen.js');
// const socket = require(sockets)
const app = express();
const cors = require('cors');
const sockets = require('./socket');
app.use(cors())
// app.require('./listen.js');
// app.require('./sockets');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// const app = express();
var http = require('http').Server(app);
const port = process.env.PORT || 3000;


const io = require("socket.io")(http,{
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
})
io.on('connection', (socket) =>{
  console.log('user Connection on port '+ port + ' : ' + socket.id)

  socket.on('message', (message)=>{
    io.emit('message', message);
  })
})


// listen(http, port);
http.listen(port, ()=>{
  console.log("Server is running on port: " + port)
  console.log(sockets)
})
// var server = http.listen(3000, function(){
//   console.log("Server is running on port:3000")
// });

// app.use(express.static(__dirname + '/../dist/chat'));