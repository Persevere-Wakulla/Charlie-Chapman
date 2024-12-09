import { useEffect, useState } from "react"

const AddNewContact = () => {
    const [contact, setContact] = useState({})
    const [list, setList] = useState([])

    useEffect(()=>{

    },[name, telephone, email, address, list])

    function handleSubmit() {
        let newContact = {}
        const inputs = [...document.querySelectorAll('input')]
        inputs.forEach((input) => {
            newContact[input.id] = input.value
        })
    }

    // function handledelete(id) {
    //     let filter = list.filter((item, index)=>{
    //         if(index !== id){
    //             return item
    //         }
    //     })
    //     setList(filter)
    // }

    console.log('addNew');
    return(
        <>
        <div>
            <h2>Add New Contact</h2>
            <br />
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" />
        </div>
        </>
    )
}

export default AddNewContact