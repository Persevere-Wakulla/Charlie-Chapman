import { useState } from "react";

const SignUpForRecipes = () => {

  // ?variables for form
  const [person, setPerson] = useState({
    firstName: "Charlie",
    lastName: "Chapman",
    email: "cchap@email.com",
    id: crypto.randomUUID(),
    location: {
      city: "Sarasota",
    },
    state: "Fl",
  });
  

  const arr = [1, 2, 3, 4];
  arr.push(5);
  const copy = [...arr];

  // ? function for form inputs
  const handleFirstName = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };
  const handleEmail = (e) => {
    setPerson({ ...person, email: e.target.value });
  };
  const handleLocation = (e) => {
    setPerson({ ...person, location: { ...location, city: e.target.value } });
    setPerson({ ...person, location: { ...location, state: e.target.value } });
  };
  const handleState = (e) => {
    setPerson({ ...person, location: { ...person, state: e.target.value } });
  };

  // ? function to rset form
  const reset = () => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  return (
    <div className="signUp-div" >
      <div className="formdiv">
        {/* inputs and labels for form  to line 85*/}
        <div className="form">
          <label htmlFor="fname" className="form-label">First Name:</label>
          <input
            type="text"
            id="fname"
            onChange={handleFirstName}
            value={person.firstName}
          />{" "}
          <br />
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            onChange={handleLastName}
            value={person.lastName}
          /> <br />
          <label htmlFor="email">Email: </label>
          {/* <input
            type="text"
            id="email"
            onChange={handleEmail}
            value={person.email}
          />
          <br />
          <label htmlFor="location">City: </label>
          <input
            type="text"
            id="location"
            onChange={handleLocation}
            value={person.location.city}
          />
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            id="location"
            onChange={handleState}
            value={person.state}
          /> */}
          <br />
          {/* reset btn */}
          <button className="signUp-btn" onClick={reset}>
            Reset All
          </button>
        </div>
        {/* form input displayed */}
        <div className="display-p">
          <h3>
            {person.firstName} {person.lastName}{" "}
          </h3>
          <h3>{person.email}</h3>
          {/* <h3> {person.location.city}</h3>
          <h3>{person.state}</h3>{" "} */}
        </div>
      </div>
    </div>
  );
};
export default SignUpForRecipes;
