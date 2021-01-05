import React, { useState } from "react";
import AuthService from '../services/auth.service';
import validate from "../services/auth.validators";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="start">
         The field is required
      </div>
    );
  }
};

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  }
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);
    //check if email is valid with validate function
    const isValid = validate.checkForBoth(email, password);
    if (isValid.length === 0){
      AuthService.login(email, password).then(
        () => {
          props.history.push("dashboard");
          window.location.reload();
        },
        (error) => {
          const resMessage = 
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

            setLoading(false);
            setMessage(resMessage);
        }
      )
    } else {
      setLoading(false);
      setMessage(isValid.join());
    }

  }
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-5">
        <div className="card card-container">
          <img 
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <form onSubmit={ handleLogin }>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-bordet spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </form>
        </div> 
      </div>
    </div>
  );
};

export default Signin;
