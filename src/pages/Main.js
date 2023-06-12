import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";

function Main() {
  const UserBoxMini = React.lazy(() => import("../components/UserBoxMini"));
  const CourseProgressMini = React.lazy(() =>
    import("../components/CourseProgressMini")
  );

  return (
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              {/*========== profile ovrview ==========*/}
              <Suspense fallback={<div>Loading...</div>}>
                <UserBoxMini />
              </Suspense>
            </div>
            <div className="col-sm-9">
              {/*========== carousel ==========*/}
              <HomeSlider />
              {/*========== quick links ==========*/}
              <div className="row m-t-20">
                <div className="col-sm-6" id="myjourneyDash">
                  <div id="journeyStatus" className="">
                    <div className="panel-heading bg-custom1">
                      <div className="row">
                        <div className="col-md-12 col-lg-6">
                          <h2 className="panel-title text-white">
                            My Journey Progress:
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <CourseProgressMini />
                  </Suspense>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    {/*========== find a course ==========*/}
                    <div className="col-sm-6">
                      <div className="panel panel-primary bg-primary bg-img1">
                        <div className="panel-body text-center mx-box-xs center-vertical">
                          <Link to="/findacourse">
                            <h5 className="text-white text-uppercase bold m-b-0">
                              Find a course
                            </h5>
                            <h6 className="text-white m-t-0">Suited for you</h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*========== my courses ==========*/}
                    <div className="col-sm-6">
                      <div className="panel panel-info bg-default bg-img2">
                        <div className="panel-body text-center mx-box-xs center-vertical">
                          <Link to="/courses">
                            <h5 className="text-blue text-uppercase bold m-b-0">
                              My Courses
                            </h5>
                            <h6 className="m-t-0">
                              Available training material
                            </h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*========== available vacancies ==========*/}
                    <div className="col-sm-6">
                      <div className="panel panel-info bg-default bg-img3">
                        <div className="panel-body text-center mx-box-xs center-vertical">
                          <Link to="/vacancies">
                            <h5 className="text-blue text-uppercase bold m-b-0">
                              Available Vacancies
                            </h5>
                            <h6 className="m-t-0">Apply today</h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*========== i need help ==========*/}
                    <div className="col-sm-6">
                      <div
                        className="panel panel-info bg-info bg-img4"
                        data-toggle="modal"
                        data-target="#help_modal"
                      >
                        <div className="panel-body text-center mx-box-xs center-vertical">
                          <h5 className="text-white text-uppercase bold">
                            I need help
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* container */}
      </div>
      {/* content */}
    </div>
  );
}

export default Main;
