import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {

};

const registerUser = async (req, res) => {
    
    try{
        const { name, email, password } = req.body;
        // checking if user exists
        const existingUser = await userModel.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }

        //validation
        if(!validator.isEmail(email)){
            return res.status(400).json({ message: 'Invalid email format' });
        }
        if(password.length < 8){
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }

        //hashing password
        const salt =  await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        // send response with token
        return res.status(201).json({ message: 'User registered successfully', user, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const adminLogin = async (req, res) => {

};

export { loginUser, registerUser, adminLogin };