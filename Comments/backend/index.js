import express from "express";
import { Port } from "./config.js";
import cors from 'cors'
import mongoose from 'mongoose'
import commentsRoute from './routes.js/commentsRoute.js'



const app = express();


// Middleware for parsing request body
app.use(express.json());
app.use(cors())

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To Comment Page');
})

app.use('/comments', commentsRoute)

mongoose.connect('mongodb://127.0.0.1/Comments').then(() => {
    console.log('DB has been connect')
    app.listen(Port, () => {
        console.log('Listetning on 5555 http://localhost:5555')
    })
})