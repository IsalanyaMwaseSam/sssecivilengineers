import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">About</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0"><Link to="/">Home</Link></h6>
          <h6 className="text-white m-0 px-3">/</h6>
          <h6 className="text-uppercase text-white m-0">About</h6>
        </div>
      </div>
      {/* Page Header Start */}


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
          <div className="col-lg-5 pb-4" style={{ minHeight: '350px' }}>
            <div className="position-relative bg-light h-100 ms-4 shadow rounded">
              <img className="position-absolute w-100 h-100 rounded" src="/img/IMG-20240623-WA0246.jpg" style={{ objectFit: 'cover' }} alt="A modern building under construction, illustrating civil engineering expertise" />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default About;
