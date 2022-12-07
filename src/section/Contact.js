import React from 'react'
import Fade from "react-reveal";

const Contact = () => {
  return (
    <section id="contactinfo">
      <div style={{ textAlign: "center" }} className="row">
        <div className="contact-details">

          <h2 >Contact Details</h2>
          <p className="address">
            <span>{process.env.REACT_APP_NAME}</span>
            <br />
            <span>
              <br />
              {process.env.REACT_APP_ADDRESS}
            </span>
            <br />
            <span>{process.env.REACT_APP_PHONE}</span>
            <br />
            <span>{process.env.REACT_APP_EMAIL}</span>
          </p>
          <Fade bottom>
            <div className="twelve columns social-icons">
              <ul className="mikeySocial row">
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-12'
                  key="linkedin">
                  <a href="https://www.linkedin.com/in/satish-dabhi-05178816a" target="_blank" rel="noreferrer">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-12'
                  key="github">
                  <a href="https://github.com/Satish-Dabhi" target="_blank" rel="noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-12'
                  key="mail">
                  <a href="mailto:satidabhi555@gmail.com" target="_blank" rel="noreferrer">
                    <i class="fa fa-envelope"></i>
                  </a>
                </li>
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-12'
                  key="phone">
                  <a href="tel:+919106116932"><i class="fa fa-phone"></i></a>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Contact;
