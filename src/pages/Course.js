import React from "react";

import { Link } from "react-router-dom";

import course10 from "../assets/images/course-imgs/course10.jpg";
import avatar10 from "../assets/images/users/avatar-10.jpg"
import avatar5 from "../assets/images/users/avatar-5.jpg"
import demo_user from "../assets/images/users/demo-user.jpg"

function Course() {
  return (
    <div className="content-page">
      <div className="subheader">
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-12">
              <Link
                className="btn btn-sm btn-default pull-right"
                to="/courses"
              >
                Back
              </Link>
              <h5 className="bold">
                Analysis of Financial Reports{" "}
                <span className="toggleInfo small m-l-15">
                  <i className="fa fa-chevron-up" />
                </span>
              </h5>
            </div>
          </div>
          <div className="row CourseInfo">
            <div className="col-md-2">
              <div className="course-img visible-lg visible-md">
                <img
                  src={course10}
                  className="img-thumbnail img-responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-10">
              <p>
                Learn how to interpret a business’ financial health and
                potential with confidence and insight.
              </p>
              <p>
                This is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="course-progress row m-t-5">
                <div className="col-xs-10 col-sm-11 ">
                  <h6>6/10 lessons completed</h6>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar progress-bar-success"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-xs-2 col-sm-1 text-center">
                  <h4 style={{ lineHeight: 0, margin: 8 }}>
                    <i className="fa fa-trophy" />
                  </h4>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar progress-bar-default"
                      role="progressbar"
                      aria-valuenow={0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="course course-tabs"
          style={{ borderTop: "1px solid #e8e8e8" }}
        >
          <ul className="custom nav nav-tabs" role="tablist">
            <li className="active">
              <a
                href="#lessons"
                aria-controls="lessons"
                role="tab"
                data-toggle="tab"
              >
                <span className="visible-xs">
                  <i className="fa fa-list" />
                </span>
                <span className="hidden-xs">Course Content</span>
              </a>
            </li>
            <li>
              <a
                href="#announcements"
                aria-controls="announcements"
                role="tab"
                data-toggle="tab"
              >
                <span className="visible-xs">
                  <i className="fa fa-bullhorn" />
                </span>
                <span className="hidden-xs">Announcements</span>
              </a>
            </li>
            <li>
              <a
                href="#reportcard"
                aria-controls="notes"
                role="tab"
                data-toggle="tab"
              >
                <span className="visible-xs">
                  <i className="fa fa-edit" />
                </span>
                <span className="hidden-xs">Report Card</span>
              </a>
            </li>
            <li>
              <a
                href="#notes"
                aria-controls="notes"
                role="tab"
                data-toggle="tab"
              >
                <span className="visible-xs">
                  <i className="fa fa-edit" />
                </span>
                <span className="hidden-xs">Notes</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="custom tab-content">
            <div role="tabpanel" className="tab-pane active" id="lessons">
              <div className="row m-b-15">
                <div className="col-sm-12">
                  <div className="text-right">
                    <button
                      type="button"
                      className="btn btn-default"
                      title="download enitre course"
                    >
                      <i className="fa fa-cloud-download" /> Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="panel-group" id="sectionAccordion">
                <div className="panel sections">
                  <a
                    data-toggle="collapse"
                    data-parent="#sectionAccordion"
                    href="#section1"
                    className="collapsed panel-heading"
                    aria-expanded="false"
                  >
                    <div
                      className="pull-right"
                      style={{ padding: "10px 0 10px" }}
                    >
                      <h6 className="bold">5/5</h6>
                    </div>
                    <div>
                      <h6>Section 1</h6>
                      <h6 className="bold caps">Getting Started</h6>
                    </div>
                  </a>
                  <div id="section1" className="panel-collapse collapse">
                    <ul className="list-unstyled lesson-list">
                      <li className="start-lesson-read">
                        <Link to="/#" className="start-lesson-read">
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-book lesson-icons pull-left" />
                            <h6>Lesson 1: Introduction</h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>1:40</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-check-square-o text-success" />
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="start-lesson-video">
                        <Link to="/#" className="start-lesson-video">
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-youtube-play lesson-icons pull-left" />
                            <h6>Lesson 2: What is Airbrn</h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>4:39</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-check-square-o text-success" />
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="start-lesson-download">
                        <Link to="/#" className="start-lesson-download">
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-download lesson-icons pull-left" />
                            <h6>Lesson 3: How to manage your training</h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>0:30</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-check-square-o text-success" />
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="start-lesson-audio">
                        <Link to="/#" className="start-lesson-audio">
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-music lesson-icons pull-left" />
                            <h6>Lesson 4: Completing a Mission</h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>3:20</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-check-square-o text-success" />
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="start-lesson-download">
                        <Link to="/#" className="start-lesson-download">
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-download lesson-icons pull-left" />
                            <h6>Lesson 5: How to manage your training</h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>0:30</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-check-square-o text-success" />
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="panel sections">
                  <a
                    data-toggle="collapse"
                    data-parent="#sectionAccordion"
                    href="/#section2"
                    className="collapsed panel-heading"
                    aria-expanded="false"
                  >
                    <div
                      className="pull-right"
                      style={{ padding: "10px 0 10px" }}
                    >
                      <h6 className="bold">1/3</h6>
                    </div>
                    <div>
                      <h6>Section 2</h6>
                      <h6 className="bold caps">Management 101</h6>
                    </div>
                  </a>
                  <div id="section2" className="panel-collapse collapse">
                    <ul className="list-unstyled lesson-list">
                      <li className="start-lesson-audio">
                        <Link to="/#" className="start-lesson-audio">
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-music lesson-icons pull-left" />
                            <h6>Lesson 6: Completing a Mission</h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>3:20</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-check-square-o text-success" />
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="start-lesson-checkin">
                        <a
                          href="video-course"
                          className="start-lesson-checkin"
                        >
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-youtube-play lesson-icons pull-left" />
                            <h6>
                              Lesson 7: Oceana Foundation and Stop Hunger Now,
                              Mandela Day 2017
                            </h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>4:28</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-square-o" />
                              </h6>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="start-lesson-quiz">
                        <Link to="/#" className="start-lesson-quiz">
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-tasks lesson-icons pull-left" />
                            <h6>Lesson 8: What we have learnt</h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>0:20</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-square-o" />
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="panel sections">
                  <a
                    data-toggle="collapse"
                    data-parent="#sectionAccordion"
                    href="/#section3"
                    className="collapsed panel-heading"
                    aria-expanded="false"
                  >
                    <div
                      className="pull-right"
                      style={{ padding: "10px 0 10px" }}
                    >
                      <h6 className="bold">0/2</h6>
                    </div>
                    <div>
                      <h6>Section 3</h6>
                      <h6 className="bold caps">Launch and Beyond</h6>
                    </div>
                  </a>
                  <div id="section3" className="panel-collapse collapse">
                    <ul className="list-unstyled lesson-list">
                      <li className="start-lesson-checkin">
                        <Link to="/#" className="start-lesson-checkin">
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-map-marker lesson-icons pull-left" />
                            <h6>Lesson 9: Business Conference</h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>0:20</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-square-o" />
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="start-lesson-quiz">
                        <Link to="/#" className="start-lesson-quiz">
                          <div className="col-md-10 col-xs-9">
                            <i className="fa fa-tasks lesson-icons pull-left" />
                            <h6>Lesson 10: What we have learnt</h6>
                          </div>
                          <div className="col-md-2 col-xs-3 text-right">
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>0:20</h6>
                            </div>
                            <div className="col-md-6" style={{ padding: 0 }}>
                              <h6>
                                <i className="fa fa-square-o" />
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="announcements">
              <div className="panel">
                <div className="panel-body">
                  <div className="row m-b-30">
                    <div className="col-xs-12">
                      <img
                        className="img-fit img-circle img-sm pull-left m-r-15"
                        src={avatar10}
                        alt=""
                      />
                      <h4 className="bold m-0">John Doe</h4>
                      <p className="small">posted announcement - 2 hours ago</p>
                    </div>
                  </div>
                  <h3>
                    The standard Lorem Ipsum passage, used since the 1500s
                  </h3>
                  <p>
                    This is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                  <h4>
                    Section 1.10.32 of "de Finibus Bonorum et Malorum", written
                    by Cicero in 45 BC
                  </h4>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <h4>1914 translation by H. Rackham</h4>
                  <p>
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical
                    exercise, except to obtain some advantage from it? But who
                    has any right to find fault with a man who chooses to enjoy
                    a pleasure that has no annoying consequences, or one who
                    avoids a pain that produces no resultant pleasure?"
                  </p>
                  <h4>
                    Section 1.10.33 of "de Finibus Bonorum et Malorum", written
                    by Cicero in 45 BC
                  </h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-xs-1 text-center">
                      <img
                        className="img-fit img-circle img-xs"
                        src={demo_user}
                        alt=""
                      />
                    </div>
                    <div className="col-xs-7 col-md-9 form-group">
                      <input
                        type="text"
                        id="comment-input-text"
                        name="comment-input-text"
                        className="form-control"
                        placeholder="Post your comment"
                      />
                    </div>
                    <div className="col-xs-3 col-md-2 form-group">
                      <button
                        className="btn-default btn-block btn waves-effect waves-light"
                        type="button"
                        id="comment-btn-post"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-body">
                  <div className="row m-b-30">
                    <div className="col-xs-12">
                      <img
                        src={avatar5}
                        className="img-fit img-circle img-sm pull-left m-r-15"
                        alt=""
                      />
                      <p className="author-title">Peter Pan</p>
                      <p className="small">posted announcement - 1 week ago</p>
                    </div>
                  </div>
                  <h3>
                    Section 1.10.33 of "de Finibus Bonorum et Malorum", written
                    by Cicero in 45 BC
                  </h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source.
                  </p>
                  <h4>1914 translation by H. Rackham</h4>
                  <p>
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                    by Cicero, written in 45 BC. This book is a treatise on the
                    theory of ethics, very popular during the Renaissance. The
                    first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                  </p>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-sm-1 text-center">
                      <img
                        className="img-fit img-circle img-xs"
                        src={demo_user}
                        alt=""
                      />
                    </div>
                    <div className="col-xs-7 col-md-9 form-group">
                      <input
                        type="text"
                        id="comment-input-text"
                        name="comment-input-text"
                        className="form-control"
                        placeholder="Post your comment"
                      />
                    </div>
                    <div className="col-xs-3 col-md-2 form-group">
                      <button
                        className="btn-default btn-block btn waves-effect waves-light"
                        type="button"
                        id="comment-btn-post"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-offset-2 col-md-offset-1 col-md-12">
                      <p>
                        <Link to="/#">View comments (3)</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="reportcard">
              <div className="row m-b-15">
                <div className="col-sm-12 text-right">
                  <button type="button" className="btn btn-default">
                    Print
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td>
                                <label>Course Name:</label>
                              </td>
                              <td>Analysis of Financial Reports</td>
                            </tr>
                            <tr>
                              <td>
                                <label>Enrolled:</label>
                              </td>
                              <td>12 August 2018</td>
                            </tr>
                            <tr>
                              <td>
                                <label>Level:</label>
                              </td>
                              <td>Intermediate</td>
                            </tr>
                            <tr>
                              <td>
                                <label>Status:</label>
                              </td>
                              <td>In Progress</td>
                            </tr>
                            <tr>
                              <td>
                                <label>Earned Certificate:</label>
                              </td>
                              <td>Pending</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="row m-b-30">
                        <div className="col-xs-10">
                          <h6 className="bold progressTitle">
                            Lessons Completed:
                          </h6>
                        </div>
                        <div className="col-xs-2">
                          <h6 className="matrixPercent pull-right">60%</h6>
                        </div>
                        <div className="col-md-12">
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar progress-bar-success"
                              role="progressbar"
                              aria-valuenow={60}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="row m-b-30">
                        <div className="col-xs-10">
                          <h6 className="bold progressTitle">Quiz Results:</h6>
                        </div>
                        <div className="col-xs-2">
                          <h6 className="matrixPercent pull-right">80%</h6>
                        </div>
                        <div className="col-md-12">
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar progress-bar-secondary"
                              role="progressbar"
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="text-center">
                            <h1 className="counter">29</h1>
                            Hours spent
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="text-center">
                            <h1 className="counter">2</h1>
                            Quiz Attempt
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="text-center">
                            <h1 className="counter">15</h1>
                            Accessed course
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="notes">
              <div className="row">
                <div
                  className="col-md-12 m-b-10"
                  style={{ display: "table", width: "100%" }}
                >
                  <Link
                    to="/#"
                    className="select-all-notes grey"
                    style={{ display: "none" }}
                  >
                    Select All
                  </Link>
                  <div className="notes-btn-group  pull-right">
                    <Link
                      to="/#"
                      id="create-note"
                      className="btn btn-default btn-circle btn-icon"
                      title="New Note"
                    >
                      <i className="fa fa-edit" />
                    </Link>
                    <Link
                      to="/#"
                      id="edit-note"
                      className="btn btn-default btn-circle btn-icon disabled"
                      title="Edit"
                      style={{ display: "none" }}
                    >
                      <i className="fa fa-pencil" />
                    </Link>
                    <Link
                      to="/#"
                      id="delete-note"
                      className="btn btn-default btn-circle btn-icon disabled"
                      title="Delete"
                      style={{ display: "none" }}
                    >
                      <i className="icon-menu ion-trash-a" />
                    </Link>
                  </div>
                  <Link
                    to="/#"
                    className="grey"
                    id="cancel-note"
                    style={{ display: "none" }}
                  >
                    Cancel
                  </Link>
                  <div
                    className="new-note-btn-group pull-right"
                    style={{ display: "none" }}
                  >
                    <Link
                      to="/#"
                      id="save-note"
                      className="btn btn-default btn-circle btn-icon"
                      title="Save Note"
                    >
                      <i className="fa fa-save" />
                    </Link>
                    <Link
                      to="/#"
                      id="attach-file"
                      className="btn btn-default btn-circle btn-icon"
                      title="Attach File"
                    >
                      <i className="fa fa-paperclip" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row empty-msg">
                <div className="col-md-12">
                  <div className="text-right">
                    <span
                      className="arrow hrt pull-right"
                      style={{ marginLeft: 20 }}
                    />
                    <p className="text-uppercase bold">You have no notes.</p>
                    <p className="small first-note-msg">
                      Create your first note.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="row"
                id="created-notes"
                style={{ display: "none" }}
              >
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="panel created-notes">
                    <div className="panel-heading">
                      <h4 className="panel-title">Demo note</h4>
                    </div>
                    <div className="panel-body">This is a demo note</div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-xs-9" style={{ paddingRight: 0 }}>
                          <span className="small">2 hours ago</span>
                        </div>
                        <div className="col-xs-3 text-right">
                          <Link to="/#" className="select-note">
                            <i className="fa fa-square-o" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="panel created-notes">
                    <div className="panel-heading">
                      <h4 className="panel-title">My dummy note</h4>
                    </div>
                    <div className="panel-body">
                      This is my first dummy note
                    </div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-xs-9" style={{ paddingRight: 0 }}>
                          <span className="small">3 days ago</span>
                        </div>
                        <div className="col-xs-3 text-right">
                          <Link to="/#" className="select-note">
                            <i className="fa fa-square-o" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="panel created-notes">
                    <div className="panel-heading">
                      <h4 className="panel-title">Test note</h4>
                    </div>
                    <div className="panel-body">This is a test note</div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-xs-9" style={{ paddingRight: 0 }}>
                          <span className="small">2 weeks ago</span>
                        </div>
                        <div className="col-xs-3 text-right">
                          <Link to="/#" className="select-note">
                            <i className="fa fa-square-o" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-3 col-lg-2">
                  <div className="panel created-notes">
                    <div className="panel-heading">
                      <h4 className="panel-title">My first note</h4>
                    </div>
                    <div className="panel-body">This is my first note</div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-xs-9" style={{ paddingRight: 0 }}>
                          <span className="small">2 months ago</span>
                        </div>
                        <div className="col-xs-3 text-right">
                          <Link to="/#" className="select-note">
                            <i className="fa fa-square-o" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row new-note-panel" style={{ display: "block" }}>
                <div className="panel panel-simple notepad">
                  <form>
                    <div className="notepad-heading">
                      <div className="form-group m-b-0">
                        <input
                          type="text"
                          className="form-control note-title"
                          placeholder="Title"
                        />
                      </div>
                    </div>
                    <div className="notepad-body">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="write here..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
