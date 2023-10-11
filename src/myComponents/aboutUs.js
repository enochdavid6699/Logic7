import React from 'react'
import '../css/aboutUs.css';


function aboutUs() {
  return (

    <>

      <header>
        <h1>About Us</h1>
      </header>

      <section className="content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci ac justo suscipit dapibus. Proin vel erat nec nulla bibendum varius. Vestibulum ac libero ut leo commodo tempus.</p>

          <h2>Our Mission</h2>
          <p>Our mission is to provide high-quality products and excellent service to our customers. We strive to make a positive impact on our community and the environment.</p>
        </div>

        <div className="team-members">
          <h2>Meet Our Team</h2>
          <div className="team-member">
              <h3>John Doe</h3>
              <p>CEO</p>
          </div>
          <div className="team-member">
              <h3>Jane Smith</h3>
              <p>COO</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Your Company Name</p>
      </footer>
    </>
  )
}

export default aboutUs
