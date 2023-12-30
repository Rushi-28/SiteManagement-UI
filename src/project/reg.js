import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { json } from 'react-router-dom';

export default function Registeration() {
  const [msg,setMsg]=useState("");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    contactNo: 0,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.contactNo) {
      newErrors.contactNo = 'Contact Number is required';
    } 

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
       try {
        const reqOpt ={
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        };
        fetch('http://localhost:9000/registration', reqOpt)
        .then(res=>res.text())
        .then(str=>setMsg(str));

      } catch (error) {
        console.error('Error during registration:', error.message);
        // Handle any unexpected errors
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
         />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
       
        <div className="mb-3">
          <label htmlFor="contactNo" className="form-label">Contact Number:</label>
          <input
            type="text"
            className={`form-control ${errors.contactNo ? 'is-invalid' : ''}`}
            name="contactNo"
            id="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
           />
          {errors.contactNo && <div className="invalid-feedback">{errors.contactNo}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <div >{msg} </div>
    </div>
  );
};
