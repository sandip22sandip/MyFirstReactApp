import React from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../utils/axiosInstance";

function ProfileBadges() {
  const { isLoading, error, data } = useQuery(["profileBadges"], () =>
  axiosInstance
      .get("/rest.php", {
        params: {
          q: "/restAPI/reward/getUserBadges/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      })
      .then((res) => {
        return res.data["details"];
      })
  );
  console.log(data);

  return (
    <div className="tab-pane" id="badges">
      <div className="row">
        {error
          ? "Something went wrong with your request"
          : isLoading
          ? "Loading"
          : data &&
            data.map((badge) => (
              <div className="col-sm-3 text-center m-b-15" key={badge.id}>
                <div className="badge-icon img-md img-circle">
                  <img src={badge?.badgeicon} className="img-sm" alt="" />
                </div>
                <h6>{badge?.badgename}</h6>
                <p>{badge?.badgedesc}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default ProfileBadges;
