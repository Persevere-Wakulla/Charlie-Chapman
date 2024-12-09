import AddNewContact from "./AddNewContact"
import { useState, useEffect } from "react";

const ContactBookMain = () => {
    // <AddNewContact/>

    const [contact, setContact] = useState({})

    // useEffect(()=>{

    // },[name, telephone, email, address, list])

    function handleSubmit() {
        let newContact = {}
        const inputs = [...document.querySelectorAll('input')]
        inputs.forEach((input) => {
            newContact[input.id] = input.value
        })
        setContact(newContact)
    }

  

    return(
        <>
        <div>
            <h2>Add New Contact</h2>
            <br />
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" />
            <label htmlFor="name">Telephone Number:</label>
            <input id="name" type="text" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="contact">
            {contact && 
            <h2>{contact.name}</h2>
}
        </div>
        </>
    )
}

export default ContactBookMain