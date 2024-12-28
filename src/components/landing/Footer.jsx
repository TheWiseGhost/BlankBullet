import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black font-dm text-white py-8 text-center">
      <p>&copy; {new Date().getFullYear()} BlankDrop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
