import React from 'react';
import './About.css';
import logo from './giphy.gif';

function Contact() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="image-container">
        <img src={logo} alt="Not loaded" />
      </div>
      <div className="content-container">
        <h1 className="title text-center mb-4">About Us </h1>
        <div className="form-group message">
          <textarea
            id="formMessage"
            className="form-control form-control-lg"
            rows="15"
            readOnly
          >
            At Processed Food Label Capture, we envision a world where every consumer can make informed choices about
            the foods they purchase and consume. We believe that access to accurate and comprehensive information on
            processed food labels is essential for promoting healthier eating habits and better dietary decisions. By
            offering a convenient and user-friendly solution, we aim to create a positive impact on the well-being of
            individuals and communities alike.
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default Contact;
