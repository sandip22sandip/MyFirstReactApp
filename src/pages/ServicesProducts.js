import React from "react";

import service1 from "../assets/images/products/service-1.jpg";

function ServicesProducts() {
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
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <a href="/#" data-toggle="modal" data-target=".openServiceInfo">
                <div className="panel panel-default card">
                  <div className="card-img-thumb">
                    <img
                      src={service1}
                      alt="..."
                    />
                  </div>
                  <div className="panel-body hover-desc">
                    <div className="small m-b-5" title="topic">
                      <i className="fa fa-bookmark-o" /> Canned Fish &amp;
                      Fishmeal
                    </div>
                    <h3 className="panelTitle">Lucky Star</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <a href="/#" data-toggle="modal" data-target=".openServiceInfo">
                <div className="panel panel-default card">
                  <div className="card-img-thumb">
                    <img
                      src={service1}
                      alt="..."
                    />
                  </div>
                  <div className="panel-body hover-desc">
                    <div className="small m-b-5" title="topic">
                      <i className="fa fa-bookmark-o" /> Canned Fish &amp;
                      Fishmeal
                    </div>
                    <h3 className="panelTitle"> Fishmeal and Fish Oil</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <a href="/#" data-toggle="modal" data-target=".openServiceInfo">
                <div className="panel panel-default card">
                  <div className="card-img-thumb">
                    <img
                      src={service1}
                      alt="..."
                    />
                  </div>
                  <div className="panel-body hover-desc">
                    <div className="small m-b-5" title="topic">
                      <i className="fa fa-bookmark-o" /> Fishmeal and Fish Oil
                    </div>
                    <h3 className="panelTitle">Daybrook Fisheries</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <a href="/#" data-toggle="modal" data-target=".openServiceInfo">
                <div className="panel panel-default card">
                  <div className="card-img-thumb">
                    <img
                      src={service1}
                      alt="..."
                    />
                  </div>
                  <div className="panel-body hover-desc">
                    <div className="small m-b-5" title="topic">
                      <i className="fa fa-bookmark-o" /> Horse Mackerel &amp;
                      Hake
                    </div>
                    <h3 className="panelTitle">Blue Continent Products</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <a href="/#" data-toggle="modal" data-target=".openServiceInfo">
                <div className="panel panel-default card">
                  <div className="card-img-thumb">
                    <img
                      src={service1}
                      alt="..."
                    />
                  </div>
                  <div className="panel-body hover-desc">
                    <div className="small m-b-5" title="topic">
                      <i className="fa fa-bookmark-o" /> Lobster &amp; Squid
                    </div>
                    <h3 className="panelTitle">Oceana Lobster</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <a href="/#" data-toggle="modal" data-target=".openServiceInfo">
                <div className="panel panel-default card">
                  <div className="card-img-thumb">
                    <img
                      src={service1}
                      alt="..."
                    />
                  </div>
                  <div className="panel-body hover-desc">
                    <div className="small m-b-5" title="topic">
                      <i className="fa fa-bookmark-o" /> Lobster &amp; Squid
                    </div>
                    <h3 className="panelTitle">Calamari Fishing</h3>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <a href="/#" data-toggle="modal" data-target=".openServiceInfo">
                <div className="panel panel-default card">
                  <div className="card-img-thumb">
                    <img
                      src={service1}
                      alt="..."
                    />
                  </div>
                  <div className="panel-body hover-desc">
                    <div className="small m-b-5" title="topic">
                      <i className="fa fa-bookmark-o" /> Commercial Cold Storage
                    </div>
                    <h3 className="panelTitle">CCS Logistics</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </div>
  );
}

export default ServicesProducts;
