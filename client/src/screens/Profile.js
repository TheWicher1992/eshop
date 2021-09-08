import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, updateProfile } from "../actions/loginActions";
const Profile = ({ history }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { profile, success } = useSelector((state) => state.profile);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) history.push("/");
    if (!profile) dispatch(getProfile());
    else {
      setName(profile.name);
      setEmail(profile.email);
    }
  }, [history, isAuthenticated, profile, dispatch]);

  const handleUpdateProfile = () => {
    dispatch(updateProfile(name, email, password))
  }

  return (
    <div className="row mt-5">
      <div className="col-3 text-center">
        <h4 className="text-center">Update Profile</h4>
        {
          success && <span className="text-success">Profile updated</span>
        }
        <form id="login-form" className="mt-5">
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
              onClick={handleUpdateProfile}
              className="btn btn-dark"
              type="button"
            >
              {"Update"}
            </button>
          </div>
        </form>
      </div>
      <div className="col-9">
        <h4 className="text-center">My Orders</h4>
      </div>
    </div>
  );
};

export default Profile;
