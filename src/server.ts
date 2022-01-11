import config from './common/config';
import app from './app';

const data = config();

const startServer = () => {
  try {
    app.listen(data.PORT, '0.0.0.0');
    console.log();
    
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

startServer();
