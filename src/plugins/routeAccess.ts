import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';


config();


const routeAccessPlugin = fp(async (app) => {
    app.addHook('preHandler', async (req, res) => {
        const freeLinks = ['/', '/doc', '/login'];
        const isFreeLink = () => freeLinks.includes(req.url);
        if (!isFreeLink()) {
            try {
                const token = req.headers.authorization?.split(' ')[1];
                if (!token) {
                    res.status(401).send("Unauthorized");
                }
                const isVerified = jwt.verify(<string>token, <string>process.env.JWT_SECRET_KEY);
                res.log.warn(`Try to access from ${req.ip} IP`, { ip: req.ip, token, isVerified });
            } catch (error) {
                res.status(401).send(error);
            }
        }
    })
},
    { name: 'routeAccess' }
);

export default routeAccessPlugin;