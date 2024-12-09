import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

// ! useContext() = React Hook  that allows you to share values between multiple levels of components

// ? provider components
// import {createContext}
// ? export const MyContent = createContext()
// !<MyContent.Provider value={value}>
// ? <CHILD/>
// !<MyContent.provider>

// CONSUMER COMPONENTS
// ? 1. import {useContext} from 'react'
// ?    import {MyContext} from "./ComponentA"
// ? 2. const value = useContext(MyContent)

const ComponentA = () => {
  const [user, setUser] = useState("Dolla");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
};
export default ComponentA;
