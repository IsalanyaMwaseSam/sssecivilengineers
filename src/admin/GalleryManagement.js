import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const GalleryManagement = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [editingItem, setEditingItem] = useState(null); // To store the item being edited
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchGalleryItems();
  }, []);

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

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    let url = `${API_BASE}/api/gallery`;
    let method = 'POST';

    if (editingItem) {
      url = `${API_BASE}/api/gallery/${editingItem.id}`;
      method = 'PUT';
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          // 'Content-Type': 'multipart/form-data' is not set manually with FormData
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setTitle('');
        setDescription('');
        setImageFile(null);
        setEditingItem(null);
        fetchGalleryItems(); // Refresh the list
      } else {
        setMessage(data.message || 'Operation failed.');
      }
    } catch (error) {
      setMessage('Network error. Please try again later.');
      console.error('Error submitting gallery item:', error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setTitle(item.title);
    setDescription(item.description);
    setImageFile(null); // Clear image file for edit, user can re-upload if needed
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) {
      return;
    }
    setMessage('');

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/gallery/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        fetchGalleryItems(); // Refresh the list
      } else {
        setMessage(data.message || 'Delete failed.');
      }
    } catch (error) {
      setMessage('Network error. Please try again later.');
      console.error('Error deleting gallery item:', error);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-uppercase section-title mb-4">Gallery Management</h2>
      {message && <div className="alert alert-info mb-4 rounded-pill">{message}</div>}

      <form onSubmit={handleSubmit} className="mb-5 p-4 bg-light rounded shadow">
        <h3 className="text-uppercase fs-4 mb-4">{editingItem ? 'Edit Gallery Item' : 'Add New Gallery Item'}</h3>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label visually-hidden">Title</label>
          <input
            type="text"
            className="form-control form-control-lg rounded-pill px-4 py-3 border-0 shadow-sm" style={{ backgroundColor: '#f0f0f0' }}
            id="titleInput"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label visually-hidden">Description</label>
          <textarea
            className="form-control form-control-lg rounded-pill px-4 py-3 border-0 shadow-sm" style={{ backgroundColor: '#f0f0f0' }}
            id="descriptionInput"
            rows="2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="imageUpload" className="form-label visually-hidden">Image</label>
          <input
            type="file"
            className="form-control form-control-lg rounded-pill px-4 py-3 border-0 shadow-sm" style={{ backgroundColor: '#f0f0f0' }}
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            // required={!editingItem} // Image is required for new items, optional for edit
          />
          {editingItem && editingItem.imageUrl && (
            <small className="form-text text-muted d-block mt-2">Current image: <a href={`http://localhost:5000${editingItem.imageUrl}`} target="_blank" rel="noopener noreferrer" className="text-primary">{editingItem.imageUrl}</a></small>
          )}
        </div>
        <button type="submit" className="btn btn-primary py-2 px-4 rounded-pill me-2 text-uppercase">{editingItem ? 'Update Item' : 'Add Item'}</button>
        {editingItem && <button type="button" className="btn btn-secondary py-2 px-4 rounded-pill text-uppercase" onClick={() => setEditingItem(null)}>Cancel Edit</button>}
      </form>

      <h3 className="text-uppercase section-title mb-4">Current Gallery</h3>
      <div className="row g-4">
        {galleryItems.length === 0 ? (
          <p className="text-center">No gallery items yet. Add some above!</p>
        ) : (
          galleryItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100 rounded shadow border-0">
                <img src={`http://localhost:5000${item.imageUrl}`} className="card-img-top rounded-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-uppercase mb-2">{item.title}</h5>
                  <p className="card-text small mb-3 flex-grow-1">{item.description}</p>
                  <div className="d-flex mt-auto">
                    <button className="btn btn-warning py-2 px-4 rounded-pill btn-sm me-2 text-uppercase" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="btn btn-danger py-2 px-4 rounded-pill btn-sm text-uppercase" onClick={() => handleDelete(item.id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GalleryManagement;
