import { NavLink, Outlet } from "react-router-dom";
import { useRef, useState } from "react";


const Interact = () => {

  // ? ref for div used to scroll the bottomm of the page
  const bottomRef = useRef(null);

  // ? function to scroll to bottom of page
  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <div className="interact-div">
      <div className="interact-div2">
        <h2 className="interact-h2">Interact with us </h2>
        <p className="interact-h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          quaerat.
        </p>
      </div>
      <div>
        <nav className="interact-nav">
          <NavLink  to="faq" onClick={handleScrollToBottom} >View the FAQ</NavLink>
          <NavLink to="contact"  onClick={handleScrollToBottom} >Contact us</NavLink>
        </nav>
        <div ref={bottomRef}></div>
        <Outlet />
      </div>
    </div>
  );
};
export default Interact;
