var loki = require('lokijs');

//create in-memory database
var db = new loki('db.json');

//create and populate collection (NoSQL)
db.addCollection('top').insert([
    {term:"JavaScript", style: 'warning'},
    {term:"Angular 2", style: 'dangerous'},
    {term:"NodeJS", style: 'success'},
    {term:"Golang", style: 'info'},
    {term:"iOS", style: 'default'},
    {term:"ReactJS", style: 'warning'},
    {term:"Ionic", style: 'info'},
    {term:"REST", style: 'primary'},
    {term:"Authentication", style: 'default'},
    {term:"Android", style: 'success'},
]);

//create collection to store the query made by users

db.addCollection('searches');

//call save database function to save our database

db.saveDatabase();