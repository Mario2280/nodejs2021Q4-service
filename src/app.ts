import { config } from 'dotenv';
import fastify from 'fastify';

import router from './router/router';
import Config from './common/config';


const { LOG_MODE } = Config();
config();








const logger = {
    level: LOG_MODE,
    file: './log.txt',
    prettyPrint: (LOG_MODE === 'fatal') ? { translateTime: 'yyyy-mm-dd HH:MM:ss', colorize: false } : false
};


const app = fastify({
    logger
})
    .addHook('preHandler', (req, _, done) => {
        if (req.body) {
            req.log.info({ body: req.body }, 'parsed body');
        }
        if (req.query) {
            req.log.info({ query: req.query }, 'parsed query');
        }
        done();
    });

process.on('uncaughtException', (e) => {
    app.log.fatal(`${e.message}`);
    process.stderr.write((<Error>e).message);
    process.exit(1);

});


process.on('unhandledRejection', (e) => {
    app.log.fatal(`${e}`)
    process.stderr.write((<Error>e).message);
    process.exit(1);

});

app.register(router);


export default app;
