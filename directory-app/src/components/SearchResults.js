import React from "react";

function SearchResults(props) {
  console.log(props);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((x, i) => (
            <tr key={i + "-row"}>
              <td>{x.thumbnail}</td>
              <td>{x.first}</td>
              <td>{x.last}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SearchResults;
