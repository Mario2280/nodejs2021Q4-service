import fastify from 'fastify';
import router from './router/router';

const app = fastify({ logger: true });

app.register(router);

export default app;
