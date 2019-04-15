const express = require('express');


const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ API: 'Ride For Life' });
});

module.exports = server;
