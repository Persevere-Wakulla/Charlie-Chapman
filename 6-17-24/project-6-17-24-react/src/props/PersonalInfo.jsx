import { useState } from 'react';
import Education from '../objects and state/components/Education';


export default function PersonalInfo() {
    const [person, setPerson] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'your@email.com',
        phone:'(941)747-3011',
        address:'2424 main St.',
        city:'Sarasota',
        state:'Florida'
        
      });

 function handleFirstName(e) {
    setPerson({ ...person, firstName: e.target.value })
    console.log(e.target.value);
 }

function handleLastName(e) {
 setPerson({ ...person, lastName: e.target.value });
}
function handleEmail(e) {
 setPerson({ ...person, email: e.target.value });
}
function handlePhone(e) {
 setPerson({ ...person, phone: e.target.value });
 
}
function handleAddress(e) {
 setPerson({ ...person, address: e.target.value });
 
}
function handleCity(e) {
 setPerson({ ...person, city: e.target.value });
 
}
function handleState(e) {
 setPerson({ ...person, state: e.target.value });
 
}
// function reset() {
   
//     document.querySelectorAll('input').forEach(input => input.value = '')

//   }

return(
    <main>
        
        <div className='inputDiv1'>
         <label htmlFor="fname">First Name:</label>
      <input
        type="text"
        id="fname"
        onChange={handleFirstName}
        value={person.firstName}
        />
      <br />
      <label htmlFor="lname">Last Name:</label>
      <input
        type="text"
        id="lname"
        onChange={handleLastName}
        value={person.lastName}
        />
        <br />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        onChange={handleEmail}
        value={person.email}
        />
        <br />
      <label htmlFor="phone">Phone: </label>
      <input
        type="text"
        id="phone"
        onChange={handlePhone}
        value={person.phone}
        />
        <br />
      <label htmlFor="Address">Address: </label>
      <input
        type="text"
        id="address"
        onChange={handleAddress}
        value={person.address}
        />
        <br />
      
      <label htmlFor="city">City: </label>
      <input
        type="text"
        id="city"
        onChange={handleCity}
        value={person.city}
        />
        <br />
      <label htmlFor="state">State: </label>
      <input
        type="text"
        id="state"
        onChange={handleState}
        value={person.state}
        />
        </div>
        
         {/* <Education/> */}
      <div className='infoDiv'>
        <p> {person.firstName}</p>
        <p> {person.lastName}</p>
        <p> {person.email}</p>
        <p> {person.phone}</p>
        <p> {person.address}</p>
        <p> {person.city}</p>
        <p> {person.state}</p>
      
      </div>
     
    </main>
)

}