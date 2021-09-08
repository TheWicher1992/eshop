import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { login, loginFacebook, loginGoogle } from "../actions/loginActions";
import useQuery from "../utils/useQuery";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oAuthDialogue, setOAuthDialogue] = useState(false);

  const query = useQuery()
  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {

    const redirect = query.get('redirect')

    if (isAuthenticated) history.push(redirect ? `/${redirect}` : '/');
  }, [isAuthenticated, loading, history, query]);

  const loginHandler = () => {
    dispatch(login(email, password));
  };
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
                onClick={loginHandler}
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
                {!loading && "Login"}
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
          <Link className="link-secondary" to="/register">
            <h5 className="text-center mt-3">Are you a new user?</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
