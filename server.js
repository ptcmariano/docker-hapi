const Hapi = require('hapi');
// const mysql = require('mysql');

const server = new Hapi.Server();
server.connection({
  port: 9000
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply('Hello World');
  }
});

// var connection = mysql.createConnection({
//   host     : 'mysql',
//   user     : 'root',
//   password : 'root',
//   database : 'users'
// });
// connection.connect();

server.start(() => {
  console.log('info', 'Server running at: ' + server.info.uri);
});
