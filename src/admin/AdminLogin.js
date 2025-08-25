import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/admin/dashboard'); // Redirect to admin dashboard on successful login
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card mt-5 p-4 shadow rounded">
            <h3 className="card-title text-center mb-4 text-uppercase">Admin Login</h3>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger mb-3 rounded-pill">{error}</div>}
                <div className="mb-3">
                  <label htmlFor="usernameInput" className="form-label visually-hidden">Username</label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-pill px-4 py-3 border-0 shadow-sm" style={{ backgroundColor: '#f0f0f0' }}
                    id="usernameInput"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="passwordInput" className="form-label visually-hidden">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg rounded-pill px-4 py-3 border-0 shadow-sm" style={{ backgroundColor: '#f0f0f0' }}
                    id="passwordInput"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill text-uppercase fs-6">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
