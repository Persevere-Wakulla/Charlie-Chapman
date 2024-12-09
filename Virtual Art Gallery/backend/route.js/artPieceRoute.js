import express from "express"
const router = express.Router()
import { Piece } from "../models/artInfo.js"



// Route for Save a new artPiece item
router.post('/', async (req, res) => {
    console.log(req.body)
    const data = req.body
    try {
        if (!data.picOfPiece ||
            !data.pieceName ||
            !data.description ||
            !data.category||
            !data.artistName||
            !data.year) {
            return res.status(400).send({
                message: 'Send all required fields: Picture of piece,Description, category, artist name, year',
            });
        }
        const newPiece = {
            picOfPiece: data.picOfPiece,
            pieceName: data.pieceName,
            description: data.description,
            category: data.category,
            artistName: data.artistName,
            year: data.year
        };
        const piece = await Piece.create(newPiece);

        return res.status(201).send(piece);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message })
    }
})

// Route for Get All piece items from database
router.get('/', async (request, response) => {
    console.log('Getting Piece')
    try {
        const piece = await Piece.find({})
        return response.status(200).json({
            count: piece.length,
            data: piece
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }

})

// Route for Get One piece item from Database by id
router.get('/:id', async (request, response) => {

    try {
        const { id } = request.params;

        const piece = await Piece.findById(id)
        return response.status(200).json({
            count: piece.length,
            data: piece
        })


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }

})


// ! Route for Update a piece item

router.put('/:id', async (request, response) => {
    console.log(request.body);
    try {
        if (!request.body.picOfPiece ||
            !request.body.pieceName ||
            !request.body.description ||
            !request.body.category ||
            !request.body. artistName ||
            !request.body. year) {
            return response.status(400).send({
                message: 'Send all requierd fields: Piece, description,  catergory, Artist, year',
            });
        }
        const { id } = request.params;

        const result = await Piece.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'piece  not found' });
        }

        return response.status(200).send({ message: 'piece updated succcessfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }
})

// !Route to  Delete a piece item
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Piece.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'piece not found' });
        }

        return response.status(200).send({ message: "piece  deleted successfully" })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})


export default router