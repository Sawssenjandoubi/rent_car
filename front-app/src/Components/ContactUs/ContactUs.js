import React from "react";
import './Style.css'
import people1 from '../../assets/people/1.png'
import people2 from '../../assets/people/2.png'
import people3 from '../../assets/people/3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footerr from "../footer/Footer";
const Contact = () => {
  return (
    <div>
    <div className="contact-details">
     <div className="details">
     <p>GET IN TOUCH</p>
     <h3>Visit one of our agency locations or contact us today</h3>
     <h6>Head Office</h6>
     <div className="icon-with-phrase">
        <p><span><i className="fa-solid fa-map"></i></span> 
        Tunis-beja</p>
     </div>
     <div className="icon-with-phrase">
        <p> <span><i className="fa-solid fa-envelope"></i></span>
        contact@exemple.com</p>
     </div>
     
     <div className="icon-with-phrase">
        <p> <span><FontAwesomeIcon icon="fa-sharp fa-solid fa-clock" /></span>
        Monday To Saturday 9.00am to 16.00pm</p>
     </div>
    </div>
     <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.40008030635!2d10.073236888563171!3d36.79499988606579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1653513810365!5m2!1sfr!2stn" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
     </div>
     <div className="formulaire">
        <form>
     <p style={{fontSize: "14px"}}>LEAVE A MESSAGE</p>
     <h4>We Love To Hear From You</h4>
     <input type="text" placeholder="Your Name"/>
     <input type="email" placeholder="Your Email"/>
     <input type="text" placeholder="Subject"/>
     <textarea placeholder="Your Message" cols="30" rows="10"></textarea>
     <button id="bt-of-form">Submit</button>
        </form>
    
   <div className="personnes">
     <div className="bloc-pers">
     <div className="img-per">
       <img src={people1} alt=''/>
       
     
  
     </div>
     <div className="description-pers">
       <h4>John Doe</h4>
       <p>Senior Marketing Manager </p>
       <p>Phone +000 123 000 77 88</p>
       <p>Contact@exemple.com</p>
     </div>
    </div>
    <div className="bloc-pers">
     <div className="img-per">
      <img src={people2}/>
    </div>
    <div className="description-pers">
      <h4>William Smith</h4>
      <p>Senior Marketing Manager </p>
      <p>Phone +000 123 000 77 88</p>
      <p>Contact@exemple.com</p>
    </div>
  </div>
  <div className="bloc-pers">
    <div className="img-per">
     <img src={people2}/>
   </div>
   <div className="description-pers">
     <h4>Emma Stone</h4>
     <p>Senior Marketing Manager </p>
     <p>Phone +000 123 000 77 88</p>
     <p>Contact@exemple.com</p>
   </div>
 </div>




   </div>
   
   </div>
   <Footerr/>
   </div>
  );
};
  
export default Contact;