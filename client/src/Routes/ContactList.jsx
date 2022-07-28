import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const ContactList = () => {
  const [contact, setContact] = useState([]);

  const deleteContact = async (id) => {
    try {
      const deleteContact = await fetch(`http://localhost:3001/contact/${id}`, {
        method: "DELETE",
      });

      setContact(contact.filter((info) => info.user_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getContact = async () => {
    try {
      const response = await fetch("http://localhost:3001/contact");
      const jsonData = await response.json();

      setContact(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  console.log(contact);
  

  return (
    <div>
      <Header />
      <Navbar />
      

     

      <div className="contactlist">
        
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Delete</th>
          </tr>
          {contact.map((info) => (
            <tr key={info.user_id}>
              <td>{info.name}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteContact(info.user_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactList;
