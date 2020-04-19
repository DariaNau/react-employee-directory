import React from "react";


function Container(props) {
  return (
      <div className="container-fluid m-0 p-0">
    <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "lavender"}}>
      <h1> Employee Directory </h1>
      <h6> Use the search bar below of sort by name and email.</h6>
    </div>
    {props.children}
    </div>
  );
}

export default Container;
