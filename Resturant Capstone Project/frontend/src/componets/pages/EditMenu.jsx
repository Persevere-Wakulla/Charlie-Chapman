import React, { useState,useEffect } from 'react'
import BackButton from "../home/BackButton.jsx"
import Spinner from "../home/Spinner.jsx"
import { useNavigate, useParams } from 'react-router-dom'


const EditMenu = () => {
    const [dishName, setDishName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [availability, setAvailabilty] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams()


    const getMenuItem = async () => {
        try {
            setLoading(true)
            console.log('here');
            const req = await fetch(`http://localhost:5050/Menu/${id}`)
            const res = await req.json()
            if (res) {

                setDishName(res.data.dishName);
                setDescription(res.data.description)
                setPrice(res.data.price)
                setCategory(res.data.category)
                setImageUrl(res.data.imageUrl)
                setAvailabilty(res.data.availability)
            }

            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.message);

        }
    }
    useEffect(() => {
        getMenuItem()
    }, [])

    const handleEditMenu = async () => {
        try {
            setLoading(true)
            await fetch(`http://localhost:5050/menu/${id}`, {
                method: "PUT",
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    dishName,
                    description,
                    price,
                    category,
                    imageUrl,
                    availability
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
        <div className='edit-pg'>
            <div className="edit-container">
            <BackButton />
            <h1 className="edit-h1">Edit Menu</h1>
            {loading ? <Spinner /> : ''}
            <div className="edit-div">
                <div className="edit">
                    <label className="edit-label">Dish Name:</label>
                    <input
                        type="text"
                        value={ dishName}
                        className="edit-input"
                        onChange={(e) => setDishName(e.target.value)}
                    />
                </div>
                <div className="edit">
                    <label className="edit-label">Description:</label>
                    <input
                        type="text"
                        value={ description}
                        className="edit-input"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="edit">
                    <label className="edit-label">Price:</label>
                    <input
                        type="text"
                        value={ price}
                        className="edit-input"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="edit">
                    <label className="edit-label">Category:</label>
                    <input
                        type="text"
                        value={category}
                        className="edit-input"
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="edit">
                    <label className="edit-label">Image</label>
                    <input
                        type="text"
                        value={ imageUrl}
                        className="edit-input"
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
            </div>
            <div className="edit">
                    <label className="edit-label">Availability:</label>
                    <input
                        type="text"
                        value={availability}
                        className="edit-input"
                        onChange={(e) => setAvailabilty(e.target.value)}
                    />
                    <button className="edit-btn" onClick={() => handleEditMenu()}>Save</button>
                </div>
                </div>
        </div>
    )

}

export default EditMenu