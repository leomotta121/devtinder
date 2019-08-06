const { default: axios } = require('axios');
const Dev = require('../models/Dev');

exports.index = (req, res, next) => {
  return res.json({ message: 'return devs' });
};

exports.store = async (req, res, next) => {
  try {
    const { username } = req.body;

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = response.data;

    console.log({ name, username, bio, avatar });

    const dev = await Dev.create({ name, user: username, bio, avatar });

    console.log(dev);

    return res.json({ dev });
  } catch (error) {
    next(error);
  }
};
