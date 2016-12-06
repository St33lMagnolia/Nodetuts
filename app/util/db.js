//create database helper function
var loki = require('lokijs');

var db = new loki('db.json');

module.exports = db;