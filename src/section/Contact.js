import React from 'react'
import Fade from "react-reveal";

const Contact = () => {
  return (
    <section id="contactinfo">
      <div style={{ textAlign: "center" }} className="row">
        <div className="contact-details">

          <h2 >Contact Details</h2>
          <Fade bottom>
          <p className="address">
            <span>{process.env.REACT_APP_NAME}</span>
            <br />
            <span>
              <br />
              {process.env.REACT_APP_ADDRESS}
            </span>
            <br />
            <span><a href="tel:+919106116932"><i class="fa fa-phone"></i>{process.env.REACT_APP_PHONE}</a></span>
            <br />
            <span><a href="mailto:satidabhi555@gmail.com" target="_blank" rel="noreferrer">
              <i class="fa fa-envelope"></i>
              {process.env.REACT_APP_EMAIL}
            </a></span>
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Contact;
