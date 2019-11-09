const express = require('express');

const router = express.Router();
const UsersModel = require('../models/loginData.js');
const mainController = require('../controllers/controllersApi');
const Ajv = require('ajv');
const ajv = new Ajv();
const userSchema = require('../schemas/mainSchema');


/* GET home page. */

router.post('/register', (req, res) => {
  (async function () {
    const validate = ajv.compile(userSchema);
    const valid = validate(req.body);
    if(!valid){
      const { errors } = validate;
      res.send('invalid data');
    }
    else{
      mainController.register(req.body.login, req.body.password); 
      res.send('successfuly registered');
    }
  }());
});


router.post('/logining', (req, res) => {
  const CurrentUser = {
    login_value: req.body.login,
    password_value: req.body.password,
  };

  UsersModel.findOne({ login_value: CurrentUser.login_value })
    .then((data) => {
      if (data.comparepwd(req.body.password)) {
        res.send('successfully');
      } else {
        res.send('wrong data');
      }
    })
    .catch((err) => { if (err) throw err; });
});

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
