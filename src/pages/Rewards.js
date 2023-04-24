import React from "react";

import { Link } from "react-router-dom";

import token from "../assets/images/icons/token.png";
import reward1 from "../assets/images/rewards/reward1.png";

function Rewards() {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          <div className="row">
            {/*=========================== rewards ===========================*/}
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="panel panel-default card">
                    <div className="card-img-thumb">
                      <img src={reward1} alt="reward1.png" />
                    </div>
                    <div className="panel-body hover-desc">
                      <div className="small m-b-5">
                        <a
                          href="/#"
                          data-toggle="modal"
                          data-target
                          className="pull-right"
                        >
                          <i className="fa fa-info text-inverse" />
                        </a>
                        <span title="Tokens">
                          <img
                            src={token}
                            alt="token.png"
                            className="img-xxs"
                          />{" "}
                          1 000
                        </span>
                      </div>
                      <h3 className="panelTitle">Have a day off work</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="panel panel-default card">
                    <div className="card-img-thumb">
                      <img src={reward1} alt="reward1.png" />
                    </div>
                    <div className="panel-body hover-desc">
                      <div className="small m-b-5">
                        <a
                          href="/#"
                          data-toggle="modal"
                          data-target
                          className="pull-right"
                        >
                          <i className="fa fa-info text-inverse" />
                        </a>
                        <span title="Tokens">
                          <img
                            src={token}
                            alt="token.png"
                            className="img-xxs"
                          />{" "}
                          3 000
                        </span>
                      </div>
                      <h3 className="panelTitle">Lunch with the CEO</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="panel panel-default card">
                    <div className="card-img-thumb">
                      <img src={reward1} alt="reward1.png" />
                    </div>
                    <div className="panel-body hover-desc">
                      <div className="small m-b-5">
                        <a
                          href="/#"
                          data-toggle="modal"
                          data-target
                          className="pull-right"
                        >
                          <i className="fa fa-info text-inverse" />
                        </a>
                        <span title="Tokens">
                          <img
                            src={token}
                            alt="token.png"
                            className="img-xxs"
                          />{" "}
                          10 000
                        </span>
                      </div>
                      <h3 className="panelTitle">50" LED TV</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="panel panel-default card">
                    <div className="card-img-thumb">
                      <img src={reward1} alt="reward1.png" />
                    </div>
                    <div className="panel-body hover-desc">
                      <div className="small m-b-5">
                        <a
                          href="/#"
                          data-toggle="modal"
                          data-target
                          className="pull-right"
                        >
                          <i className="fa fa-info text-inverse" />
                        </a>
                        <span title="Tokens">
                          <img
                            src={token}
                            alt="token.png"
                            className="img-xxs"
                          />{" "}
                          3 000
                        </span>
                      </div>
                      <h3 className="panelTitle">Dinner for two</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="panel panel-default card">
                    <div className="card-img-thumb">
                      <img src={reward1} alt="reward1.png" />
                    </div>
                    <div className="panel-body hover-desc">
                      <div className="small m-b-5">
                        <a
                          href="/#"
                          data-toggle="modal"
                          data-target
                          className="pull-right"
                        >
                          <i className="fa fa-info text-inverse" />
                        </a>
                        <span title="Tokens">
                          <img
                            src={token}
                            alt="token.png"
                            className="img-xxs"
                          />{" "}
                          3 000
                        </span>
                      </div>
                      <h3 className="panelTitle">Woolworths Voucher</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="panel panel-default card">
                    <div className="card-img-thumb">
                      <img src={reward1} alt="reward1.png" />
                    </div>
                    <div className="panel-body hover-desc">
                      <div className="small m-b-5">
                        <a
                          href="/#"
                          data-toggle="modal"
                          data-target
                          className="pull-right"
                        >
                          <i className="fa fa-info text-inverse" />
                        </a>
                        <span title="Tokens">
                          <img
                            src={token}
                            alt="token.png"
                            className="img-xxs"
                          />{" "}
                          2 500
                        </span>
                      </div>
                      <h3 className="panelTitle">Enjoy a spa day</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="panel panel-default card">
                    <div className="card-img-thumb">
                      <img src={reward1} alt="reward1.png" />
                    </div>
                    <div className="panel-body hover-desc">
                      <div className="small m-b-5">
                        <a
                          href="/#"
                          data-toggle="modal"
                          data-target
                          className="pull-right"
                        >
                          <i className="fa fa-info text-inverse" />
                        </a>
                        <span title="Tokens">
                          <img
                            src={token}
                            alt="token.png"
                            className="img-xxs"
                          />{" "}
                          2 500
                        </span>
                      </div>
                      <h3 className="panelTitle">A perfume of your choice</h3>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="panel panel-default card">
                    <div className="card-img-thumb">
                      <img src={reward1} alt="reward1.png" />
                    </div>
                    <div className="panel-body hover-desc">
                      <div className="small m-b-5">
                        <a
                          href="/#"
                          data-toggle="modal"
                          data-target
                          className="pull-right"
                        >
                          <i className="fa fa-info text-inverse" />
                        </a>
                        <span title="Tokens">
                          <img
                            src={token}
                            alt="token.png"
                            className="img-xxs"
                          />{" "}
                          2 500
                        </span>
                      </div>
                      <h3 className="panelTitle">Samsung Cellphone</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=========================== right col ===========================*/}
            <div className="col-sm-3">
              {/*========== cart ==========*/}
              <div className="panel panel-default">
                <div className="panel-heading bg-secondary text-center">
                  <p className="text-white m-0">
                    You have <strong>100</strong> tokens available
                  </p>
                </div>
                <div className="panel-body">
                  <h5 className="m-t-0">Your cart</h5>
                  <p>Your cart is empty.</p>
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
                  <button type="button" className="btn btn-primary m-t-15">
                    I've got a suggestion
                  </button>
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
