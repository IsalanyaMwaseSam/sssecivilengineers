import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">The Team</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0"><Link to="/">Home</Link></h6>
          <h6 className="text-white m-0 px-3">/</h6>
          <h6 className="text-uppercase text-white m-0">The Team</h6>
        </div>
      </div>
      {/* Page Header Start */}


      {/* Team Start */}
      <div className="container-fluid py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">We Are <span className="text-primary">Professional & Expert</span> Workers</h1>
        </div>
        <div className="row g-4 cards-equal-height">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team-item rounded overflow-hidden bg-white shadow">
              <div className="position-relative">
                <img className="img-fluid w-100 rounded-top" src="/img/IMG-20240623-WA0016.jpg" alt="" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="team-social mt-3 mb-2 d-flex align-items-center justify-content-center">
                <a className="mx-1" href="#"><i className="fab fa-twitter"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="mx-1" href="https://wa.me/256787881296"><i className="fab fa-whatsapp"></i></a>
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
                <img className="img-fluid w-100 rounded-top" src="/img/team-2.jpg" alt="" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="team-social mt-3 mb-2 d-flex align-items-center justify-content-center">
                <a className="mx-1" href="#"><i className="fab fa-twitter"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-instagram"></i></a>
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
                <img className="img-fluid w-100 rounded-top" src="/img/team-3.jpg" alt="" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="team-social mt-3 mb-2 d-flex align-items-center justify-content-center">
                <a className="mx-1" href="#"><i className="fab fa-twitter"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-instagram"></i></a>
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
                <img className="img-fluid w-100 rounded-top" src="/img/team-4.jpg" alt="" style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <div className="team-social mt-3 mb-2 d-flex align-items-center justify-content-center">
                <a className="mx-1" href="#"><i className="fab fa-twitter"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="mx-1" href="#"><i className="fab fa-instagram"></i></a>
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
    </>
  );
};

export default Team;
