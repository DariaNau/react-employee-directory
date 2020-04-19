import React from "react";
import Img from "../Img/index";
import "./index.css";

function SearchResults(props) {
  console.log(props);
  return (
    <div className="table-responsive" id="emp">
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th className="cursor" scope="col">
              Avatar
            </th>
            <th
              className="cursor"
              scope="col"
              onClick={() => props.sortBy("last")}
            >
              <b>Name</b>
              <i className="fa fa-fw fa-sort"></i>
            </th>
            <th
              className="cursor"
              scope="col"
              onClick={() => props.sortBy("email")}
            >
              <b>Email</b>
              <i className="fa fa-fw fa-sort"></i>
            </th>
            <th className="cursor" scope="col" id="filterPhone">
              Phone
            </th>
            <th className="cursor" scope="col" id="filterDOB">
              DOB
            </th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((x, i) => (
            <tr key={i + "-row"}>
              <td>
                {" "}
                <Img url={x.thumbnail} />{" "}
              </td>
              <td>
                {x.first} {x["last"]}
              </td>
              <td>{x.email}</td>
              <td>{x["phone"]}</td>
              <td>{x.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
