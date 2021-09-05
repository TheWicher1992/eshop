import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const Login = () => {
  const loginWithGoogle = async (googleData) => {
    console.log(googleData);
  };

  const loginWithFacebook = async (facebookData) => {
    console.log(facebookData);
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-xs-12 col-md-6 p-4">
          <div className="text-center">
            <i className="fas fa-user fa-4x p-5"></i>
          </div>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email-field-login"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password-field-login"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-dark" type="button">
                Login
              </button>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                  <button
                    className="btn btn-outline-dark"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Login with Google <i className="fab fa-1x fa-google"></i>
                  </button>
                )}
                onSuccess={loginWithGoogle}
                onFailure={loginWithGoogle}
                cookiePolicy={"single_host_origin"}
              />

              <FacebookLogin
                buttonStyle={{
                  width: "100%",
                }}
                render={(renderProps) => (
                  <button
                    className="btn btn-outline-dark"
                    onClick={renderProps.onClick}
                  >
                    Login with Facebook <i className="fab fa-facebook-f"></i>
                  </button>
                )}
                appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                // autoLoad={true}
                callback={loginWithFacebook}
              />
            </div>
          </form>
          <Link className="link-secondary" to="/register">
            <h5 className="text-center mt-3">Are you a new user?</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
