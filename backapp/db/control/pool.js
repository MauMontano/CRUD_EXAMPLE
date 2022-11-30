'use strict'; 
var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : process.env.HOST,
    port : process.env.DBPORT,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});  

exports.pool = pool;