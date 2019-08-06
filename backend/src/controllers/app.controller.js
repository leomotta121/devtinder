exports.index = (req, res, next) => {
  return res.json({ message: 'I will return users' });
};

exports.store = (req, res, next) => {
  const body = req.body;

  return res.json({
    message: 'I will create a user',
    body
  });
};
