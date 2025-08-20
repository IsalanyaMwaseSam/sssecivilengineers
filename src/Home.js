import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './components/layout/Carousel';

const Home = () => {
  return (
    <>
      <Carousel />

      {/* About Start */}
      <div className="container-fluid py-5 px-5">
        <div className="row g-4">
          <div className="col-lg-7">
            <h1 className="display-5 text-uppercase mb-3">Leading the Way in Construction Excellence</h1>
            <h4 className="text-uppercase mb-2 text-body">With a steadfast commitment to quality and innovation, we have set the benchmark in the construction industry. Our expertise spans across diverse projects, consistently delivering exceptional results.</h4>
            <p className="mb-3">Dedicated to delivering unparalleled craftsmanship, we take pride in our attention to detail and our ability to transform visions into reality. From initial planning to project completion, our team ensures every phase is executed with precision and excellence.</p>
            <div className="row gx-4 py-1">
              <div className="col-sm-6 mb-1">
                <p className="fw-bold mb-1"><i className="fa fa-check text-primary me-2"></i>Strategic Planning</p>
                <p className="fw-bold mb-1"><i className="fa fa-check text-primary me-2"></i>Skilled Workforce</p>
                <p className="fw-bold mb-1"><i className="fa fa-check text-primary me-2"></i>Efficient Processes</p>
              </div>
              <div className="col-sm-6 mb-1">
                <p className="fw-bold mb-1"><i className="fa fa-check text-primary me-2"></i>Experienced Professionals</p>
                <p className="fw-bold mb-1"><i className="fa fa-check text-primary me-2"></i>Professional Workers</p>
                <p className="fw-bold mb-1"><i className="fa fa-check text-primary me-2"></i>Innovative Solutions</p>
              </div>
            </div>

          </div>
          <div className="col-lg-5 pb-4" style={{ minHeight: '300px' }}>
            <div className="position-relative bg-light h-100 ms-4 shadow rounded">
              <img className="position-absolute w-100 h-100 rounded" src="/img/IMG-20240623-WA0246.jpg" style={{ objectFit: 'cover' }} alt="A modern building showcasing civil engineering" />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}


      {/* Services Start */}
      <div className="container-fluid bg-light py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">We Provide <span className="text-primary">The Best</span> Construction Services</h1>
        </div>
        <div className="row g-4 cards-equal-height">
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-white d-flex flex-column align-items-center text-center rounded shadow">
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0006.jpg" alt="Building Construction" />
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
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0056.jpg" alt="Plumbing and Electrical Works" />
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
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0248.jpg" alt="Architecture Design" />
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
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0001.jpg" alt="Interior, Exterior & Compound Design" />
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
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0146.jpg" alt="Swimming Pool Construction, Stone Cladding & Roofing" />
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
              <img className="img-fluid rounded-top" src="/img/IMG-20240623-WA0000.jpg" alt="Painting & Renovation" />
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
              <h1 className="display-5 text-uppercase mb-3">Contact US</h1>
            </div>
            <p className="mb-4">We are here to serve you. Email us for any inquiries and we will get back to you shortly.</p>
            <Link className="btn btn-primary py-2 px-4" to="/contact">Get A Quote</Link>
          </div>
          <div className="col-lg-8">
            <div className="bg-light text-center p-4">
              <form>
                <div className="row g-2">
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: '45px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: '45px' }} />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control border-0" rows="4" placeholder="Message"></textarea>
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


      {/* Portfolio Start */}
      <div className="container-fluid bg-light py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">Some Of Our <span className="text-primary">Popular</span> Projects</h1>
        </div>
        <div className="row gx-4">
          <div className="col-12 text-center">
            <div className="d-inline-block bg-white text-center p-3 mb-4 rounded shadow">
              <ul className="list-inline mb-0" id="portfolio-flters">
                <li className="btn btn-outline-primary bg-white p-2 mx-1 mb-3 rounded-pill" data-filter=".first">
                  <img src="/img/IMG-20240623-WA0157.jpg" style={{ width: '100px', height: '60px' }} className="img-fluid rounded" alt="Construction project" />
                  <div className="position-absolute top-0 start-0 end-0 bottom-0 m-1 d-flex align-items-center justify-content-center" style={{ background: 'rgba(4, 15, 40, .3)' }}>
                    <h6 className="text-white text-uppercase m-0">Construction</h6>
                  </div>
                </li>
                <li className="btn btn-outline-primary bg-white p-2 mx-1 mb-3 rounded-pill" data-filter=".second">
                  <img src="/img/portfolio-3.jpg" style={{ width: '100px', height: '60px' }} className="img-fluid rounded" alt="Renovation project" />
                  <div className="position-absolute top-0 start-0 end-0 bottom-0 m-1 d-flex align-items-center justify-content-center" style={{ background: 'rgba(4, 15, 40, .3)' }}>
                    <h6 className="text-white text-uppercase m-0">Renovation</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-4 portfolio-container cards-equal-height">
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
            <div className="position-relative portfolio-box rounded shadow">
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0157.jpg" alt="Residential House Construction" style={{ height: '200px', objectFit: 'cover' }} />
              <Link className="portfolio-title shadow-sm" to="/project">
                <p className="h5 text-uppercase mb-1">Residential House</p>
                <span className="text-body"><small><i className="fa fa-map-marker-alt text-primary me-1"></i>Nakanako, Gayaza</small></span>
              </Link>
              <a className="portfolio-btn" href="/img/IMG-20240623-WA0157.jpg" data-lightbox="portfolio">
                <i className="bi bi-plus text-white"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
            <div className="position-relative portfolio-box rounded shadow">
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0001.jpg" alt="Cipla Quality Chemicals Project" style={{ height: '200px', objectFit: 'cover' }} />
              <Link className="portfolio-title shadow-sm" to="/project">
                <p className="h5 text-uppercase mb-1">Cipla Quality Chemicals</p>
                <span className="text-body"><small><i className="fa fa-map-marker-alt text-primary me-1"></i>Luzira</small></span>
              </Link>
              <a className="portfolio-btn" href="/img/IMG-20240623-WA0001.jpg" data-lightbox="portfolio">
                <i className="bi bi-plus text-white"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
            <div className="position-relative portfolio-box rounded shadow">
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0018.jpg" alt="Project Name Example" style={{ height: '200px', objectFit: 'cover' }} />
              <Link className="portfolio-title shadow-sm" to="/project">
                <p className="h5 text-uppercase mb-1">Project Name</p>
                <span className="text-body"><small><i className="fa fa-map-marker-alt text-primary me-1"></i>Location, City, Country</small></span>
              </Link>
              <a className="portfolio-btn" href="/img/IMG-20240623-WA0018.jpg" data-lightbox="portfolio">
                <i className="bi bi-plus text-white"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
            <div className="position-relative portfolio-box rounded shadow">
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0183.jpg" alt="Project Name Example" style={{ height: '200px', objectFit: 'cover' }} />
              <Link className="portfolio-title shadow-sm" to="/project">
                <p className="h5 text-uppercase mb-1">Project Name</p>
                <span className="text-body"><small><i className="fa fa-map-marker-alt text-primary me-1"></i>Location, City, Country</small></span>
              </Link>
              <a className="portfolio-btn" href="/img/IMG-20240623-WA0183.jpg" data-lightbox="portfolio">
                <i className="bi bi-plus text-white"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
            <div className="position-relative portfolio-box rounded shadow">
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0081.jpg" alt="Project Name Example" style={{ height: '200px', objectFit: 'cover' }} />
              <Link className="portfolio-title shadow-sm" to="/project">
                <p className="h5 text-uppercase mb-1">Project Name</p>
                <span className="text-body"><small><i className="fa fa-map-marker-alt text-primary me-1"></i>Location, City, Country</small></span>
              </Link>
              <a className="portfolio-btn" href="/img/IMG-20240623-WA0081.jpg" data-lightbox="portfolio">
                <i className="bi bi-plus text-white"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
            <div className="position-relative portfolio-box rounded shadow">
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0070.jpg" alt="Project Name Example" style={{ height: '200px', objectFit: 'cover' }} />
              <Link className="portfolio-title shadow-sm" to="/project">
                <p className="h5 text-uppercase mb-1">Project Name</p>
                <span className="text-body"><small><i className="fa fa-map-marker-alt text-primary me-1"></i>Location, City, Country</small></span>
              </Link>
              <a className="portfolio-btn" href="/img/IMG-20240623-WA0070.jpg" data-lightbox="portfolio">
                <i className="bi bi-plus text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio End */}


      {/* Team Start */}
      <div className="container-fluid py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">We Are <span className="text-primary">Professional & Expert</span> Workers</h1>
        </div>
        <div className="row g-4 cards-equal-height">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team-item rounded overflow-hidden bg-white shadow">
              <div className="position-relative">
                <img className="img-fluid w-100 rounded-top mb-2" src="/img/IMG-20240623-WA0016.jpg" alt="Engineer Sowade Sharif" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="team-social mt-3 mb-2 d-flex align-items-center justify-content-center">
                <a className="mx-1" href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="mx-1" href="https://facebook.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="mx-1" href="https://linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                <a className="mx-1" href="https://wa.me/256787881296" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
              </div>
              <div className="team-text p-3 text-center flex-grow-1">
                <h4 className="text-uppercase fs-5 mb-1">Engineer Sowade Sharif</h4>
                <span className="text-muted small">CEO & Founder</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team-item rounded overflow-hidden bg-white shadow">
              <div className="position-relative">
                <img className="img-fluid w-100 rounded-top mb-2" src="/img/team-2.jpg" alt="Dylan Adams, Civil Engineer" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="team-social mt-3 mb-2 d-flex align-items-center justify-content-center">
                <a className="mx-1" href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="mx-1" href="https://facebook.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="mx-1" href="https://linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                <a className="mx-1" href="https://instagram.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="team-text p-3 text-center flex-grow-1">
                <h4 className="text-uppercase fs-5 mb-1">Dylan Adams</h4>
                <span className="text-muted small">Civil Engineer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team-item rounded overflow-hidden bg-white shadow">
              <div className="position-relative">
                <img className="img-fluid w-100 rounded-top mb-2" src="/img/team-3.jpg" alt="Jhon Doe, Interior Designer" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="team-social mt-3 mb-2 d-flex align-items-center justify-content-center">
                <a className="mx-1" href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="mx-1" href="https://facebook.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="mx-1" href="https://linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                <a className="mx-1" href="https://instagram.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="team-text p-3 text-center flex-grow-1">
                <h4 className="text-uppercase fs-5 mb-1">Jhon Doe</h4>
                <span className="text-muted small">Interior Designer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team-item rounded overflow-hidden bg-white shadow">
              <div className="position-relative">
                <img className="img-fluid w-100 rounded-top mb-2" src="/img/team-4.jpg" alt="Josh Dunn, Painter" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="team-social mt-3 mb-2 d-flex align-items-center justify-content-center">
                <a className="mx-1" href="https://twitter.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="mx-1" href="https://facebook.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="mx-1" href="https://linkedin.com/in/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                <a className="mx-1" href="https://instagram.com/YourProfile" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="team-text p-3 text-center flex-grow-1">
                <h4 className="text-uppercase fs-5 mb-1">Josh Dunn</h4>
                <span className="text-muted small">Painter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}


      {/* Testimonial Start */}
      <div className="container-fluid bg-light py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">What Our <span className="text-primary">Happy Clients</span> Say!!!</h1>
        </div>
        <div className="row gx-0 align-items-center">
          <div className="col-xl-4 col-lg-5 d-none d-lg-block">
            <img className="img-fluid w-100 h-100 rounded" src="/img/testimonial.jpg" alt="Happy client giving testimonial" />
          </div>
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="testimonial bg-light p-4 rounded shadow">
              <div className="owl-carousel testimonial-carousel">
                <div className="row gx-3 align-items-center">
                  <div className="col-xl-4 col-lg-5 col-md-5">
                    <img className="img-fluid w-100 h-100 bg-light p-lg-2 mb-3 mb-md-0 rounded" src="/img/testimonial-2.jpg" alt="Client Waligo Betty" />
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
                    <img className="img-fluid w-100 h-100 bg-light p-lg-2 mb-3 mb-md-0 rounded" src="/img/testimonial-1.jpg" alt="Client Mutalya Paul" />
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

export default Home;
