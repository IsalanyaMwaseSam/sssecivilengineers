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
          <div className="col-lg-6 mb-4 mb-lg-0" style={{ height: '400px' }}>
            <iframe className="w-100 h-100 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
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
