import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login }  from '../../services/auth.service';


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
    const isValid = [];
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
      setMessage(isValid.join());
    }

  }
  return (
    <div className="container">
      <div style={{height: '100px'}}></div>
      <div className="row align-items-center">
        <div className="col-md-6 d-flex align-content-center">
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
               <Link to='/resetrequest'>Forgot password?</Link>
            </form>
          </div> 
        </div>
        <div className="col-md-6">
          <div className="display-4"><small>Professionals at your </small> fingerprints</div>
        </div>
      </div>
        
    </div>
  );
};

export default Signin;
