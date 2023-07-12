import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetCart } from "../../redux/cartSlice";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  console.log(payment_intent);

  const dispatch = useDispatch();
  dispatch(resetCart());

  setTimeout(() => {
    navigate("/rewards");
  }, 5000);

  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          {/*=========================== Content ===========================*/}
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h1>
                  <i
                    className="ion-ios7-checkmark-outline text-success"
                    style={{ fontSize: "3em" }}
                  />
                </h1>
                <h3>Thank you, Your order has been placed.</h3>
                <p>We've sent you an email confirmation.</p>
                <Link to="/rewards" className="btn btn-primary" type="button">
                  Go To Rewards Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
