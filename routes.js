const router = require('express').Router();
const path = require('path')
const createPassword = require('./createPassword');
const Password = require('./models/passwordModel');

let password;

router.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname) + '\\index.html');
})

router.get('/addPassword', async (req, res)=>{
    password  = createPassword();
    obj = {
        name : req.query['appName'],
        password
    }
    let newPassEntry = await Password.create(obj);
    console.log(newPassEntry);
    res.redirect('/');
})

router.get('/seePasswords', async (req, res)=>{
    let allPasswords = await Password.find({});
    res.json(allPasswords);
})

module.exports = router;