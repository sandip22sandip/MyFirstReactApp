import React from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "../utils/Spinner";
import QueryString from "qs";

function BellNot() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      var bellID = QueryString.stringify({
        id,
      });

      var config = {
        method: "post",
        url: "/rest.php",
        params: {
          q: "/restAPI/user/readUserBellNot/",
          auth: sessionStorage.getItem("AuthToken"),
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: bellID,
      };

      return axiosInstance(config);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["bellNot"]);
    },
  });

  const { isLoading, error, data } = useQuery(["bellNot"], () =>
    axiosInstance
      .get("/rest.php", {
        params: {
          q: "/restAPI/user/getUserBellNot/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      })
      .then((res) => {
        return res.data["details"];
      })
  );
  //   console.log(data);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error occurred while fetching data</div>;
  }

  const markAsRead = (id) => {
    console.log(id);
    mutation.mutate(id);
  };
  return (
    <>
      <li className="hidden-xs">
        <a
          href="/#"
          data-toggle="modal"
          data-target="#notification_modal"
          data-backdrop=""
        >
          <span className="badge badge-xs badge-danger">{data?.length}</span>
          <div className="btn btn-circle waves-effect waves-light no-shadow">
            <i className="fa fa-bell-o" />
          </div>
        </a>
      </li>
      <div
        className="modal fade modal-slideright"
        id="notification_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content p-0 b-0">
            <div className="panel panel-primary b-0 no-shadow">
              <div className="panel-heading">
                <button
                  type="button"
                  data-dismiss="modal"
                  className="close btn-xs text-white"
                >
                  <i className="fa fa-times" />
                </button>
                <h4 className="panel-title text-white">Notifications</h4>
              </div>
              <div className="panel-body">
                <h6 className="bold">{data?.length} New notification</h6>
                <hr />
                <div>
                  {data.length === 0 ? (
                    <p>No data found.</p>
                  ) : (
                    data.map((not) => (
                      <span key={not.id}>
                        <Link
                          to="/#"
                          className="list-group-item b-0"
                          data-dismiss="modal"
                          onClick={() => markAsRead(not.id)}
                        >
                          <i className="fa fa-chevron-right pull-right" />
                          {not?.text}
                        </Link>
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BellNot;
