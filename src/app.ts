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



app.register(router);

export default app;
