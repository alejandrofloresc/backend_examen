import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';



export const signUp = async (req, res) => {    
    
    const { username, email, password } = req.body;

    const newUser = new User ({
        username, 
        email,
        password: User.encryptPassword(password)
    })
    
const savedUser = await newUser.save();

const token = jwt.sign({id: savedUser._id}, config.SECRET,{
    expiresIn:86400
})

res.status(200).json({token});
}

export const signIn = async (req, res) => {
    const userFound = await User.findOne({émail: req.body.email})
    if(!userFound) return res.status(400).json({message: 'User not found'})

    const passwordCompare = await User.comparePassword(req.body.password, userFound.password)
    if(!passwordCompare) return res.status(401).json({token: null, message: 'Invalid password'})
    console.log(userFound);

    const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn: 86400
    })


    res.json({token});
}