import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="container-fluid p-0">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/img/IMG-20240623-WA0001.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '700px' }}>
                <i className="fa fa-home fa-3x text-primary mb-3 d-none d-sm-block"></i>
                <h1 className="display-3 text-uppercase text-white mb-md-3">Build Your Dream House With Us</h1>
                <Link to="/get-a-quote" className="btn btn-primary py-md-2 px-md-4 mt-2">Get A Quote</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img/IMG-20240623-WA0018.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '700px' }}>
                <i className="fa fa-tools fa-3x text-primary mb-3 d-none d-sm-block"></i>
                <h1 className="display-3 text-uppercase text-white mb-md-3">We Are Trusted For Your Project</h1>
                <Link to="/contact" className="btn btn-primary py-md-2 px-md-4 mt-2">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
