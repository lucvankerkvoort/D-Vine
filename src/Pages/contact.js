import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: email,
      subject: subject,
      to_name: "Kastjesfabriek",
      message_html: message,
    };
    emailjs
      .send(
        "kastjesfabriek",
        "general",
        templateParams,
        "user_rpcRGHi1Y0p1xl1IdxtTc"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("Your message was not able to be sent", err);
        }
      );
    setEmail("");
    setMessage("");
    setSubject("");
    setSuccess("Verstuurt");
  };
  return (
    <div className="contact">
      <div className="google-maps">
        <iframe
          title="Address"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9744.609325686444!2d4.8535921!3d52.3676578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e20d4a522ccb%3A0x2e76b22d4c3e3461!2sMarco%20Polostraat%20108HS%2C%201057%20WV%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1597787548472!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
      <div className="contact-info">
        <div className="info">
          <p>Kastjesfabriek</p>
          <p>Tel: 0628779915</p>
          <p>Email: info@kastjesfabriek.nl</p>
        </div>
        <form className="sending-inquiry" onSubmit={handleEmail}>
          <input
            name="email"
            type="email"
            placeholder="E-mail adres"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="title"
            type="text"
            placeholder="Onderwerp"
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            type="text"
            placeholder="Type hier je bericht"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Verzenden</button>
          <p className="send">{success}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
