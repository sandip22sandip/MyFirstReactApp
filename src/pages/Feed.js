import React from "react";
import { Suspense } from "react";
import FeedBox from "../components/feed-components/FeedBox";

function Feed() {
  const UserBoxMini = React.lazy(() => import("../components/UserBoxMini"));

  return (
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Suspense fallback={<div>Loading...</div>}>
                <UserBoxMini />
              </Suspense>
            </div>
            <div className="col-sm-9">
              <div className="panel panel-default">
                <div className="panel-body">
                  <p className="text-muted">
                    Share an article, post, or give a praise
                  </p>
                  <hr />
                  <button type="button" className="btn btn-sm btn-default">
                    <i className="fa fa-edit" /> Post
                  </button>
                </div>
              </div>
              <FeedBox />
            </div>
          </div>
        </div>
        {/* container */}
      </div>
      {/* content */}
    </div>
  );
}

export default Feed;
