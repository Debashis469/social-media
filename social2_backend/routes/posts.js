import express from "express";
import { Post } from "../models/Post.js"
import { User } from "../models/User.js"

const router = express.Router() ;


//create a post 
router.post("/" , async(req,res) => {
    const newPost = new Post(req.body) ;
    try {
        const savedPost = await newPost.save() ;
        res.status(200).json("Post successfully created") ;
    } catch (error) {
        res.status(500).json(error) ;
    }
})

//update a post 
router.put("/:id" , async(req,res) => {
    const post = await Post.findById(req.params.id) ;
    if(post.userId === req.body.userId) {
        await post.updateOne({$set: req.body}) ;
        res.status(200).json("the post has been updated") ;
    } else {
        res.status(403).json("You can update your posts only") ;
    }
})


//delete a post 
router.delete("/:id", async(req,res) => {
    try {
        const post = await Post.findById(req.params.id) ;
        if(post.userId === req.body.userId) {
            await post.deleteOne() ;
            res.status(200).json("the post hass been deleted successfully") ;
        } else {
            res.status(403).json("you can delete only your post") ;
        }
    } catch (error) {
        res.status(500).json(error) ;
    }
})


//like a post
router.put("/:id/like" , async(req,res) => {
    try {
        const post = await Post.findById(req.params.id) ;
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push : {likes: req.body.userId } }) ;
            res.status(200).json("The post has been liked") ;
        } else {
            await post.updateOne({ $pull : {likes: req.body.userId }}) ;
            res.status(200).json("The post has been disliked") ;
        }
    } catch (error) {
        res.status(500).json(error) ;
    }
})


//get a post
router.get(":/id" , async(req,res) => {
    try {
        const post = Post.findById(req.params.id) ;
        res.status(200).json(post) ;
    } catch (error) {
        res.status(500).json(error) ;
    }
})


//get timeline posts
router.get("/timeline/:userId" , async(req,res) => {
    try {
        const currUser = await User.findById(req.params.userId) ;
        const userPosts = await Post.find({userId: currUser._id}) ;
        // doubt in working of the map function
        const friendPosts = await Promise.all(
            currUser.followings.map((friendId) => {
                return Post.find({userId: friendId}) ;
            })
        )
        res.json(userPosts.concat(...friendPosts)) ;
    } catch (error) {
        console.log("error occured : " + error)
        res.status(500).json(error) ;
    }
})

export default router ;