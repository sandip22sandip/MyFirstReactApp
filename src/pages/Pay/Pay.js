import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { axiosInstance } from "../../utils/axiosInstance";
import CheckoutForm from "../../components/CheckoutForm";
import { useSelector } from "react-redux";
import QueryString from "qs";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        var prData = QueryString.stringify({
          products,
        });

        var config = {
          method: "post",
          url: "/rest.php",
          params: {
            q: "/restAPI/reward/stripePaymentIntent/",
            auth: sessionStorage.getItem("AuthToken"),
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: prData,
        };

        axiosInstance(config).then((res) => {
          // console.log(res);
          setClientSecret(res.data.details);
        });
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [products]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  // console.log(clientSecret)

  return (
    <div className="pay">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
