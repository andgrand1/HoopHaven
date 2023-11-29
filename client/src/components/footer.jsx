import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <img src="/assets/images/Twitter_new_X_logo.png" alt="Image 1" className="img-fluid mx-2" style={{ width: '50px', height: '50px' }} />
      <a href="https://github.com/andgrand1/HoopHaven" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/25231.png" alt="GitHub Repository" className="img-fluid mx-2" style={{ width: '50px', height: '50px' }} />
      </a>
      <p>&copy; 2023 Hoop Haven. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
