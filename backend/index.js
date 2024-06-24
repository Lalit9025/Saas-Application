import express from 'express'
import allRoutes from './routes/allRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())

app.use("/auth",allRoutes);

app.get("/", (req,res) => {
    res.send({
        message:"welcome to testing"
    })
})

const PORT = process.env.PORT ||8080 ;

app.listen(PORT,() =>{
    console.log(`server is running on ${process.env.PORT}`)
})