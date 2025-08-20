import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Contact</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0"><Link to="/">Home</Link></h6>
          <h6 className="text-white m-0 px-3">/</h6>
          <h6 className="text-uppercase text-white m-0">Contact</h6>
        </div>
      </div>
      {/* Page Header Start */}


      {/* Contact Start */}
      <div className="container-fluid py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">Please <span className="text-primary">Feel Free</span> To Contact Us</h1>
        </div>
        <div className="row gx-0 align-items-center">
          <div className="col-lg-8">
            <iframe
              className="position-relative rounded w-100 h-100 shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.756195748281!2d32.57143467493779!3d0.324268699664654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb7e5e347895%3A0x67310f769019d3f1!2sTriple%20S%20Expendable%20Civil%20Engineers!5e0!3m2!1sen!2sug!4v1719227607755!5m2!1sen!2sug"
              frameBorder="0"
              style={{ minHeight: '400px', border: '0' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Triple S Expendable Civil Engineers Location on Google Maps"
            ></iframe>
          </div>
          <div className="col-lg-6">
            <div className="contact-form bg-light p-4 rounded shadow">
              <form>
                <div className="row g-2">
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: '45px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: '45px' }} />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control border-0" placeholder="Subject" style={{ height: '45px' }} />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control border-0" rows="3" placeholder="Message"></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-2" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
};

export default Contact;
