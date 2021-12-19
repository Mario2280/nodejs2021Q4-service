import config from './common/config';
import app from './app';

const data = config();

const startServer = () => {
  try {
    app.listen(data.PORT);
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

startServer();
