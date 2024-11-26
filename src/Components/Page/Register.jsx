import React from 'react'
import './Login.css'

const Register = () => {
  return (
    <div className='loginbg'>
    
<div className="container" >
<div className="row">

  <div className="col-lg-6"></div>

 
  <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
    <div className="form-2-wrapper">
      <div className="logo text-center">
      
      </div>
      <h2 className="text-center mb-4"><b>Register here</b></h2>
      <form action="#">
        <div className="mb-3 form-box">
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="password" name="password" placeholder="Enter Your Password" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="password" name="password" placeholder="Re-enter Your Password" required />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" for="rememberMe">Remember me</label>
          
          </div>

        </div>
        <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">Register</button>
        <div className="social-login mb-3 type--A">
          <h5 className="text-center mb-3">Social Login</h5>
          <button className="btn btn-outline-secondary  mb-3"><i className="fa-brands fa-google text-danger"></i> Sign Up With Google</button>
          <button className="btn btn-outline-secondary mb-3"><i className="fa-brands fa-facebook-f text-primary"></i> Sign Up With Facebook</button>
        </div>
      </form>

 
      <p className="text-center register-test mt-3">Already have an account? <a href="/login" className="text-decoration-none">Login</a></p>
    </div>
  </div>
</div>
</div>

    </div>
  )
}

export default Register