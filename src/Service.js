import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Service</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0"><Link to="/">Home</Link></h6>
          <h6 className="text-white m-0 px-3">/</h6>
          <h6 className="text-uppercase text-white m-0">Service</h6>
        </div>
      </div>
      {/* Page Header Start */}


      {/* Services Start */}
      <div className="container-fluid bg-light py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">We Provide <span className="text-primary">The Best</span> Construction Services</h1>
        </div>
        <div className="row g-4 cards-equal-height">
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white d-flex flex-column align-items-center text-center rounded shadow">
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0006.jpg" alt="" />
              <div className="service-icon bg-white rounded-circle shadow">
                <i className="fa fa-3x fa-building text-primary"></i>
              </div>
              <div className="px-3 pb-3 flex-grow-1 d-flex flex-column justify-content-between">
                <h4 className="text-uppercase mb-2 fs-5">Building Construction</h4>
                <p className="small mb-0">Transform your vision into reality with our top-notch building and construction services. We bring expertise, precision, and dedication to every project, ensuring quality craftsmanship and timely completion.
                </p>
                <Link className="btn text-primary py-1 px-2 mt-3" to="/service">Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center shadow">
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0056.jpg" alt="" />
              <div className="service-icon bg-white rounded-circle shadow">
                <i className="fa fa-3x fa-home text-primary"></i>
              </div>
              <div className="px-3 pb-3 flex-grow-1 d-flex flex-column justify-content-between">
                <h4 className="text-uppercase mb-2 fs-5">Plumbing & Electrical Works</h4>
                <p className="small mb-0">Ensure your project's success with our reliable plumbing and electrical services. We deliver comprehensive solutions for all your needs, from efficient plumbing installations and repairs to safe electrical wiring and systems.</p>
                <Link className="btn text-primary py-1 px-2 mt-3" to="/service">Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center shadow">
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0248.jpg" alt="" />
              <div className="service-icon bg-white rounded-circle shadow">
                <i className="fa fa-3x fa-drafting-compass text-primary"></i>
              </div>
              <div className="px-3 pb-3 flex-grow-1 d-flex flex-column justify-content-between">
                <h4 className="text-uppercase mb-2 fs-5">Architecture Design</h4>
                <p className="small mb-0">Unlock the potential of your project with our innovative and precise architectural services. Our expert team creates custom architectural plans and detailed blueprints tailored to your vision. </p>
                <Link className="btn text-primary py-1 px-2 mt-3" to="/service">Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center shadow">
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0001.jpg" alt="" />
              <div className="service-icon bg-white rounded-circle shadow">
                <i className="fa fa-3x fa-palette text-primary"></i>
              </div>
              <div className="px-3 pb-3 flex-grow-1 d-flex flex-column justify-content-between">
                <h4 className="text-uppercase mb-2 fs-5">Interior, Exterior & Compound Design</h4>
                <p className="small mb-0">Elevate your spaces with our exceptional interior and exterior design services, including expert compound designing. Our creative team transforms interiors into stunning, functional spaces that reflect your style and needs.</p>
                <Link className="btn text-primary py-1 px-2 mt-3" to="/service">Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center shadow">
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0146.jpg" alt="" />
              <div className="service-icon bg-white rounded-circle shadow">
                <i className="fa fa-3x fa-tools text-primary"></i>
              </div>
              <div className="px-3 pb-3 flex-grow-1 d-flex flex-column justify-content-between">
                <h4 className="text-uppercase mb-2 fs-5">Swimming Pool Construction, Stone Cladding & Roofing</h4>
                <p className="small mb-0">Transform your property with our specialized services in swimming pool construction, stone cladding, and roofing. Our team builds stunning, custom swimming pools that provide a perfect oasis for relaxation and entertainment.</p>
                <Link className="btn text-primary py-1 px-2 mt-3" to="/service">Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white rounded d-flex flex-column align-items-center text-center shadow">
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0000.jpg" alt="" />
              <div className="service-icon bg-white rounded-circle shadow">
                <i className="fa fa-3x fa-paint-brush text-primary"></i>
              </div>
              <div className="px-3 pb-3 flex-grow-1 d-flex flex-column justify-content-between">
                <h4 className="text-uppercase mb-2 fs-5">Painting & Renovation</h4>
                <p className="small mb-0">We provide the best Renovations for your residential and business buildings, transforming your buildings into something bigger</p>
                <Link className="btn text-primary py-1 px-2 mt-3" to="/service">Read More <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}


      {/* Appointment Start */}
      <div className="container-fluid py-5 px-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="mb-3">
              <h1 className="display-5 text-uppercase mb-3 section-title">Contact US</h1>
            </div>
            <p className="mb-3">We are here to serve you. Email us for any inquiries and we will get back to you shortly.</p>
            <Link className="btn btn-primary py-2 px-4" to="/contact">Get A Quote</Link>
          </div>
          <div className="col-lg-8">
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
                    <textarea className="form-control border-0" rows="3" placeholder="Message"></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-2" type="submit">Submit Email</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}


      {/* Testimonial Start */}
      <div className="container-fluid bg-light py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">What Our <span className="text-primary">Happy Clients</span> Say!!!</h1>
        </div>
        <div className="row gx-0 align-items-center">
          <div className="col-xl-4 col-lg-5 d-none d-lg-block">
            <img className="img-fluid w-100 h-100 rounded" src="/img/testimonial.jpg" alt="Our completed project building exterior" />
          </div>
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="testimonial bg-light p-4 rounded shadow">
              <div className="owl-carousel testimonial-carousel">
                <div className="row gx-3 align-items-center">
                  <div className="col-xl-4 col-lg-5 col-md-5">
                    <img className="img-fluid w-100 h-100 bg-light p-lg-2 mb-3 mb-md-0 rounded" src="/img/testimonial-2.jpg" alt="" />
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
                    <img className="img-fluid w-100 h-100 bg-light p-lg-2 mb-3 mb-md-0 rounded" src="/img/testimonial-1.jpg" alt="" />
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

export default Service;
