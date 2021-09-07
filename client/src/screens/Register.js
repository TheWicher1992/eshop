import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { register, loginFacebook, loginGoogle } from "../actions/loginActions";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState('')
  const [password, setPassword] = useState("");
  const [oAuthDialogue, setOAuthDialogue] = useState(false);

  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) history.push("/");
  }, [isAuthenticated, loading, history]);

  const registerHandler = () => {
    dispatch(register(name, email, password))
  }
  const loginWithGoogle = async (googleData) => {
    dispatch(loginGoogle(googleData));
    setOAuthDialogue(false);
  };

  const loginWithFacebook = async (facebookData) => {
    dispatch(loginFacebook(facebookData));
    setOAuthDialogue(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-xs-12 col-md-6 p-3">
          <div className="text-center">
            <i className="fas fa-user fa-4x p-5"></i>
          </div>
          <h6 className="text-center text-danger">{error}</h6>
          <form id="login-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name-field-login"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email-field-login"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password-field-login"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                onClick={registerHandler}
                className="btn btn-dark"
                type="button"
                disabled={loading || oAuthDialogue}
              >
                {loading && (
                  <div
                    className="spinner-border spinner-border-sm align-self-start"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                {!loading && "Register"}
              </button>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      renderProps.onClick();
                      setOAuthDialogue(true);
                    }}
                    disabled={loading || oAuthDialogue}
                  >
                    Login with Google <i className="fab fa-1x fa-google"></i>
                  </button>
                )}
                onSuccess={loginWithGoogle}
                onFailure={loginWithGoogle}
                cookiePolicy={"single_host_origin"}
              />
              {/* <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                autoLoad={true}
                fields="name,email,picture"
                onClick={loginWithFacebook}
                callback={loginWithFacebook}
              /> */}
              <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                fields="name,email,picture"
                callback={loginWithFacebook}
                onClick={() => setOAuthDialogue(true)}
                isDisabled={loading || oAuthDialogue}
                cssClass="btn btn-outline-dark fb-login"
                textButton="Login with Facebook"
                buttonStyle={{ width: "100%" }}
              />
              {/* <FacebookLogin
                buttonStyle={{
                  width: "100%",
                }}
                render={(renderProps) => (
                  <button
                    className="btn btn-outline-dark"
                    onClick={renderProps.onClick}
                    disabled={loading || oAuthDialogue}
                  >
                    Login with Facebook <i className="fab fa-facebook-f"></i>
                  </button>
                )}
                appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                // autoLoad={true}
                callback={loginWithFacebook}
              /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
