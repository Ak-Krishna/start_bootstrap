import React from "react";
import "../App.css";

const About=()=>{
 return (
   <div className="about">
     <h1 className="about_head">About us</h1>
     <div class="line_design">
       <div class="line2"></div>
       <div class="star2">
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
       <div class="line2"></div>
     </div>
     <div className="content">
       <div className="left_content">
         <p>
           Freelancer is a free bootstrap theme created by Start Bootstrap. The
           download includes the complete source files including HTML, CSS, and
           JavaScript as well as optional SASS stylesheets for easy
           customization
         </p>
       </div>
       <div className="right_content">
         <p>
           You can create your own custom avatar for the masthead, change the
           icon in the dividers, and add your email address to the contact form
           to make it fully functional!
         </p>
       </div>
     </div>
   </div>
 );
}
export default About;