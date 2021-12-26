import fastify from 'fastify';
import router from './router/router';

import config from './common/config';

const { LOG_MODE } = config();

const logger = {
    level: LOG_MODE,
    file: './log.txt',
    prettyPrint: (LOG_MODE === 'fatal') ? {translateTime: 'yyyy-mm-dd HH:MM:ss', colorize : false} : false
}

const app = fastify({
    logger
})
.addHook('preHandler', (req,res, done) => {
    if(req.body){
        req.log.info({body: req.body}, 'parsed body');
    }
    if(req.query){
        req.log.info({query: req.query}, 'parsed query');
    }
    done();
});

process.on('uncaughtException', (e) => {
    app.log.fatal(`${e.message}`)
});


process.on('unhandledRejection', (e) => {
    app.log.fatal(`${e}`)
});

app.register(router);

export default app;
