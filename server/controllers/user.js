import User from "../models/User.js";
import bcrypt from 'bcrypt';

const signupUser = async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            data: newUser,
            message: "SignUp Successful"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            data: null,
            message: error?.message
        })
    }
};


export { signupUser };