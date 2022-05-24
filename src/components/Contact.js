import React from "react";
import"../App.css";

const Contact=()=>{
 return (
   <div className="contact">
     <h2 className="contact_head">Contact</h2>
     <div class="c_design">
       <div class="line3"></div>
       <div class="star3">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           width="16"
           height="16"
           fill="currentColor"
           class="bi bi-star-fill"
           viewBox="0 0 16 16"
         >
           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
         </svg>
       </div>
       <div class="line3"></div>
     </div>
     <div className="form_container">
       <form className="form">
         <div className="input_field">
           <input type="text" className="input" id="name" />
           <label htmlFor="name">enter email</label>
         </div>
         <div className="input_field">
           <input type="email" className="input" id="email" />
           <label htmlFor="email">enter email</label>
         </div>
         <div className="input_field">
           <input type="tel" className="input" id="mob" />
           <label htmlFor="mob">phone number</label>
         </div>
         <div className="input_field">
           <input type="text" className="input" id="msg" />
           <label htmlFor="msg">message </label>
         </div>
         <input type="submit" className="btn" value="Submit" />
       </form>
     </div>
   </div>
 );
}
export default Contact;