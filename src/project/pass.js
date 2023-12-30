// update_password.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UpdatePassword (){
  const [msg,setMsg]=useState("");
  const [formData, setFormData] = useState({ contactNo:'' ,currentPassword: '', newPassword: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update password logic here
    // Validate form fields before proceeding
    const newErrors = {};
    if (!formData.contactNo) {
      newErrors.contactNo = 'Contact No is required';
    }
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current Password is required';
    }
    if (!formData.newPassword) {
      newErrors.newPassword = 'New Password is required';
    }
    var pattern = /^[A-Z]{1}[a-z]{1,8}[@*]{1}[0-9]{1,4}$/ 
    if(formData.newPassword)
    {
                    if(!pattern.test(formData.newPassword))
                    {
                      newErrors.newPassword  = "password invalid";
                    }
                  }

    setErrors(newErrors);

    // If there are no errors, you can proceed with the update password logic
    if (Object.keys(newErrors).length === 0) {
        const reeq= {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        };
        fetch('http://localhost:9000/update',reeq)
        .then(res=>res.text())
        .then(str=>{setMsg(str)})
       
      }
  };

  return (
    <div className="container mt-5">
       <div className=' form-container'>
     
      <form onSubmit={handleSubmit} className='login-form'>
      <div className="mb-3">
      <h2>Update Password</h2>
          <label className="form-label">Phone No:</label>
          <input
            type="text"
            name="contactNo"
            maxLength={10}
            className={`form-control ${errors.contactNo ? 'is-invalid' : ''}`}
            value={formData.contactNo}
            onChange={handleInputChange}
          />
          {errors.contactNo && <div className="invalid-feedback">{errors.currentPassword}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Current Password:</label>
          <input
            type="password"
            className={`form-control ${errors.currentPassword ? 'is-invalid' : ''}`}
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleInputChange}
          />
          {errors.currentPassword && <div className="invalid-feedback">{errors.currentPassword}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">New Password:</label>
          <input
            type="password"
            className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
          />
          {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Update Password</button>
        <div>{msg}</div>
      </form>
      
      
      </div>
    </div>
  );
};

