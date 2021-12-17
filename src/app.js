const app = require('fastify')({ logger: true });

app.register(require('./router/router'));

module.exports = app;
