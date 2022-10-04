import React from "react";
import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact web">
      <div className="contact-left ">
        <div className="adress">
          <i className="fa-solid fa-location-dot"></i>
          <p>71 Ayer Rajah Crescent, #06-14, Singapore 139951</p>
        </div>
        <div className="mail ">
          <i className="fa-solid fa-envelope"></i>
          <p>Email us at: <br /> hello@carbuyer.com.sg</p>
        </div>
      </div>
      <div className="contact-right">
        <div className="phone-number">
          <i className="fa-solid fa-phone"></i>
          <p>
            +65 8808 7905
            <br />
            +7 (700) 51 51 518
          </p>
        </div>
      </div>
    </div>
  );
}
