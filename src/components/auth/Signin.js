import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login }  from '../../services/auth.service';
import { validateTwo } from "../../services/auth.validators";


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
    const obj = {
      email: email,
      password: password
    }
    const isValid = validateTwo(obj);
    if (isValid.length === 0){
      login(email, password).then(
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
      setMessage(isValid[0]);
    }

  }
  return (
    <div className="container">
      <div style={{height: '100px'}}></div>
      <div className="row align-items-center">
        <div className="col-md-6 order-md-6 order-2 d-flex align-content-center">
          <div className="card card-container p-3 mt-lg-5" style={{ width: '30rem'}}>
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
                  Login
                  {loading && (
                    <span class="spinner-border spinner-border-sm ml-2" role="status" aria-hidden="true"></span>
                  )}
                </button>
              </div>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
               <Link to='/resetrequest'>Forgot password?</Link>
            </form>
          </div> 
        </div>
        <div className="col-md-6 order-md-6 order-1">
          <h1 className="display-4 p-0 m-1 w-100">Signin</h1>
          <h3 className="w-50 font-weight-light">Detailer enables you to schedule and track your washes with one click.</h3>
        </div>
      </div>
        
    </div>
  );
};

export default Signin;
