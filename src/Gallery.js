import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  useEffect(() => {
    // Re-initialize Lightbox after gallery items are loaded/updated
    if (window.lightbox) {
      window.lightbox.option({ 'resizeDuration': 200, 'wrapAround': true });
    }
  }, [galleryItems]);

  const fetchGalleryItems = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/gallery`);
      if (response.ok) {
        const data = await response.json();
        setGalleryItems(data);
      } else {
        setMessage('Failed to fetch gallery items.');
      }
    } catch (error) {
      setMessage('Network error. Could not fetch gallery items.');
      console.error('Error fetching gallery items:', error);
    }
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Our Gallery</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0"><Link to="/">Home</Link></h6>
          <h6 className="text-white m-0 px-3">/</h6>
          <h6 className="text-uppercase text-white m-0">Gallery</h6>
        </div>
      </div>
      {/* Page Header End */}

      {/* Gallery Start */}
      <div className="container-fluid bg-light py-5 px-5">
        <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
          <h1 className="display-5 text-uppercase mb-3 section-title">Our <span className="text-primary">Photo</span> Gallery</h1>
        </div>
        {message && <div className="alert alert-info text-center">{message}</div>}
        <div className="row g-4 portfolio-container">
          {galleryItems.length === 0 ? (
            <p className="text-center">No gallery items available yet.</p>
          ) : (
            galleryItems.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 portfolio-item first">
                <div className="position-relative portfolio-box rounded shadow">
                  <img className="img-fluid w-100 rounded" src={`${API_BASE}${item.imageUrl}`} alt={item.title} style={{ objectFit: 'cover', height: '250px' }} />
                  <div className="portfolio-title shadow-sm">
                    <p className="h5 text-uppercase mb-1">{item.title}</p>
                    <span className="text-body"><small><i className="fa fa-info-circle text-primary me-1"></i>{item.description}</small></span>
                  </div>
                  <a className="portfolio-btn" href={`${API_BASE}${item.imageUrl}`} data-lightbox="portfolio">
                    <i className="bi bi-plus text-white"></i>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Gallery End */}
    </>
  );
};

export default Gallery;
