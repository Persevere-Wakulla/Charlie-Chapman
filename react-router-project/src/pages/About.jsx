import { useState } from "react"
import { Navigate } from "react-router-dom"

const About = () => {
    const [user, setUser] = useState('Ashir')
    if(!user){
        return <Navigate to="/" replace={true}/>
    }
    return(
        <div>
            <h1>This Is The About Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt blanditiis sapiente velit sint iusto aliquid perferendis, vero omnis vitae! Exercitationem atque tempore deserunt fugiat voluptates facilis cumque aperiam tempora!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt blanditiis sapiente velit sint iusto aliquid perferendis, vero omnis vitae! Exercitationem atque tempore deserunt fugiat voluptates facilis cumque aperiam tempora!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt blanditiis sapiente velit sint iusto aliquid perferendis, vero omnis vitae! Exercitationem atque tempore deserunt fugiat voluptates facilis cumque aperiam tempora!</p>
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}
export default About