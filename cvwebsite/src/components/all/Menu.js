import "./menu.css"
import myvid from "../video/myvid.mp4";
import { Routes, Route, Link } from "react-router-dom";

import Cvbody from "../data/CvBody/Cvbody";

import { useState } from "react";

import "../../assets/icons/style.css";
import Tictac from "../games/TicTacToe/Tictac";
import Memo from "../games/hangeman/Hangeman";
import Hangeman from "../games/hangeman/Hangeman";


function Menu(){

    return (
        <div className="menu">
            <div className="vid">
        <video className="video" src={myvid} loop muted autoPlay/>
         </div>
         <div className="in">
            <div className="header">
                <button className="btn1"> <Link  to="/CV">CV</Link> </button>
                <button className="btn1"> <Link to="/XO">XO</Link> </button>
                <button className="btn1"><Link to="/hangeman">Hangeman</Link> </button>
            </div>  
          
            <Routes>
                <Route path="/CV" element={<Cvbody/>}/>
                <Route path="/XO" element={<Tictac/>}/>
                <Route path="/hangeman" element={<Hangeman/>}/>
            </Routes>

         </div>
        </div>
    )
}
export default Menu;