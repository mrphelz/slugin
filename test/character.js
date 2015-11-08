'use strict';
var mongoose = require('mongoose');

var options = { discriminatorKey: 'role' };
var characterSchema = mongoose.Schema(
	{ 
    role: {
      type: String,
      required: true,
      default: 'clerc'
    },
		name: String
	}, options);


module.exports = mongoose.model('Character', characterSchema);
