const { Schema, model } = require('mongoose');
const uniqueArrayPlugin = require('mongoose-unique-array');

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true,
      unique: true
    },
    bio: String,
    avatar: {
      type: String,
      required: true
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        unique: true,
        ref: 'Dev'
      }
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        unique: true,
        ref: 'Dev'
      }
    ]
  },
  {
    timestamps: true
  }
);

DevSchema.plugin(uniqueArrayPlugin);

module.exports = model('Dev', DevSchema);
