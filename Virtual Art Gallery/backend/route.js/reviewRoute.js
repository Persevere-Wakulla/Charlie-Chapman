import express from "express";
const router = express.Router();
import { Review } from "../models/Reviews.js";


// Route for Save a new Review
router.post('/', async (req, res) => {
    console.log(req.body)
    const data = req.body
    try {
        if (!data.img||
            !data.userName||
            !data.review ||
            !data.date
        ) {
            return res.status(400).send({
                message: 'Send all required fields: picture,user name, review,date',
            });
        }
        const newReview = {
            img: data.img,
            userName: data.userName,
            review:data.review,
            date: data.date,
        };
        const review= await Review.create(newReview);

        return res.status(201).send(review);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

// Route for Get All REview from database
router.get('/', async (request, res) => {
    console.log('Getting Review')
    try {
        const review= await Review.find({})
        return res.status(200).json({
            count: review.length,
            data: review
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }

})

// Route for Get One review from Database by id
router.get('/:id', async (request, res) => {

    try {
        const { id } = request.params;

        const review = await Review.findById(id)
        return res.status(200).json({
            count:review.length,
            data: review
        })
    

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }

})

// ! Route for Update a Review

router.put('/:id', async (request, response) => {
    try {
        if (!request.body.img||
            !request.body.userName ||
            !request.body.review||
            !request.body.date
            ) {
            return response.status(400).send({
                message: 'Send all requierd fields: img, User Name, Review, Date',
            });
        }
        const { id } = request.params;

        const result = await Review.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Review not found' });
        }

        return response.status(200).send({ message: 'review updated succcessfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }
})

// !Route to  Delete a review
router.delete('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const result = await Review.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Review not found' });
        }

        return response.status(200).send({message: "Review deleted successfully"})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})


export default router