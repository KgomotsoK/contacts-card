import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function Card({ contact }) {
  return (
    <div className="contact-card">
      <div className="image-container">Contact Image Placeholder</div>
      <div className="contents-cont">
        <h1>{contact.names}</h1>
        <p className="occupation">{contact.Occupation}</p>

        <p className="email">
          <FontAwesomeIcon icon={faAt} />
          <span>Email:</span>
          {contact.Email}
        </p>

        <p className="phone">
          <FontAwesomeIcon icon={faPhone} />
          <span>Phone:</span>
          {contact.Phone}
        </p>

        <p className="quote">{contact.Quote}</p>
      </div>
    </div>
  );
}
