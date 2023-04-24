import React from "react";

function Calendar() {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-9">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div id="calendar" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-md-3">
                  <div className="widget">
                    <div className="widget-body">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <a
                            href="/#"
                            data-toggle="modal"
                            data-target="#add-category"
                            className="btn btn-lg btn-secondary btn-block waves-effect waves-light"
                          >
                            <i className="fa fa-plus" /> Create New
                          </a>
                          <div id="external-events" className="m-t-20">
                            <br />
                            <p>
                              Drag and drop your event or click in the calendar
                            </p>
                            <div
                              className="external-event bg-inverse"
                              data-className="bg-inverse"
                              style={{ position: "relative" }}
                            >
                              <i className="fa fa-move" />
                              My Event One
                            </div>
                            <div
                              className="external-event bg-danger"
                              data-className="bg-danger"
                              style={{ position: "relative" }}
                            >
                              <i className="fa fa-move" />
                              My Event Two
                            </div>
                            <div
                              className="external-event bg-primary"
                              data-className="bg-primary"
                              style={{ position: "relative" }}
                            >
                              <i className="fa fa-move" />
                              My Event Three
                            </div>
                            <div
                              className="external-event bg-purple"
                              data-className="bg-purple"
                              style={{ position: "relative" }}
                            >
                              <i className="fa fa-move" />
                              My Event Four
                            </div>
                          </div>
                          {/* checkbox */}
                          <div className="checkbox checkbox-primary m-t-40">
                            <input id="drop-remove" type="checkbox" />
                            <label htmlFor="drop-remove">
                              Remove after drop
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col*/}
              </div>{" "}
              {/* end row */}
              {/* BEGIN MODAL */}
              <div className="modal fade none-border" id="event-modal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                      <h4 className="modal-title">
                        <strong>Add Event</strong>
                      </h4>
                    </div>
                    <div className="modal-body" />
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default waves-effect"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-success save-event waves-effect waves-light"
                      >
                        Create event
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger delete-event waves-effect waves-light"
                        data-dismiss="modal"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal Add Category */}
              <div className="modal fade none-border" id="add-category">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                      <h4 className="modal-title">
                        <strong>Add</strong> a category
                      </h4>
                    </div>
                    <div className="modal-body">
                      <form >
                        <div className="row">
                          <div className="col-md-6">
                            <label className="control-label">
                              Category Name
                            </label>
                            <input
                              className="form-control form-white"
                              placeholder="Enter name"
                              type="text"
                              name="category-name"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="control-label">
                              Choose Category Color
                            </label>
                            <select
                              className="form-control form-white"
                              data-placeholder="Choose a color..."
                              name="category-color"
                            >
                              <option value="success">Success</option>
                              <option value="danger">Danger</option>
                              <option value="primary">Primary</option>
                              <option value="warning">Warning</option>
                              <option value="inverse">Inverse</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default waves-effect"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger waves-effect waves-light save-category"
                        data-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* END MODAL */}
            </div>
            {/* end col-12 */}
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </div>
  );
}

export default Calendar;
