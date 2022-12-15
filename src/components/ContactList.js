import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  const renderList = contacts.map((contact) => {
    return (
      <div className="container contact-list" key={new Date().toDateString()}>
        <ContactCard contact={contact} />
      </div>
    );
  });

  return (
    <div className="contact-list container">
      <h2>Contact List</h2>
      {renderList}
    </div>
  );
};

export default ContactList;
