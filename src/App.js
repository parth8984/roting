import React from "react";
import axios from "axios";
import { Component, useState } from "react";
import { BrowserRouter, Route, Routes,  Link , Navigate} from "react-router-dom";
import Header from "./header";
import "./App.css"
import { render } from "@testing-library/react";

const App = () => {
  console.log("App component is renderred ")
 var [ isLoggedIn,setIsLoggedIn ] = useState(false);
    const renderButton = () =>{
      if(isLoggedIn == false){
        return <button onClick={() =>{setIsLoggedIn(true)}}>Login</button>
      }else{
        return <button onClick={() =>{setIsLoggedIn(false)}}>Logout</button>
      }
    }
 return(
      <>
      <BrowserRouter>
     <Header/>
      { renderButton()}
      <Routes>
      <Route path = "/" element = {<h2>Welcome to home page </h2>}/>
      <Route path = "/contact" element = {isLoggedIn==true ?  <h2>Welcome to contact page </h2>: <Navigate to = "/" />}/>
      <Route path = "/about" element = {<h2>Welcome to aboute page </h2>}/>

      </Routes>
      </BrowserRouter>

      </>
    )
  }


export default App;