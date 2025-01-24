
import React from "react";
import "./Login.css"

const Login = () => {
  return (
    <div className="container">
      <h1 className="title">True Self</h1>
      <div className="login-card">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="reset-password">
            <a href="">Reset password?</a>
          </div>
          <div className="social-login">
            <a href="" className="social-icon facebook"></a>
            <a href="" className="social-icon google"></a>
          </div>
          
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>  
      </div>
      {/* <div className="curve"></div> */}
    </div>
  );
};

export default Login;
