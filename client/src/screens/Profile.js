import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile, updateProfile } from "../actions/loginActions";
import { getUserOrders } from "../actions/orderActions";
import Spinner from "../components/Spinner";

const Profile = ({ history }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { profile, success } = useSelector((state) => state.profile);
  const { orders, loading, error } = useSelector((state) => state.userOrders);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated) history.push("/");
    if (!profile) dispatch(getProfile());
    else {
      setName(profile.name);
      setEmail(profile.email);
    }
  }, [history, isAuthenticated, profile, dispatch]);

  const handleUpdateProfile = () => {
    dispatch(updateProfile(name, email, password));
  };

  return (
    <div className="row mt-5">
      <div className="col-3 text-center">
        <h4 className="text-center">Update Profile</h4>
        {success && <span className="text-success">Profile updated</span>}
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
        {error}
        <Spinner loading={loading} />
        {!loading && (
          <table
            style={{ width: "100%" }}
            className="table table-striped text-center table-hover"
          >
            <col style={{ width: "30%" }} />
            <col style={{ width: "40%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <thead>
              <tr>
                <th>Order Id</th>
                <th style={{ width: 50 }}>Items</th>
                <th>Total $</th>
                <th>Payment Status</th>
                <th>Delivery Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => history.push(`/order/${order._id}`)}
                >
                  <td className="text-break">{order._id}</td>
                  <td>
                    {order.orderItems.map((item) => (
                      <p className="text-decoration-underline" key={item._id}>
                        {item.qty} x {item.name}
                      </p>
                    ))}
                  </td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      <p className="text-success">
                        <i class="fas fa-2x fa-check"></i>
                      </p>
                    ) : (
                      <p className="text-danger">
                        <i class="fas fa-2x fa-times"></i>
                      </p>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      <p className="text-success">
                        <i class="fas fa-2x fa-check"></i>
                      </p>
                    ) : (
                      <p className="text-danger">
                        <i class="fas fa-2x fa-times"></i>
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Profile;
