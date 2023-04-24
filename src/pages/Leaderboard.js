import React from "react";

import avatar2 from "../assets/images/users/avatar-2.png";
import avatar4 from "../assets/images/users/avatar-4.png";
import avatar5 from "../assets/images/users/avatar-5.png"
import avatar6 from "../assets/images/users/avatar-6.png"

function Leaderboard() {
  return (
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          {/*=========================== intro & filter ===========================*/}
          <div className="row m-b-15">
            <div className="col-sm-9">
              <h4>Who is taking flight?</h4>
              <p>
                Check the leaderboard below to see where you rank, and who is in
                the poll position.
              </p>
            </div>
            <div className="col-sm-3">
              <select className="form-control">
                <option>All Time</option>
                <option>This Month</option>
                <option>This Week</option>
              </select>
            </div>
          </div>
          <div className="row">
            {/*=========================== leaderbord ===========================*/}
            <div className="col-md-9">
              <div className="panel panel-default">
                <div className="row leaderboard__user p-10">
                  <div className="col-xs-3 col-sm-2 leaderboard__user__points-position text-center">
                    <h3 className="bold">#1</h3>
                  </div>
                  <div className="visible-xs col-xs-9 leaderboard__user__points-position text-right">
                    <h3 className="bold">740 XP</h3>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <img
                      src={avatar2}
                      className="img-sm img-circle pull-left m-r-10" 
                      alt="avatar-2.png"
                    />
                    <h5 className="bold" >
                      <span className="m-r-15">Elvis Bruintjies</span>
                      <span className="info-default label label-default engagement low">
                        Low
                      </span>
                    </h5>
                  </div>
                  <div className="hidden-xs col-sm-2 leaderboard__user__points-position text-right">
                    <h3 className="bold">740 XP</h3>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="row leaderboard__user p-10">
                  <div className="col-xs-3 col-sm-2 leaderboard__user__points-position text-center">
                    <h3 className="bold">#2</h3>
                  </div>
                  <div className="visible-xs col-xs-9 leaderboard__user__points-position text-right">
                    <h3 className="bold">600 XP</h3>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <img
                      src={avatar4}
                      className="img-sm img-circle pull-left m-r-10"
                      alt="avatar-4.png"
                    />
                    <h5 className="bold" >
                      <span className="m-r-15">Duncan Mackintosh</span>
                      <span className="info-default label label-default engagement low">
                        Average
                      </span>
                    </h5>
                  </div>
                  <div className="hidden-xs col-sm-2 leaderboard__user__points-position text-right">
                    <h3 className="bold">600 XP</h3>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="row leaderboard__user p-10">
                  <div className="col-xs-3 col-sm-2 leaderboard__user__points-position text-center">
                    <h3 className="bold">#3</h3>
                  </div>
                  <div className="visible-xs col-xs-9 leaderboard__user__points-position text-right">
                    <h3 className="bold">500 XP</h3>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <img
                      src={avatar2}
                      className="img-sm img-circle pull-left m-r-10"
                      alt="demo-manager.jpg"
                    />
                    <h5 className="bold" >
                      <span className="m-r-15">Tshepi Maleswena</span>
                      <span className="info-default label label-default engagement low">
                        Above average
                      </span>
                    </h5>
                  </div>
                  <div className="hidden-xs col-sm-2 leaderboard__user__points-position text-right">
                    <h3 className="bold">400 XP</h3>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="row leaderboard__user p-10">
                  <div className="col-xs-3 col-sm-2 leaderboard__user__points-position text-center">
                    <h3 className="bold">#4</h3>
                  </div>
                  <div className="visible-xs col-xs-9 leaderboard__user__points-position text-right">
                    <h3 className="bold">350 XP</h3>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <img
                      src={avatar5}
                      className="img-sm img-circle pull-left m-r-10"
                      alt="avatar-5.png"
                    />
                    <h5 className="bold" >
                      <span className="m-r-15">Stella Krouse</span>
                      <span className="info-default label label-default engagement low">
                        High
                      </span>
                    </h5>
                  </div>
                  <div className="hidden-xs col-sm-2 leaderboard__user__points-position text-right">
                    <h3 className="bold">350 XP</h3>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="row leaderboard__user p-10">
                  <div className="col-xs-3 col-sm-2 leaderboard__user__points-position text-center">
                    <h3 className="bold">#5</h3>
                  </div>
                  <div className="visible-xs col-xs-9 leaderboard__user__points-position text-right">
                    <h3 className="bold">250 XP</h3>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <img
                      src={avatar2}
                      className="img-sm img-circle pull-left m-r-10"
                      alt="avatar-1.jpg"
                    />
                    <h5 className="bold" >
                      <span className="m-r-15">Yolandi Myburgh</span>
                      <span className="info-default label label-default engagement low">
                        Airbrn
                      </span>
                    </h5>
                  </div>
                  <div className="hidden-xs col-sm-2 leaderboard__user__points-position text-right">
                    <h3 className="bold">250 XP</h3>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="row leaderboard__user p-10">
                  <div className="col-xs-3 col-sm-2 leaderboard__user__points-position text-center">
                    <h3 className="bold">#6</h3>
                  </div>
                  <div className="visible-xs col-xs-9 leaderboard__user__points-position text-right">
                    <h3 className="bold">100 XP</h3>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                    <img
                      src={avatar6}
                      className="img-sm img-circle pull-left m-r-10"
                      alt="avatar-6.png"
                    />
                    <h5 className="bold" >
                      <span className="m-r-15">Johan Gates</span>
                      <span className="info-default label label-default engagement low">
                        Low
                      </span>
                    </h5>
                  </div>
                  <div className="hidden-xs col-sm-2 leaderboard__user__points-position text-right">
                    <h3 className="bold">100 XP</h3>
                  </div>
                </div>
              </div>
            </div>
            {/*=========================== challenges ===========================*/}
            <div className="col-md-3">
              <div className="p-10">
                <h5>Get to the top!</h5>
                <p>Do challenges to earn more points and rank higher.</p>
                <div className="m-t-15 m-b-15">
                  <span>
                    0/1 <a href="/#">Onboarding Tutorial Challenge</a>
                  </span>
                  <p className="small">Points: 100 | Coins: 20</p>
                </div>
                <div className="m-t-15 m-b-15">
                  <span>
                    0/1 <a href="/#">Staff Survey Challenge</a>
                  </span>
                  <p className="small">Points: 500 | Coins: 50</p>
                </div>
                <div className="m-t-15 m-b-15">
                  <span>
                    0/1 <a href="/#">Oceana LMS Poll Challenge</a>
                  </span>
                  <p className="small">Points: 250 | Coins: 100</p>
                </div>
                <div className="m-t-15 m-b-15">
                  <span>
                    0/1 <a href="/#">Comment on 10 Posts</a>
                  </span>
                  <p className="small">Points: 150 | Coins: 15</p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </div>
  );
}

export default Leaderboard;
