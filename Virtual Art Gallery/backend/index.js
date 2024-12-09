import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import artPieceRoute from './route.js/artPieceRoute.js'
import { AdminLogin } from "./models/GalleryLoginModel.js";
import { ContactInfo } from "./models/Contact.js";
import reviewRoute from "./route.js/reviewRoute.js";

const DB = 'mongodb://127.0.0.1/VirtualArtGallery'
const PORT = 5051
const app = express()

// Middleware for parsing request body
app.use(express.json());
app.use(cors())

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To Our Gallery');
})

app.use('/piece', artPieceRoute)
app.use('/review', reviewRoute)

app.post('/', async (req, res) => {
    console.log(req.body);
    const newAdmin = {
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
    }
    const admin = AdminLogin.create(newAdmin)
    res.send(admin)
})

app.post('/contacts', async (req,res) => {
    console.log(req.body);
    const contact = ContactInfo.create(req.body)
    res.send(contact)
})

// app.post()




mongoose.connect(DB).then(() => {
    console.log(`Connected to ${DB}`)
    app.listen(PORT, () => {
        console.log(`Listening on port http://localhost:${PORT}`)
    })
})