const User = require('./user-model');

const me = (req, res) => {
    res.status(200).json({ data: req.user})
}

const updateMe = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.user._id, req.body, {
            new: true
        })
        .lean()
        .exec()

        res.status(200).json({ data: user })
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

const createUser = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    console.log(req.body)
    if(!email){
        res.status(400).end('no email')
    }
    try{
        const doc = await User.create({ email: email, password: password})
        res.status(201).json({ data: doc })
    } catch (e){
        console.error(e)
        res.status(400).end()
    }
}

module.exports = {
    me, 
    updateMe,
    createUser
}