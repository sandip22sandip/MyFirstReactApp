import React from "react";

import { Link } from "react-router-dom";

import token from "../assets/images/icons/token.png";
import noimage from "../assets/images/course-imgs/noimage.png";
import { axiosInstance } from "../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartSlice";

function Rewards() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const userId = currentUser.idst;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItems = cart[userId] ? cart[userId].length : 0;

  const { isLoading, error, data } = useQuery(["rewards"], () =>
    axiosInstance
      .get("/rest.php", {
        params: {
          q: "/restAPI/reward/getRewards/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      })
      .then((res) => {
        return res.data.details;
      })
  );

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error occurred while fetching data</div>;
  }

  const handleClick = (reward) => {
    const product = { ...reward, quantity: 1 };
    dispatch(addProduct({ userId, product }));
  };

  // console.log(cart[userId].length);

  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          <div className="row">
            {/*=========================== rewards ===========================*/}
            <div className="col-sm-9">
              <div className="row">
                {data.length === 0 ? (
                  <p>No data found.</p>
                ) : (
                  data.map((reward) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={reward.id}>
                      <div className="panel panel-default card">
                        <div className="card-img-thumb">
                          <img src={noimage} alt="noimage.png" />
                        </div>
                        <div className="panel-body hover-desc">
                          <div className="small m-b-5">
                            <a
                              href="/#"
                              data-toggle="modal"
                              data-target={`#prInfo${reward.id}`}
                              className="pull-right"
                            >
                              <i className="fa fa-info text-inverse" />
                            </a>
                            <span title="Tokens">
                              <img
                                src={token}
                                alt="token.png"
                                className="img-xxs"
                              />
                              {reward?.pro_coins}
                            </span>
                          </div>
                          <h3 className="panelTitle">{reward?.pro_name}</h3>
                          <div className="col-sm-12">
                            <button
                              type="button"
                              className="btn-block btn btn-primary addToCart"
                              style={{
                                opacity: "1",
                                transition: "all 0.3s ease-out",
                              }}
                              onClick={() => handleClick(reward)}
                            >
                              Redeem reward
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="modal fade" id={`prInfo${reward.id}`}>
                        <div className="modal-dialog">
                          <div className="modal-content p-0 b-0">
                            <div className="panel panel-color panel-info b-0">
                              <div className="panel-heading">
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-hidden="true"
                                >
                                  <i className="fa fa-close" />
                                </button>
                                <h3 className="panel-title">
                                  {reward?.pro_name}
                                </h3>
                              </div>
                              <div className="panel-body">
                                <p>{reward?.pro_desc}</p>
                              </div>
                              <div className="panel-footer">
                                <div>
                                  <a
                                    href="/#"
                                    className="btn btn-default waves-light waves-effect"
                                    data-dismiss="modal"
                                  >
                                    Cancel
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            {/*=========================== right col ===========================*/}
            <div className="col-sm-3">
              {/*========== cart ==========*/}
              <div className="panel panel-default">
                <div className="panel-heading bg-secondary text-center">
                  <p className="text-white m-0">
                    You have <strong>{currentUser?.userCoins}</strong> tokens
                    available
                  </p>
                </div>
                <div className="panel-body">
                  <h5 className="m-t-0">Your cart</h5>
                  {cartItems > 0 ? (
                    <div>
                      <p>
                        You have <strong>{cartItems}</strong> item in
                        your cart.
                      </p>
                      <p>
                        <Link
                          to="/addtocart"
                          className="btn btn-default btn-sm no-shadow"
                        >
                          View Cart
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <p>Your cart is empty.</p>
                  )}
                </div>
              </div>
              {/*========== categories ==========*/}
              <div className="panel panel-default">
                <div className="panel-heading bg-inverse">
                  <h3 className="panel-title text-white">Reward Categories</h3>
                </div>
                <div className="panel-body p-0">
                  <div>
                    <Link to="/#" className="list-group-item b-0">
                      <span className="badge badge-default">13</span> Personal
                      Development
                    </Link>
                    <Link to="/#" className="list-group-item b-0">
                      <span className="badge badge-default">1</span> Electronics
                    </Link>
                    <Link to="/#" className="list-group-item b-0">
                      <span className="badge badge-default">3</span> Vouchers
                    </Link>
                    <Link to="/#" className="list-group-item b-0">
                      <span className="badge badge-default">3</span> Food
                    </Link>
                    <Link to="/#" className="list-group-item b-0">
                      <span className="badge badge-default">2</span> Health
                    </Link>
                    <Link to="/#" className="list-group-item b-0">
                      <span className="badge badge-default">5</span> Fun
                    </Link>
                  </div>
                </div>
              </div>
              {/*========== suggestion box ==========*/}
              <div className="panel panel-default">
                <div className="panel-body text-center">
                  <h5>You've got better reward ideas?</h5>
                  <p>
                    Send us your suggestion of prizes and you could earn points
                    and have your suggested prize available in store.
                  </p>
                  <Link to="/chatwindow" className="btn btn-primary m-t-15">
                    I've got a suggestion
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* container */}
      </div>
    </div>
  );
}

export default Rewards;
