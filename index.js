var WebSocketServer = require('ws').Server;
var socket = new WebSocketServer({ port: 8080 }, function () {
  console.log('WebSocket server started on Port 8080...')
});

socket.broadcast = function(data) {
  this.clients.forEach(function (client) {
    client.send(data);
  });
};

socket.on('connection', function(connection) {
  connection.on('message', function(message) {
    console.log('Received: %s', message);
    socket.broadcast(message);
  });
});
