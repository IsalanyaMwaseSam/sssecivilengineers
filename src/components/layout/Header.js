import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid px-4 d-none d-lg-block border-bottom border-secondary">
        <div className="row gx-4">
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-2 text-primary me-2"></i>
              <div className="text-start">
                <h6 className="text-uppercase fw-bold mb-0">Our Office</h6>
                <span className="small">Nansana, Uganda</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-2 text-primary me-2"></i>
              <div className="text-start">
                <h6 className="text-uppercase fw-bold mb-0">Email Us</h6>
                <span className="small">info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-2 text-primary me-2"></i>
              <div className="text-start">
                <h6 className="text-uppercase fw-bold mb-0">Call Us</h6>
                <span className="small">+256751299834</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}


      {/* Navbar Start */}
      <div className="container-fluid sticky-top bg-dark shadow-sm px-5 pe-lg-0">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0">
          <Link to="/" className="navbar-brand">
            <h1 className="m-0 text-uppercase text-white" style={{ fontSize: '18px' }}><i className="bi bi-building text-primary me-2"></i>TRIPLE S CIVIL ENGINEERS LTD</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/project" className="nav-item nav-link">Project</Link>
              <Link to="/team" className="nav-item nav-link">Team</Link>
              <Link to="/testimonial" className="nav-item nav-link">Testimonial</Link>
              <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
              <Link to="/admin/login" className="nav-item nav-link">Admin Login</Link>
              <Link to="/get-a-quote" className="btn btn-primary text-white px-4 ms-3 d-none d-lg-block">Get A Quote <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Header;
