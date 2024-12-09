import React, { useState, useEffect } from 'react'
import BackButton from '../home/BackButton.jsx'
import Spinner from '../home/Spinner.jsx'
import { useNavigate } from 'react-router-dom'

const CreateMenuItem = () => {
    const [dishName, setDishName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [availability, setAvailabilty] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const createMenuItem = async () => {
        try {
            setLoading(true)
            await fetch('http://localhost:5050/menu', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    dishName: dishName,
                    description: description,
                    price: Number(price),
                    category: category,
                    imageUrl: imageUrl,
                    availability: availability
                })
            })
            setLoading(false)
            navigate('/')
        } catch (error) {
            setLoading(false)
            console.log(error.message);
        }
    }

    return (
        <div>
            <h1 className="create-h1">Create Menu Item</h1>
            {loading ? <Spinner /> : ''}
            <div className="create-div">
                <div className="create">
                    <label className="create-label">Dish Name</label>
                    <input
                        type="text"
                        value={dishName}
                        className=""
                        onChange={(e) => setDishName(e.target.value)}
                    />
                </div>
                <div className="create">
                    <label className="create-label">Description</label>
                    <input
                        type="text"
                        value={description}
                        className=""
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="create">
                    <label className="edit-label">Price</label>
                    <input
                        type="text"
                        value={price}
                        className=""
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="create">
                    <label className="create-label">Category</label>
                    <input
                        type="text"
                        value={category}
                        className=""
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="createcreate">
                    <label className="createcreate-label">Image</label>
                    <input
                        type="text"
                        value={imageUrl}
                        className=""
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
            </div>
            <div className="createcreate">
                <label className="create-label">Availability</label>
                <input
                    type="text"
                    value={availability}
                    className=""
                    onChange={(e) => setAvailabilty(e.target.value)}
                />
                <button className="create-btn" onClick={() => createMenuItem()}>Save</button>
            </div>
        </div>
    )
}

export default CreateMenuItem