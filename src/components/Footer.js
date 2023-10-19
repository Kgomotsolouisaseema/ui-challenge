import React from 'react';
import '../styles/Footer.css'; // Import the corresponding CSS file

function Footer() {
    return (
      <footer className="footer bg-light text-center py-3">
        &copy; {new Date().getFullYear()} Your Company
      </footer>
    );
  }
  
  export default Footer;