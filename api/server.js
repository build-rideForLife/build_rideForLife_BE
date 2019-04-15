const express = require('express');
const helmet = require('helmet');

const server = express();

const userRouter = require('./routes/user/userRoute');
const driverRouter = require('./routes/driver/driverRoute')
const authRouter = require('./routes/auth/authRouter');

server.use(express.json());
server.use(helmet());

server.use('/api', authRouter);
server.use('/api/users', userRouter);
server.use('/api/drivers', driverRouter)

server.get('/', async (req, res) => {
  res.status(200).json({ API: 'Ride For Life' });
});

module.exports = server;
