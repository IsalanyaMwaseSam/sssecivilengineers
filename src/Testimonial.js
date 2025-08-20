import React from 'react';
import { Link } from 'react-router-dom';

const Testimonial = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Testimonial</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0"><Link to="/">Home</Link></h6>
          <h6 className="text-white m-0 px-3">/</h6>
          <h6 className="text-uppercase text-white m-0">Testimonial</h6>
        </div>
      </div>
      {/* Page Header Start */}


      {/* Testimonial Start */}
      <div className="container-fluid bg-light py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">What Our <span className="text-primary">Happy Clients</span> Say!!!</h1>
        </div>
        <div className="row gx-0 align-items-center">
          <div className="col-xl-4 col-lg-5 d-none d-lg-block">
            <img className="img-fluid w-100 h-100 rounded" src="/img/testimonial.jpg" alt="Testimonial section background image" />
          </div>
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="testimonial bg-light p-4 rounded shadow">
              <div className="owl-carousel testimonial-carousel">
                <div className="row gx-3 align-items-center">
                  <div className="col-xl-4 col-lg-5 col-md-5">
                    <img className="img-fluid w-100 h-100 bg-light p-lg-2 mb-3 mb-md-0 rounded" src="/img/testimonial-2.jpg" alt="Waligo Betty, a happy client" />
                  </div>
                  <div className="col-xl-8 col-lg-7 col-md-7">
                    <h4 className="text-uppercase mb-0 fs-5">Waligo Betty</h4>
                    <p className="small mb-2">Residential House</p>
                    <p className="fs-6 mb-0"><i className="fa fa-quote-left text-primary me-2"></i>
                      A very good company to entrust your project with. They worked diligently, and delivered quality work.
                    </p>
                  </div>
                </div>
                <div className="row gx-3 align-items-center">
                  <div className="col-xl-4 col-lg-5 col-md-5">
                    <img className="img-fluid w-100 h-100 bg-light p-lg-2 mb-3 mb-md-0 rounded" src="/img/testimonial-1.jpg" alt="Mutalya Paul, a civil engineer and client" />
                  </div>
                  <div className="col-xl-8 col-lg-7 col-md-7">
                    <h4 className="text-uppercase mb-0 fs-5">Mutalya Paul</h4>
                    <p className="small mb-2">Civil Engineer</p>
                    <p className="fs-6 mb-0"><i className="fa fa-quote-left text-primary me-2"></i> Triple S Expendable Civil Engineers Ltd has very skilled workers. They deliver work as promised!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  );
};

export default Testimonial;
