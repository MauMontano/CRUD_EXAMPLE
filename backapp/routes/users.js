var express = require('express');
var router = express.Router();
const db = require('../db/control/userControl');
const path = require('path');
const body_parser = require('body-parser');

router.use(body_parser.json());
router.use(body_parser.urlencoded({extended: true}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', async (req,res)=>{
  let users;
  try {
      users = await db.getUsers();
  } catch(err) {
      console.log(err);
      return res.status(500).end();
  }
  return res.json(users);
});

router.get('/getUserById/:id', async (req,res)=>{
  let user;
  const id = req.params.id;
  console.log("req.params")
  console.log(id);
  try {
      user = await db.getUserById(id);
  } catch(err) {
      console.log(err);
      return res.status(500).end();
  }
  return res.json(user);
});

router.post('/updateUser', async (req,res)=>{
  const user = req.body;
  console.log(user);
  try {
      response = await db.updateUser(user);
  } catch(err) {
      console.log(err);
      return res.status(500).end();
  }
  return res.json(response);
});

router.post('/deleteUser', async (req,res)=>{
  const user = req.body;
  console.log("id to delete: ")
  console.log(user.id);
  try {
      response = await db.deleteUser(user);
  } catch(err) {
      console.log(err);
      return res.status(500).end();
  }
  return res.json(response);
});


module.exports = router;
