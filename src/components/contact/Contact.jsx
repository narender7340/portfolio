import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss";

export default function Contact() {
  function refreshPage() {
    window.location.reload(false);
    handleSubmit();
  }
  function handleSubmit() {
    alert("Thanks, I'll reply ASAP :)");
  };
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_c3i556u', 'template_jpq2jz5', form.current, 'SLhu0IJqvczAwiYDE')
      .then((result) => {
          console.log(result.text);
          refreshPage();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
           <form ref={form} onSubmit={sendEmail }>
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
           </form>
      </div>
    </div>
  );
}

