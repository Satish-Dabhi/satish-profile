import React from "react";
import Fade from "react-reveal";

const Footer = () => {
  return (
    <section id="footer">
      <footer >
        <div className="row" style={{ "display": "block" }} >
          <Fade bottom>
            <div className="twelve columns">
              <ul className="mikeySocial row">
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-6'
                  key="linkedin">
                  <a href="https://www.linkedin.com/in/satish-dabhi-05178816a" target="_blank" rel="noreferrer">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-6'
                  key="github">
                  <a href="https://github.com/Satish-Dabhi" target="_blank" rel="noreferrer">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-6'
                  key="mail">
                  <a href="mailto:satidabhi555@gmail.com" target="_blank" rel="noreferrer">
                    <i class="fa fa-envelope"></i>
                  </a>
                </li>
                <li
                  className='col-lg-3 col-md-6 col-sm-6 col-xs-6'
                  key="phone">
                  <a href="tel:+919106116932"><i class="fa fa-phone"></i></a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="fa fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>
    </section>

  );
}

export default Footer;