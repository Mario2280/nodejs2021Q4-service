import { createConnection } from 'typeorm'
import { config } from 'dotenv';
import app from './app';


config();

const PORT = process.env.SERVER_PORT || 4000;




const startServer = async () => {
  await createConnection();
  try {
    app.listen(PORT, '0.0.0.0');

  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

startServer();




