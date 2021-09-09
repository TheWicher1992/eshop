import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { savePaymentType } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'
const Payment = () => {
  const [paymentType, setPaymentType] = useState(null)


  const dispatch = useDispatch()

  const handlePaymentType = () => {
    dispatch(savePaymentType(paymentType))
  }

  return (
    <div>
      <CheckoutSteps paymentStep />
      <div className="row justify-content-center mt-5">
        <div className="col-6 justify-content-center">
          <h4>Select Payment Method</h4>
          <div className="form-check">
            <input onClick={() => setPaymentType('PayPal')} value="PayPal" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              PayPal
            </label>
          </div>
          <div className="form-check mb-3">
            <input disabled onClick={() => setPaymentType('Stripe')} value="Stripe" className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Stripe
            </label>
          </div>
          <div className="d-grid gap-2">
            <button
              disabled={paymentType === null}
              onClick={handlePaymentType}
              className="btn btn-dark"
              type="button"
            >
              Save Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
