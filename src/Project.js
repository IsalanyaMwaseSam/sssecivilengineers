import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Project</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0"><Link to="/">Home</Link></h6>
          <h6 className="text-white m-0 px-3">/</h6>
          <h6 className="text-uppercase text-white m-0">Project</h6>
        </div>
      </div>
      {/* Page Header Start */}


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
                  <img src="/img/IMG-20240623-WA0157.jpg" style={{ width: '100px', height: '60px' }} className="img-fluid rounded" />
                  <div className="position-absolute top-0 start-0 end-0 bottom-0 m-1 d-flex align-items-center justify-content-center" style={{ background: 'rgba(4, 15, 40, .3)' }}>
                    <h6 className="text-white text-uppercase m-0">Construction</h6>
                  </div>
                </li>
                <li className="btn btn-outline-primary bg-white p-2 mx-1 mb-3 rounded-pill" data-filter=".second">
                  <img src="/img/portfolio-3.jpg" style={{ width: '100px', height: '60px' }} className="img-fluid rounded" />
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
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0157.jpg" alt="" style={{ height: '200px', objectFit: 'cover' }} />
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
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0001.jpg" alt="" style={{ height: '200px', objectFit: 'cover' }} />
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
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0018.jpg" alt="" style={{ height: '200px', objectFit: 'cover' }} />
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
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0183.jpg" alt="" style={{ height: '200px', objectFit: 'cover' }} />
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
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0081.jpg" alt="" style={{ height: '200px', objectFit: 'cover' }} />
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
              <img className="img-fluid w-100 rounded" src="/img/IMG-20240623-WA0070.jpg" alt="" style={{ height: '200px', objectFit: 'cover' }} />
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
    </>
  );
};

export default Project;
