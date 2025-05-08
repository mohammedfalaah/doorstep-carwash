import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappChat = () => {
  const phoneNumber = "+919544727727"; // Replace with your WhatsApp number
  const message = "hello"; // Customize your message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      background: "linear-gradient(to right, #4DC247, #1EBEA5)",
      borderRadius: "30px",
      padding: "10px 20px",
      color: "#fff",
      fontWeight: "500",
      textDecoration: "none",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 1000,
    }}
  >
    <FaWhatsapp size={40} style={{ marginRight: "10px" }} />
    Book Now
  </a>
  );
};

export default WhatsappChat;


