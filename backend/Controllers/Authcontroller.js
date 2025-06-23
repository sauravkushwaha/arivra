import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import userModel from '../Models/user.js';

export const signup = async (req, res) => {
    
    try {
        // Check if user already exists
        const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server error" });
  }
};




export const login = async (req, res) => {
    
    try {
        // Check if user already exists
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (!existingUser){
      return res.status(404).json({ message: "User not found" });
    }
    // Hash the password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch){
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
        {email: existingUser.email, _id: existingUser._id, role: existingUser.role},
        process.env.JWT_SECRET,
        {expiresIn: '7d'}
    )
console.log("user role ", existingUser.role);
    res.status(200).json({ message: "Login success", token , email, name:existingUser.name, role: existingUser.role});
  } catch (err) {
    res.status(500).json({ message: "Server error "});
 }
};