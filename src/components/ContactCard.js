import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import user from "../images/user.png";

const ContactCard = ({ contact }) => {
  const { name, email } = contact;
  return (
    <div className="list-item">
      <span>
        <img className="user-img" src={user} alt="user" />
        {name}
        <br />
        {email}
      </span>
      <span>
        <FaRegTrashAlt className="trash" />
      </span>
    </div>
  );
};

export default ContactCard;
