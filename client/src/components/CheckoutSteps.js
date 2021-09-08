import React from 'react'
const CheckoutSteps = ({ loginStep, shippingStep, paymentStep, orderStep }) => {
  return (
    <div>
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item" aria-current="page">
            Login
          </li>
          {shippingStep ? <li className="breadcrumb-item" aria-current="page">
            <strong >Shipping Address</strong>
          </li> :
            <li className="breadcrumb-item " aria-current="page">
              Shipping Address
            </li>

          }
          {paymentStep ? <li className="breadcrumb-item" aria-current="page">
            <strong >Payment Option</strong>
          </li> :
            <li className="breadcrumb-item" aria-current="page">
              Payment Option
            </li>

          }
          {orderStep ? <li className="breadcrumb-item" aria-current="page">
            <strong >Place Order</strong>
          </li> :
            <li className="breadcrumb-item" aria-current="page">
              Place Order
            </li>

          }
        </ol>
      </nav>
    </div>
  )
}

export default CheckoutSteps
