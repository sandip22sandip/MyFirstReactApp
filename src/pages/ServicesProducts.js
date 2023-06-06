import React from "react";

import noimage from "../assets/images/course-imgs/noimage.png";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function ServicesProducts() {
  const { isLoading, error, data } = useQuery(["ServicesProducts"], () =>
    axios
      .get("/rest.php", {
        params: {
          q: "/restAPI/reward/getServicesProducts/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      })
      .then((res) => {
        return res.data["details"];
      })
  );
  // console.log(data);

  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          {/*=========================== breadcrumbs ===========================*/}
          <ul className="breadcrumb p-0">
            <li className="breadcrumb-item">
              <a href="index">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="kb">Knowledge Base</a>
            </li>
            <li className="breadcrumb-item active">Serivces &amp; Products</li>
          </ul>
          {/*=========================== search and filter panel ===========================*/}
          <div className="row m-b-15">
            {/*========== filter Category ==========*/}
            <div className="col-sm-2">
              <select id="filterCategory" className="form-control filter">
                <option value="all">Show all</option>
                <option value="CFF">Canned Fish &amp; Fisheries</option>
                <option value="FFO">Fishmeal and Fish Oil</option>
                <option value="HMH">Horse Mackerel &amp; Hake</option>
                <option value="LS">Lobster &amp; Squid</option>
                <option value="CCS">Commercial Cold Storage</option>
              </select>
              <i className="fa fa-filter text-muted" />
            </div>
            {/*========== search ==========*/}
            <div className="col-sm-4 col-sm-offset-6">
              <form className="search">
                <div className="input-group">
                  <input
                    id="searchCourses"
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="input-group-btn">
                    <button
                      id="searchBtn"
                      className="btn btn-secondary waves-effect waves-light"
                      type="button"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/*=========================== services and products ===========================*/}
          <div className="row">
            {error
              ? "Something went wrong with your request"
              : isLoading
              ? "Loading"
              : data.map((product) => (
                  <div
                    key={product.idcontent}
                    className="col-sm-6 col-md-4 col-lg-3 col-xl-2"
                  >
                    <a
                      href="/#"
                      data-toggle="modal"
                      data-target={`#openServiceInfo${product.idcontent}`}
                    >
                      <div className="panel panel-default card">
                        <div className="card-img-thumb">
                          <img src={product?.image || noimage} alt={noimage} />
                        </div>
                        <div className="panel-body hover-desc">
                          <div className="small m-b-5" title="topic">
                            <i className="fa fa-bookmark-o" /> Land
                          </div>
                          <h3 className="panelTitle">{product?.title}</h3>
                        </div>
                      </div>
                    </a>
                    <div
                      className="modal fade"
                      role="dialog"
                      id={`openServiceInfo${product.idcontent}`}
                    >
                      <div className="modal-dialog modal-lg">
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
                                Product Information
                              </h3>
                            </div>
                            <div className="panel-body">
                              <div className="row m-b-15">
                                <div className="col-sm-12">
                                  <img
                                    src={product?.image || noimage}
                                    alt={noimage}
                                    className="img-thumbnail img-md pull-left m-r-15"
                                  />
                                  <h5>{product?.title}</h5>
                                  <div className="small m-b-5" title="topic">
                                    <i className="fa fa-bookmark-o" /> Land
                                  </div>
                                </div>
                              </div>
                              {product?.description}
                            </div>
                            <div className="panel-footer">
                              <a
                                href="/#"
                                className="btn btn-default btn-block waves-light waves-effect"
                                data-dismiss="modal"
                              >
                                Close
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </div>
  );
}

export default ServicesProducts;
