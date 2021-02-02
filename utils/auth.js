require('dotenv').config();
const User = require('../models/user/user-model');
const jwt = require('jsonwebtoken');
const mail = require('../utils/mailer');


const clientRoute = process.env.CLIENT_SIGNUP_ROUTE;

const newToken = user => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES || "1hr"
    })
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
          if (err) return reject(err)
          resolve(payload)
        })
    })
}


module.exports.signup = async (req, res) => {
    if (!req.body.email || !req.body.username || !req.body.password) {
        return res.status(400).send({ message: 'need email, username and password' })
    }
    const {email, username, password} = req.body;
    try {
        const user = await User.findOne({email})
        .select('email username')
        .exec()
        if(user){
            return res.status(400).send({ message: "User with email already exists"});
        }
        const token = jwt.sign({email, username, password}, process.env.JWT_SECRET, {expiresIn: '20m'})
        const obj = {
            email: email,
            text: 'Click on link to reset password',
            link: `${clientRoute}/authenticate/${token}`
        }
        const response = await mail(obj);
        res.status(201).send({ message: response});
    } catch (e) {
        console.log(e);
        return res.status(500).end()
    }
}

module.exports.signupAuthentication = async (req, res) => {
    if(!req.headers.token){
        return res.status(400).send({ message: 'Invalid or missing token'});
    }
    const {token} = req.headers;
    try {
        const {email, username, password} = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({email})
        .select('email')
        .exec()
        if(user){
           return res.status(400).send({ message: 'User already exists'});
        }
        await User.create({email, username, password});
        return res.status(201).send({ message: "Successfully registered"});
    } catch(e) {
        console.log(e);
        res.status(500).end()
    }
}


module.exports.signin = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ message: 'Empty password or email' })
    }
    
    const invalid = { message: 'Email or password is wrong' }
    
    try {
        const user = await User.findOne({ email: req.body.email })
        .select('email password settings id')
        .exec()
    
        if (!user) {
        return res.status(401).send(invalid)
        }
    
        const match = await user.checkPassword(req.body.password)
    
        if (!match) {
        return res.status(401).send(invalid)
        }
    
        const token = newToken(user)
        return res.status(201).send({ token, user: { email: user.email, settings: user.settings, id: user._id } })
    } catch (e) {
        console.error(e)
        res.status(500).end()
    }
}

module.exports.protect = async (req, res, next) => {
    const bearer = req.headers.authorization
  
    if (!bearer || !bearer.startsWith('Bearer ')) {
      return res.status(401).end()
    }
  
    const token = bearer.split('Bearer ')[1].trim()
    let payload
    try {
      payload = await verifyToken(token)
    } catch (e) {
      return res.status(401).end()
    }
  
    const user = await User.findById(payload.id)
      .select('-password')
      .lean()
      .exec()
  
    if (!user) {
      return res.status(401).end()
    }
  
    req.user = user
    next()
}

module.exports.forgotPassword = async (req, res) => {
    if(!req.body.email){
        return res.status(401).send({ message: 'Email not provided' });
    }
    const email = req.body.email;
    const user = await User
    .findOne({ email })
    .lean()
    .exec()

    if(!user){
        return res.status(401).send({ message: 'Email not found'});
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1hr'});
    const obj = {
        email: email, 
        text: "Reset email with the following link",
        link: `${clientRoute}/resetpassword/${token}`
    }
    
//    const sendMessage = await mail(obj);
//    if(!sendMessage){
//        return res.status(401).send({ message: 'Email not sent'})
//    }
   try {
       await mail(obj);
   } catch (e) {
       return res.status(500).send({ message: "Unable to send email"});
   }
   console.log(user);
   try{
        const userResetUpdate = await User
        .findOneAndUpdate(
            { _id: user._id }, 
            { resetLink: token }, 
            { 
                new: true,
                useFindAndModify: false
            }
        )
        .lean()
        .exec()
        console.log(userResetUpdate);
            
        if(!userResetUpdate){
            return res.status(401).send({ message: "could not find user"});
        }
        return res.status(201).send({ message: 'Email sent!'});
    } catch(e) {
        console.log(e)
        res.status(500).end();
    }
}


module.exports.resetPassword = async (req, res) => {
     if(!req.headers.token || !req.body.newPass){
         return res.status(401).send({ message: 'Authentication Error'});
     }
     const token = req.headers.token;
     const newPass = req.body.newPass;
     let payload;
     try {
         payload = await jwt.verify(token, process.env.JWT_SECRET);
     } catch(e){
         return res.status(401).end('invalid token');
     }
     try {
     const user = await User
        .findById(payload.id)
        .lean()
        .exec()
     
    if (user.resetLink !== token){
         console.log(user);
         return res.status(401).end('Missing token or user');
     }
    let newPassSubmit = await User.findOne({ resetLink: token })
    newPassSubmit.password = newPass;
    newPassSubmit.resetLink = '';
    const success = await newPassSubmit.save();
    if(!success){
        res.status(401).send({ message: 'Unable to add new password'});
    }
    res.status(201).json({ message: 'Successfully changed password'});
    } catch (e) {
        res.status(500).end();
    }
}