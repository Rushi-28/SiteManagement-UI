
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../loggedSlice";
import img from "../project/regpage.jpg";



export default function Login() {
  const[msg,setMsg]=useState("");
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mystate = useSelector((state) => state.logged);

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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      
      
      const reqopt ={  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };

      fetch('http://localhost:9000/login', reqopt)
      .then(res=>res.text())
      .then(str=>{setMsg(str)
              if(str==="Login successful")
              {dispatch(login());
              navigate('/home');}
            });
    }
  };

  return (
    <div className="container mt-5">
      <div className=' form-container'>
      {/*<img  src={img} style={{width:"200px", height:"200px"  }} alt="pic"/>*/}
      <form onSubmit={handleSubmit} className='login-form'>
        <div className="mb-3">
        <h2>Login</h2>
          <label className="form-label">Username:</label>
          <input
            type="text"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      </div>
      <div>{msg}</div>
    </div>
  );
};
