import React from "react";

import { Link } from "react-router-dom";

import accolade from "../../assets/images/icons/accolade.png";
import demo_user from "../../assets/images/users/no-avatar.jpg";

function FeedBox() {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="row m-b-15">
          <div className="col-sm-12">
            <img
              src={demo_user}
              className="img-circle img-sm pull-left m-10"
              alt="avatar-9.jpg"
            />
            <i className="fa fa-ellipsis-v pull-right" />
            <p className="m-0 m-t-15">
              <b>Elvis Bruintjies</b> recieved an accolade
            </p>
            <p className="small m-0">10 min ago</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <p className="text-center">
          <img
            src={accolade}
            className="img-center img-xl"
            alt="accolade.png"
          />
        </p>
        <div className="row m-t-15">
          <div className="col-sm-12">
            <span className="small m-r-10">
              <Link to="#">20 High fives</Link>
            </span>
            <span className="small m-r-10">
              <Link to="#">1 Comment</Link>
            </span>
          </div>
        </div>
        <hr />
        <Link to="#" className="small text-muted m-r-10">
          <i className="ion-android-hand " /> High Five
        </Link>
        <Link to="#" className="small text-muted">
          <i className="fa fa-comment-o" /> Comment
        </Link>
      </div>
    </div>
  );
}

export default FeedBox;
