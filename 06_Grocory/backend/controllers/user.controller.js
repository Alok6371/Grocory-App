import User from "../models/user.model";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


// Register user : /api/user/register

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400)
                .json({ message: "All Field Are required", success: false })
        }
        const existingUser = awaitUser.findOne({ email })
        if (existingUser) {
            return res.status(400)
                .json({ message: "user Already exist", success: false })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name, email, password: hashedPassword
        });

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });
        res.cookie("token", token, {
            httpOnly: true,

            //use secure cookies in production
            secure: process.env.NODE_ENV === "production",

            //Helps prevent CSRF ATTACKS
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",

            maxAge: 7 * 24 * 60 * 60 * 1000 //7days
        })

        res.json({
            message: "User Registered SuccessFully",
            success: true,
            user: {
                name: user.name,
                email: user.email
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server Error" })
    }
}