import express from "express";
const router = express.Router()
import { Menu } from "../models/weeklyMenuModels.js";
// import {Orders} from "../models/order.js"

// Route for Save a new Menu item
router.post('/', async (request, response) => {
    console.log(request.body)
    try {
        if (!request.body.dishName ||
            !request.body.description ||
            !request.body.price ||
            !request.body.category||
            !request.body.imageUrl||
            !request.body.availability) {
            return response.status(400).send({
                message: 'Send all required fields: Dish name,Description, price,category, imageUrl,availability',
            });
        }
        const newMenu = {
            dishName: request.body.dishName,
            description: request.body.description,
            price: request.body.price,
            category: request.body.category,
            imageUrl: request.body.imageUrl,
            availability: request.availability
        };
        const menu = await Menu.create(newMenu);

        return response.status(201).send(menu);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

// Route for Get All menu items from database
router.get('/', async (request, response) => {
    console.log('Getting Menu')
    try {
        const menu = await Menu.find({})
        return response.status(200).json({
            count: menu.length,
            data: menu
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }

})

// Route for Get One menu item from Database by id
router.get('/:id', async (request, response) => {

    try {
        const { id } = request.params;

        const menu = await Menu.findById(id)
        return response.status(200).json({
            count: menu.length,
            data: menu
        })


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }

})


// ! Route for Update a menu item

router.put('/:id', async (request, response) => {
    console.log(request.body);
    try {
        if (!request.body.dishName ||
            !request.body.description ||
            !request.body.price ||
            !request.body.category ||
            !request.body.imageUrl ||
            !request.body.availability) {
            return response.status(400).send({
                message: 'Send all requierd fields: dishName, description, price, catergory, imageUrl, availability',
            });
        }
        const { id } = request.params;

        const result = await Menu.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Menu Item not found' });
        }

        return response.status(200).send({ message: 'Menu updated succcessfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }
})

// !Route to  Delete a menu item
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Menu.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Menu item not found' });
        }

        return response.status(200).send({ message: "Menu item deleted successfully" })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})


export default router