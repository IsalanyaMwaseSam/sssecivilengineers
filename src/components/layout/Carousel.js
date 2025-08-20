import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="container-fluid p-0">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/img/carousel-1.jpg" alt="Construction project panoramic view" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center rounded p-3">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase mb-2 fs-5">Trusted & Professional</h4>
                <h1 className="display-1 text-white mb-md-4">Building Your Visions into Reality</h1>
                <Link to="/quote" className="btn btn-primary py-2 px-4 mt-2">Get A Quote</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img/carousel-2.jpg" alt="Industrial construction site" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center rounded p-3">
              <div className="p-3" style={{ maxWidth: '900px' }}>
                <h4 className="text-white text-uppercase mb-2 fs-5">Trusted & Professional</h4>
                <h1 className="display-1 text-white mb-md-4">Building Modern & Trustworthy Constructions</h1>
                <Link to="/quote" className="btn btn-primary py-2 px-4 mt-2">Get A Quote</Link>
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
