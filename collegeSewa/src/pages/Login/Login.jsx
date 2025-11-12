import React, { useState } from "react";
import "./Login.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-main-pro">
      <div className="auth-card-pro">
        {/* Left Side */}
        <div className="auth-left-pro">
          <div className="auth-overlay-pro">
            <h1>Welcome to <span>CollegeSewa</span></h1>
            <p>Discover top colleges, exams & expert career guidance 🎓</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="auth-right-pro">
          <div className="form-box-pro">
            <h2>{isLogin ? "Welcome Back 👋" : "Create Your Account"}</h2>
            <p className="sub-text">
              {isLogin
                ? "Login to access your dashboard and explore your dream college."
                : "Join our platform to connect with universities and counselors."}
            </p>

            <form>
              {!isLogin && (
                <div className="input-box-pro">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>
              )}

              <div className="input-box-pro">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="input-box-pro">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>

              {!isLogin && (
                <div className="input-box-pro">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Re-enter password" />
                </div>
              )}

              {isLogin && (
                <div className="forgot-pro">
                  <a href="#">Forgot Password?</a>
                </div>
              )}

              <button type="submit" className="btn-auth-pro">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            <div className="switch-text-pro">
              {isLogin ? (
                <p>
                  Don’t have an account?{" "}
                  <span onClick={() => setIsLogin(false)}>Sign Up</span>
                </p>
              ) : (
                <p>
                  Already registered?{" "}
                  <span onClick={() => setIsLogin(true)}>Login</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
