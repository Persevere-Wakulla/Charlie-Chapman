import express from "express";
const router = express.Router()
import { Comment } from "../models/commentModels.js";


// Route for Save a new Comment
router.post('/', async (request, response) => {
    console.log(request.body)
    try {
        if (!request.body.name||
            !request.body.subject||
            !request.body.text ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name,subject, text,publishYear',
            });
        }
        const newComment = {
            name: request.body.name,
            subject: request.body.subject,
            text:request.body.text,
            publishYear: request.body.publishYear,
        };
        const comment= await Comment.create(newComment);

        return response.status(201).send(comment);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

// Route for Get All Comments from database
router.get('/', async (request, response) => {
    console.log('Getting Comments')
    try {
        const comments= await Comment.find({})
        return response.status(200).json({
            count: comments.length,
            data: comments
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }

})

// Route for Get One Comment from Database by id
router.get('/:id', async (request, response) => {

    try {
        const { id } = request.params;

        const comments = await Comment.findById(id)
        return response.status(200).json({
            count:comments.length,
            data: comments
        })
    

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }

})


// ! Route for Update a Comment

router.put('/:id', async (request, response) => {
    try {
        if (!request.body.name||
            !request.body.subject ||
            !request.body.text ||
            !request.body.publishYear
            ) {
            return response.status(400).send({
                message: 'Send all requierd fields: name, subject, text, publishYear',
            });
        }
        const { id } = request.params;

        const result = await Comment.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Comment not found' });
        }

        return response.status(200).send({ message: 'Comment updated succcessfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }
})

// !Route to  Delete a comment
router.delete('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const result = await Comment.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Comment not found' });
        }

        return response.status(200).send({message: "Comment deleted successfully"})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})


export default router