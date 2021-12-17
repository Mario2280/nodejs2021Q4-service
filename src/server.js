const { PORT } = require('./common/config');
const app = require('./app');

const startServer = () => {
  try {
    app.listen(PORT);
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

startServer();
