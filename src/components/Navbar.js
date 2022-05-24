import React from "react";
import"../App.css";
const Navbar=()=>{
 return (
   <div className="navbar">
     <div className="logo">Start bootstrap</div>
     <div className="nav_links">
       <ul className="nav_box">
         <li className="link">
           <a link="./Portfolio.js">portfolio</a>
         </li>
         <li className="link">about</li>
         <li className="link">contact</li>
       </ul>
     </div>
   </div>
 );
}
export default Navbar;
