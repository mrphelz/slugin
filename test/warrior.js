'use strict';
var mongoose = require('mongoose');
var slugin         = require('../');
var Character = require('./character');

var options = { discriminatorKey: 'role' };

var warriorSchema = mongoose.Schema(
	{ 
    slug: {
      type: String,
      indexed: true,
      unique: true,
      required: true
    },
    level: Number
	}, options);

warriorSchema.plugin(slugin, {source: 'alias'});

warriorSchema

.virtual('alias')
.get(function() {
  if (this.slug) return this.slug;
  if (this.name) {
    return this.name + ' the ' + this.role;
  } else {
    return 'anonymous';
  }
});


var Warrior = Character.discriminator('warrior', warriorSchema);

module.exports = Warrior;
