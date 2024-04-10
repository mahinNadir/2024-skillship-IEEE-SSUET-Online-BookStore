const express =  require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')

const {protect} = require('../middleware/authmiddleware');

router.post('/register', userControllers.registerUser)// register user

router.post('/login', userControllers.loginUser)// login user

router.get('/getUser',protect, userControllers.getUser);//get user


module.exports = router