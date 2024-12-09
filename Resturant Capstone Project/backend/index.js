import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import menuRoute from './routes.js/menuRoute.js'
import { Manager } from "./models/MangerLogInModel.js";

const DB = 'mongodb://127.0.0.1/ResturantCapStoneProject'
const PORT = 5050
const app = express();


// Middleware for parsing request body
app.use(express.json());
app.use(cors())

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To Our Menu');
})

app.use('/menu', menuRoute)
app.post('/', async (req, res) => {
    console.log(req.body);
    const newMan = {
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
    }
    const manager = Manager.create(newMan)
    res.send(manager)
})

// app.post('/', async (req, res) => {
//     console.log(req.body);
//     const user = await Manager.find({
//         name: req.body.name,
//          email:req.body.email,
//         password: req.body.password
//     })
//     if (!user) {
//         res.status(400).send({ message: 'User not found' })
//     }
//     res.status(500).send(user)
// })

mongoose.connect(DB).then(() => {
    console.log(`Connected to ${DB}`)
    app.listen(PORT, () => {
        console.log(`Listetning on port http://localhost:${PORT}`)
    })
})