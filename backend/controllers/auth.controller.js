import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../lib/utils/generateTokenAndSetCookie.js";

export const signup =  async (req,res)=> {
    try {
        const {username, fullName, email, password} = req.body;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)){
            return res.status(400).json({message: "Invalid email format"})
        }

        const existingUser = await User.findOne({username: username});
        if (existingUser){
            return res.status(400).json({message: "Username already taken"})
        }

        const existingEmail = await User.findOne({email: email});
        if (existingEmail){
            return res.status(400).json({message: "Email already taken"})
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
          return res.status(400).json({
            message:
              "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit, and one special character.",
          })
        }else if(password.length < 8){
            return res.status(400).json({message: "Password must be at least 8 characters"})
        }

        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        const newUser = new User({
            username: username,
            fullName: fullName,
            email: email,
            password: hashedPassword,
        });

        if (newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                fullName: newUser.fullName,
                email: newUser.email,
                followers: newUser.followers,
                following: newUser.following,
                profileimg: newUser.profileImg,
                coverImg: newUser.coverImg,
            })
        }
        else{
            return res.status(400).json({message: "Invalid user Data"});
        }


    } catch (error) {
        console.log("Error in singup controller", error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
};

export const login = async (req,res)=> {
    try {
       const {username, password} = req.body;
       const user = await User.findOne({username});
       const isValidPassword = await bycrypt.compare(password, user?.password || "");
       
       if (!user || !isValidPassword) {
        return res.status(400).json({message: "Invalid username or password"});
        }
        
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            username: user.username,
            fullName: user.fullName,
            email: user.email,
            followers: user.followers,
            following: user.following,
            profileimg: user.profileImg,
            coverImg: user.coverImg,
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        return res.status(500).json({message: "Internal Server Error"});
        
    }
};

export const logout =async (req,res)=> {
    try {
        res.clearCookie("jwt", "", {maxAge: 0});
        return res.status(200).json({message: "Logged out successfully"});
        
    } catch (error) {
        console.log("Error in logout controller", error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
};

export const authCheck = async(req,res)=> {
    try {
        const user = await User.findById(req.user._id).select("-password");
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in authCheck controller", error.message);
        return res.status(500).json({message: "Internal Server Error"});        
    }
};