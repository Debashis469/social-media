import express from "express";
import { User } from "../models/User.js";
import bcrypt from "bcrypt" ;

const router = express.Router() ;

// register/signup new users
router.post("/register" ,async (req,res) => {

    //generate new password 
    const salt = await bcrypt.genSalt(10) ;
    const hashedPassword = await bcrypt.hash(req.body.password, salt) ;

    const newUser = new User({
        username: req.body.username ,
        email: req.body.email ,
        password: hashedPassword
    })
    try {
        const user = await newUser.save() ;
        res.status(200).send(user) ;
    } catch (error) {
        console.log(error) ;
    }
})


//login
router.post("/login", async (req,res) => {
    try {
        const user = await User.findOne({email: req.body.email}) ;
        !user && res.status(404).send("User not found") ;
        if(user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password) ;
            if(!validPassword ) res.status(400).send("wrong password") ;
            else res.status(200).send(user) 
        }
    } catch (error) {
        console.log(error) ;
    }
    
})


export default router ;