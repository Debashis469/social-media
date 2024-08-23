import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hey, it's the user page");
});

// Update user
router.put("/:id", async (req, res) => {
    console.log(`Update request for user ID: ${req.params.id}`);
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                console.error("Error hashing password:", error);
                return res.status(500).json({ error: "Error hashing password" });
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json("Account has been updated successfully");
        } catch (err) {
            console.error("Error updating user:", err);
            res.status(500).json({ error: "Error updating user" });
        }
    } else {
        return res.status(403).json({ error: "You can update your account only" });
    }
});

// Delete user
router.delete("/:id", async (req, res) => {
    console.log(`Attempting to delete user with ID: ${req.params.id} or ${req.body.userId}`);
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json("Account has been deleted successfully");
        } catch (err) {
            console.error(`Error deleting user with ID ${req.params.id}:`, err);
            res.status(500).json({ error: "Error deleting user" });
        }
    } else {
        return res.status(403).json({ error: "You can delete your account only" });
    }
});


//get a user
router.get("/:id" , async(req, res) => {
    try {
        const user = await User.findById(req.params.id) ;
        res.status(200).json(user) ;
    } catch (error) {
        res.status(404).json(error) ;
    }
})


//follow a user
router.put("/:id/follow" , async(req,res) => {
    if(req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id) ;
            const currentUser = await User.findById(req.body.id) ;
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.id}}) ;
                await currentUser.updateOne({$push : {followings: req.params.id}}) ;
                res.status(200).json("User has been followed")
            } else {
                res.status(403).json("user already follow this user")
            }
        } catch (error) {
            res.status(500).json(error) ;
        }
    } else {
        res.status(403).json("You can't follow yourself")
    }
})

export default router;
