import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="footer container-fluid position-relative bg-dark bg-light-radial text-white-50 py-4 px-4">
        <div className="row g-4">
          <div className="col-lg-6 pe-lg-4">
            <Link to="/" className="navbar-brand">
              <h1 className="m-0 text-uppercase text-white" style={{ fontSize: '14px' }}><i className="bi bi-building text-primary me-2"></i>TRIPLE S EXPENDABLE CIVIL ENGINEERS LTD</h1>
            </Link>
            <p className="mb-2">You dream, we build....See your dream come to life.</p>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-2"></i>Nansana</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-2"></i>+256751299834</p>
            <p className="mb-3"><i className="fa fa-envelope me-2"></i>info@example.com</p>
            <div className="d-flex justify-content-start mt-3">
              <a className="btn btn-sm-square btn-primary rounded me-2" href="https://freewebsitecode.com/"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-sm-square btn-primary rounded me-2" href="https://facebook.com/freewebsitecode/"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-sm-square btn-primary rounded me-2" href="https://freewebsitecode.com/"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-sm-square btn-primary rounded" href="https://wa.me/256787881296"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-4">
            <div className="row g-4">
              <div className="col-sm-6">
                <h4 className="text-white text-uppercase mb-3 fs-6">Quick Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-white-50 small mb-1" to="/"><i className="fa fa-angle-right me-2"></i>Home</Link>
                  <Link className="text-white-50 small mb-1" to="/about"><i className="fa fa-angle-right me-2"></i>About Us</Link>
                  <Link className="text-white-50 small mb-1" to="/service"><i className="fa fa-angle-right me-2"></i>Our Services</Link>
                  <Link className="text-white-50 small mb-1" to="/team"><i className="fa fa-angle-right me-2"></i>Meet The Team</Link>
                  <Link className="text-white-50 small" to="/contact"><i className="fa fa-angle-right me-2"></i>Contact Us</Link>
                </div>
              </div>
              <div className="col-sm-6">
                <h4 className="text-white text-uppercase mb-3 fs-6">Popular Links</h4>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-white-50 small mb-1" to="/"><i className="fa fa-angle-right me-2"></i>Home</Link>
                  <Link className="text-white-50 small mb-1" to="/about"><i className="fa fa-angle-right me-2"></i>About Us</Link>
                  <Link className="text-white-50 small mb-1" to="/service"><i className="fa fa-angle-right me-2"></i>Our Services</Link>
                  <Link className="text-white-50 small mb-1" to="/team"><i className="fa fa-angle-right me-2"></i>Meet The Team</Link>
                  <Link className="text-white-50 small" to="/contact"><i className="fa fa-angle-right me-2"></i>Contact Us</Link>
                </div>
              </div>
              <div className="col-sm-12">
                <h4 className="text-white text-uppercase mb-3 fs-6">Newsletter</h4>
                <div className="w-100">
                  <div className="input-group">
                    <input type="text" className="form-control border-light" style={{ padding: '12px 20px' }} placeholder="Your Email Address" /><button className="btn btn-primary px-3 py-2">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark bg-light-radial text-white border-top border-primary px-0">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="py-3 px-4 text-center text-md-start">
            <p className="mb-0 small">&copy; <a className="text-primary" href="#">Triple S Expendable Civil Engineers Ltd</a>. All Rights Reserved.</p>
          </div>
          <div className="py-3 px-4 bg-primary footer-shape position-relative text-center text-md-end">
            <p className="mb-0 small">Designed by @<a className="text-dark" href="https://stechnologies.netlify.app">SamTouch Technologies</a></p>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
  );
};

export default Footer;
