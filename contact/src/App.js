import React, { useState } from "react";
import emailjs from 'emailjs-com';

import './App.css'


const App = () => {
  


    function sendEmail(e) {
      e.preventDefault();
    
      emailjs.sendForm('service_qmavtb5', 'template_gqg8kql', e.target, 'user_Cz8IP8moxGJIlMzKdnJRn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h2>Contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          
          placeholder="name"
         
          autoComplete="off"
        />
        <input
          type="text"
          id="company"
          name="company"
          
          placeholder="société"
          
        />
        <input
          type="text"
          id="phone"
          name="phone"
         
          placeholder="téléphone"
          
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            
            placeholder="email"
           
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          
          placeholder="message *"
          
        />
      </div>
      <input
        className="button"
        type="submit"
        value="Envoyer"
       
      />
      <div className="form-message"></div>
    </form>
  );
};

export default App;