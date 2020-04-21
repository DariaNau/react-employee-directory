import React from "react";

function Img(props) {
  return (
    <div>
      <img className="rounded" src={props.url} height="100px" />
    </div>
  );
}

export default Img;
