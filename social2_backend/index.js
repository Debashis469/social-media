import express from "express";
import morgan from "morgan" ;
import helmet from "helmet" ;
import mongoose from "mongoose" ;
import userRoute from "./routes/users.js" ;
import authRoute from "./routes/auth.js" ;
import postRoute from "./routes/posts.js"

const app = express() ;
const PORT = 8000 ;

mongoose.connect("mongodb://localhost:27017/social" ) ;

//middlewares
app.use(express.json()) ;
app.use(helmet()) ;
app.use(morgan("common")) ;

app.use("/user" , userRoute) ;
app.use("/auth" , authRoute) ;
app.use("/post", postRoute ) ;


app.get("/" , (req,res) => {
    res.send("Welcome to homepage") ;
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})