import React from "react";

function Container(props) {
  return (
    <div className="container-fluid m-0 p-0">      
      {props.children}
    </div>
  );
}

export default Container;
