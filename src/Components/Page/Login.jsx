import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='loginbg'>
    
<div className="container" >
<div className="row">

  <div className="col-lg-6"></div>

 
  <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
    <div className="form-2-wrapper">
      <div className="logo text-center">
        <h2>Abhishek Samrat</h2>
      </div>
      <h2 className="text-center mb-4">Sign Into Your Account</h2>
      <form action="#">
        <div className="mb-3 form-box">
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="password" name="password" placeholder="Enter Your Password" required />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" for="rememberMe">Remember me</label>
            <a href="" className="text-decoration-none float-end">Forget Password</a>
          </div>

        </div>
        <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">Login</button>
        <div className="social-login mb-3 type--A">
          <h5 className="text-center mb-3">Social Login</h5>
          <button className="btn btn-outline-secondary  mb-3"><i className="fa-brands fa-google text-danger"></i> Sign With Google</button>
          <button className="btn btn-outline-secondary mb-3"><i className="fa-brands fa-facebook-f text-primary"></i> Sign With Facebook</button>
        </div>
      </form>

 
      <p className="text-center register-test mt-3">Don't have an account? <a href="" className="text-decoration-none">Register here</a></p>
    </div>
  </div>
</div>
</div>

    </div>
  )
}

export default Login