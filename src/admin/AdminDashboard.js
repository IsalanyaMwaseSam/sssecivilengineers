import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryManagement from './GalleryManagement';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('Welcome to the Admin Dashboard!');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login'); // Redirect to login if no token is found
    }
    // Here you would typically verify the token with your backend
    // For now, we'll just assume the presence of a token means authenticated
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-uppercase section-title">Admin Dashboard</h2>
        <button className="btn btn-danger py-2 px-4 rounded-pill" onClick={handleLogout}>Logout</button>
      </div>
      <p className="mb-4">{message}</p>

      <div className="mt-4">
        <button className="btn btn-primary py-2 px-4 rounded-pill me-2" onClick={() => navigate('/admin/gallery')}>Manage Gallery</button>
        {/* Add more admin options here */}
      </div>

      {/* The GalleryManagement component will be rendered via routing */}
    </div>
  );
};

export default AdminDashboard;
