import React from "react";
import Home from "./pages/Home";
import CreateComment from "./pages/CreateComment";
import ShowComment from "./pages/ShowComment";
import EditComment from "./pages/EditComment"
import DeleteComments from "./pages/DeleteComment";
import {Route, Routes} from 'react-router-dom' 
import './Main.css'

const App = () => {
  return (
    
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/comments/create' element={<CreateComment/>} />
    <Route path='/comments/details/:id' element={<ShowComment/>} />
    <Route path='/comments/edit/:id' element={<EditComment/>} />
    <Route path='/comments/delete/:id' element={<DeleteComments/>} />
   </Routes>
   
  );
};

export default App;
