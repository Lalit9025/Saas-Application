import express from 'express'
import jwt from 'jsonwebtoken'
import pool from '../db/db.js'
import bcrypt from 'bcrypt'
import { verifyTokenUserMiddleware } from '../Middlewares.js';


const router = express.Router();

router.post('/register', async (req,res) => {
   try {
    const {name, email, password, company} = req.body;

    if(!name){
        return res.json({message:"Name is required"})
    }
    if(!email){
        return res.json({message:"Email is required"})
    }
    if(!password){
        return res.json({message:"Password is required"})
    }

    const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?',[email]);

    if(existingUser.length>0){
        return res.status(200).json({
            success: false,
            message: "User Already Exist Please login"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);


    const [user] = await pool.query('INSERT INTO users (name, email,password,company) VALUES (?,?,?,?)',[name,email,password,company]);

    res.status(201).json({
        success: true,
        message:"user registered",
        user
    })

    
   } catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: 'Error in Registration',
        error
    })
    
   }
})



router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;

        if (!email) {
            return res.json({ message: "Email is required" });
        }
        if (!password) {
            return res.json({ message: "Password is required" });
        }

        const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (user.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            success: true,
            message: "Login successful",
            token
        });




    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in Login',
            error
        });
        
    }
})

router.get('/user', verifyTokenUserMiddleware, async (req, res) => {
    try {
        const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [req.userId]);

        if (user.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user: user[0]
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving user information',
            error
        });
    }
});

export default router;