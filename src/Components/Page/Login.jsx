import React, { useState } from 'react'
import './Login.css'

const Login = () => {

      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [error, setError] = useState([])

       const handleSubmit = (event)=> {  
        event.preventDefault();  // Prevents the default form submission behavior
        const errors = validate(); // Calls the `validate` function to check for input errors
        setError(errors) // Updates the `error` state with the validation results
        // If there are no validation errors, proceed with login success alert
        if(Object.keys(errors).length === 0){
          alert('LogIn Successfully')
        }

       }

       const validate = () =>{
        const error = {}   // Object to store validation errors
        // Validate the email input
        if(!email){
          error.email = 'Email is required' // Error message if email is empty
        }else if(!/\s+@\s+\.\s+/.test(email)){ 
         error.email = 'Email not matched'     // Error message if email format is invalid
        }else{ 
          error.email = ''; // No error for valid email input
        }


        if(!password){
          error.password = 'Password is required' // Error message if Password is empty
        }else if(password.length < 8){
         error.password = 'Password not matched' // Error message if password is too shor
        }else{
          error.password = ''; // No error for valid password input
        }
            return error;  // Return the errors object for further handling
       }
  return (


          /* LogIn Section start */
    <div className='loginbg'>
    
<div className="container" >
<div className="row">

  <div className="col-lg-6"></div>

 
  <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
    <div className="form-2-wrapper">
      <div className="logo text-center">
       
      </div>
      <h2 className="text-center mb-4">Sign Into Your Account</h2>
      <form onSubmit={handleSubmit} action="#" method='post'>
        <div className="mb-3 form-box">
          <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name="email" placeholder="Enter Your Email"  />
          {error.email && <div>{error.email}</div>}
        </div>
        <div className="mb-3">
          <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" name="password" placeholder="Enter Your Password"  />
          {error.password && <div>{error.password}</div>}
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

 
      <p className="text-center register-test mt-3">Don't have an account? <a href="/register" className="text-decoration-none">Register here</a></p>
    </div>
  </div>
</div>
</div>

    </div>
    /* LogIn Section end */
  )
}

export default Login