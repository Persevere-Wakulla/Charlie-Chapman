import React from 'react'
import {useParams} from 'react-router-dom';
import BackButton from "../home/BackButton.jsx";
import Spinner from "../home/Spinner.jsx";


const ShowMenu = () => {
    const [menu, setMenu] = useState({})
    const {id} = useParams();

    let loading

    useEffect(() => {
        const getMenu = async () => {
          loading = true
          try {
            const req = await fetch('http://localhost:5050/Menu/')
            const res = await req.json()
            if (res) setMenu(res.data.find(menu=> menu._id === id))
            loading = false
          } catch (error) {
            loading = false
            console.log(error.message);
          }
        }
          getMenu()
        }, [])

  return (
    <div>
        <BackButton/>
        <h1 className="show-h1">Dish Shown</h1>
        {loading ? (
            <Spinner/>
             ):(
                <div className="dishItem">
                    <div className="show-div">
                        <span className="show-span">Dish Name:</span>
                        <span className="dish-item">{menu.dishName}</span>
                    </div>
                    <div className="show-div">
                        <span className="show-span">Description:</span>
                        <span className="dish-item">{menu. description}</span>
                    </div>
                    <div className="show-div">
                        <span className="show-span">Price:</span>
                        <span className="dish-item">${menu. price}</span>
                    </div>
                    <div className="show-div">
                        <span className="show-span">Availability:</span>
                        <span className="dish-item">${menu.availability}</span>
                    </div>
                    <div className="show-img">
                        <span className="dish-img">{menu.imageUrl}</span>
                    </div>
                </div>
                
             )
       }
    </div>
  )
}

export default ShowMenu