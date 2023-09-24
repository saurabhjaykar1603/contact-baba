import React from "react";
import "./ContactCard.css";
const ContactCard = ({ name, mobile }) => {
  return (
    <>
    <div className="scroll">
    <div className="contact-card">
        <h1>{name}</h1>
        <span>{mobile}</span>
      </div>
    </div>
      
    </>
  );
};

export default ContactCard;
