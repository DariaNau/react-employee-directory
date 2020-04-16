import React from "react";
import Img from "../Thumbnail/index"

function SearchResults(props) {
  console.log(props);
  return (
    <>
      <table>
        <thead>
          <tr>
          <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
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
