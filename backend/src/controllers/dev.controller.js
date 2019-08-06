const axios = require('axios');
const Dev = require('../models/Dev');

exports.index = (req, res, next) => {
  return res.json({ message: 'return devs' });
};

exports.store = async (req, res, next) => {
  const { username } = req.body;

  const response = await axios.get(`https://api.github.com/users/${username}`);

  return res.json({ response: response.data });
};
