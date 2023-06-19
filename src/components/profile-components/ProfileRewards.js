import React from "react";

function ProfileRewards() {
  return (
    <div className="tab-pane" id="rewards">
      <div className="no-rewards text-center">
        <h6 className="text-uppercase">There are no rewards</h6>
        <p>You have not redeemed any reward</p>
        <a
          href="rewards"
          className="btn btn-secondary waves-light waves-effect"
        >
          Redeem a reward
        </a>
      </div>
    </div>
  );
}

export default ProfileRewards;
