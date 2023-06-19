import React from "react";
import token from "../../assets/images/icons/token.png";
import xpbadge from "../../assets/images/icons/xpbadge.png";

function ProfileChallanges() {
  return (
    <div className="tab-pane active" id="challenges">
      <a href="/#" data-toggle="modal" data-target="openChallengeInfo">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-8">
                <h5 className="m-0">Complete the onboarding tutorial</h5>
              </div>
              <div className="col-sm-4 text-right">
                <span className="info-default label label-default">0/1</span>
                <span className="info-default label label-default m-r-5">
                  <img
                    src={token}
                    style={{
                      maxHeight: 18,
                      marginTop: "-2px",
                    }}
                    alt=""
                  />{" "}
                  10
                </span>
                <span className="info-default label label-default">
                  <img
                    src={xpbadge}
                    style={{
                      maxHeight: 18,
                      marginTop: "-2px",
                    }}
                    alt=""
                  />{" "}
                  100
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="/#" data-toggle="modal" data-target="openChallengeInfo">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-8">
                <h5 className="m-0">Do a staff survey</h5>
              </div>
              <div className="col-sm-4 text-right">
                <span className="info-default label label-default">0/1</span>
                <span className="info-default label label-default m-r-5">
                  <img
                    src={token}
                    style={{
                      maxHeight: 18,
                      marginTop: "-2px",
                    }}
                    alt=""
                  />{" "}
                  10
                </span>
                <span className="info-default label label-default">
                  <img
                    src={xpbadge}
                    style={{
                      maxHeight: 18,
                      marginTop: "-2px",
                    }}
                    alt=""
                  />{" "}
                  100
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="/#" data-toggle="modal" data-target="openChallengeInfo">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-8">
                <h5 className="m-0">Comment on 10 posts</h5>
              </div>
              <div className="col-sm-4 text-right">
                <span className="info-default label label-default">0/10</span>
                <span className="info-default label label-default m-r-5">
                  <img
                    src={token}
                    style={{
                      maxHeight: 18,
                      marginTop: "-2px",
                    }}
                    alt=""
                  />{" "}
                  10
                </span>
                <span className="info-default label label-default">
                  <img
                    src={xpbadge}
                    style={{
                      maxHeight: 18,
                      marginTop: "-2px",
                    }}
                    alt=""
                  />{" "}
                  100
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="/#" data-toggle="modal" data-target="openChallengeInfo">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-8">
                <h5 className="m-0">High five 20 posts</h5>
              </div>
              <div className="col-sm-4 text-right">
                <span className="info-default label label-default">0/20</span>
                <span className="info-default label label-default m-r-5">
                  <img
                    src={token}
                    style={{
                      maxHeight: 18,
                      marginTop: "-2px",
                    }}
                    alt=""
                  />{" "}
                  10
                </span>
                <span className="info-default label label-default">
                  <img
                    src={xpbadge}
                    style={{
                      maxHeight: 18,
                      marginTop: "-2px",
                    }}
                    alt=""
                  />{" "}
                  100
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProfileChallanges;
