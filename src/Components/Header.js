import React from 'react';

function Header() {
  // Function to handle smooth scrolling to a specific element on the page
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary" style={headerStyles}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#homeSection">
          Processed Food Labels Capture
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#homeSection" onClick={() => scrollToElement('homeSection')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutSection" onClick={() => scrollToElement('aboutSection')}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicesSection" onClick={() => scrollToElement('servicesSection')}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactSection" onClick={() => scrollToElement('contactSection')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// CSS styles for the header
const headerStyles = {
  width: '100%',
  display: 'flex',
  position: 'fixed',
  background: 'cyan',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '20px',
  paddingRight: '20px',
};

export default Header;
