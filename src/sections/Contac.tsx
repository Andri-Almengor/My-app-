import { useState } from "react";
import "../styles/Contac.css";

const ContactSection = () => {
  const [contactMethod, setContactMethod] = useState("email");

  return (
    <div id="contact" className="contact-section">
      <div className="max-width">
        <h2 className="title">Contáctanos</h2>
        <div className="contact-options">
          <button onClick={() => setContactMethod("email")}>Email</button>
          <button onClick={() => setContactMethod("whatsapp")}>WhatsApp</button>
        </div>
        {contactMethod === "email" ? <EmailForm /> : <WhatsAppForm />}
      </div>
    </div>
  );
};

const EmailForm = () => (
  <form className="contact-form" action="mailto:andrickalmengor.com" method="post" encType="text/plain">
    <input type="text" name="name" placeholder="Tu nombre" required />
    <input type="email" name="email" placeholder="Tu email" required />
    <textarea name="message" placeholder="Tu mensaje" required></textarea>
    <button type="submit">Enviar</button>
  </form>
);

const WhatsAppForm = () => (
  <form className="contact-form" method="get" action="https://wa.me/71390044?text=Hola%2C%20me%20gustar%C3%ADa%20contactarte.">
    <input type="text" name="name" placeholder="Tu nombre" required />
    <input type="tel" name="phone" placeholder="Tu número de WhatsApp" required />
    <textarea name="message" placeholder="Tu mensaje" required></textarea>
    <button type="submit">Enviar a WhatsApp</button>
  </form>
);

export default ContactSection;
