import React from "react"
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";


const Body = () => {

    return(
        <div>
            <Routes>
                <Route path="/" element={<Menu/>}> </Route>
                <Route path="/menu" element={<Menu/>}> </Route>
                <Route path="/about" element={<About/>}> </Route>
                <Route path="/contact" element={<Contact/>}> </Route>
            </Routes>
        </div>
    )

}

export default Body;