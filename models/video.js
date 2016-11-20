'use strict';

const mongoose = require('mongoose');

let videoSchema = mongoose.Schema({
  url: {type: String, unique: true},
  title: {type: String},
  desc: {type: String},
  channel: {
    title: {type: String},
    url: {type: String}
  },
  published_at: {type: Date, default: Date.now},
  tags: {type: Array},
  comments: [{
    username: {type: String},
    comment_body: {type: String},
    comment_date: {type: Date, default: Date.now}
  }],
  views: {type: Number},
  likes: {type: Number}
});

module.exports = mongoose.model('Video', videoSchema);
