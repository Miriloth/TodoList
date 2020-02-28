'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./routes');
require('./db');

const init = async () => {
  const server = Hapi.server({
    port: 3009,
    host: 'localhost'
  });

  await server.start();
  server.route(routes);
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();
