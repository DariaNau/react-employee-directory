import React from "react";
import Img from "../Img/index"

function SearchResults(props) {
  console.log(props);
  return (
    <>
      <table>
        <thead>
          <tr>
          <th>Avatar</th>
            <th className="filter" id="filterName">Name</th>
            <th className="filter" id="filterEmail">Email</th>
            <th className="filter" id="filterPhone">Phone</th>
            <th className="filter" id="filterDOB">DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((x, i) => (
            <tr key={i + "-row"}>
              <td> <Img url={x.thumbnail} /> </td>
              <td>{x.first} {x.last}</td>
              <td>{x.email}</td>
              <td>{x.phone}</td>
              <td>{x.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SearchResults;
