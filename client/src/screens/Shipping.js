import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
const Shipping = ({ history }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const shippingAddress = useSelector((state) => state.shippingAddress);

  const dispatch = useDispatch();

  useEffect(() => {
    if (shippingAddress.address) {
      setAddress(shippingAddress.address);
      setCity(shippingAddress.city);
      setPostal(shippingAddress.postal);
    }
  }, [shippingAddress]);

  const handleSaveAddress = () => {
    dispatch(saveShippingAddress(address, city, postal));
    history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps shippingStep />
      <div className="row justify-content-center mt-5">
        <div className="col-6 justify-content-center">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="LUMS, DHA etc."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              City
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Lahore etc."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="54000 etc."
            />
          </div>
          <div className="d-grid gap-2">
            <button
              disabled={address === "" || postal === "" || city === ""}
              onClick={handleSaveAddress}
              className="btn btn-dark"
              type="button"
            >
              Save Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
