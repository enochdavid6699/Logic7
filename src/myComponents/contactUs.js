import React from 'react';
import '../css/contactUs.css';


function ContactUs() {
  return (
    <>
      <header>
        <h1>Contact Us</h1>
      </header>

      <section className="content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <address>
            <p>
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
          </address>
        </div>

        <div className="contact-form">
          <h2>Contact Form</h2>
          <form action="/submit_form" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button className='contact-submit-button' type="submit">Submit</button>
          </form>
        </div>
      </section>

      <header>
        <h1>Contact Us</h1>
      </header>

    </>

  );
}

export default ContactUs;
