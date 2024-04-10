const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//register user
exports .registerUser = asyncHandler(async(req, res) =>{
    const {name, email, password, phone} = req.body //request  body from client side
    
    //check if all fields  are added
    if(!name || !email || !password || !phone){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check if user already exists in the database
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10) //Generate a salt using bcrypt with a cost factor of 10 

    const hashedPassword = await bcrypt.hash(password, salt) //Hash the password using the generated salt 

    //Create a new user  with the provided details
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        phone
    })

    //If the user creation is successful, respond with status code 201 and the created user data
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id)
        }) 
        } else{
            res.status(400)
            throw new Error('Invalid data') //If user creation fails, respond with status code 400
        }
})

//login user
exports.loginUser = asyncHandler(async(req, res) =>{

    const{email, password}  = req.body //request  body from client side

    //check if user already exists in the database
    const user = await User.findOne({email})

    //Check if a user exists and the provided password matches the hashed password 
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({ // respond with JSON containing user details and a generated token
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400) //Else respond with status code 400
        throw new Error('Invalid credentials')
    }
    
})

//get user
exports.getUser = asyncHandler(async(req, res) =>{
    res.status(200).json(req.user)
    
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
