'use strict';

const mongoose = require('mongoose');

const Book = mongoose.Schema({
  'title': {  type: String, required: true },
  'author': { type: String},
  'year': { type: Number},
  'category': { type: String},
}, {timestamps: true});

module.exports = mongoose.model('book', Book);
