const Dev = require('../models/Dev');
const ApiError = require('../services/apiError');

exports.store = async (req, res, next) => {
  try {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      throw new ApiError(
        'Target not found.',
        400,
        'The user you tried to like does not exist.'
      );
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  } catch (error) {
    next(error);
  }
};
