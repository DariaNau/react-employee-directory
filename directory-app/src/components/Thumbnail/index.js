import React from 'react';

function Img(props){
    return <div className="thumbnail">
        <img src={props.url} height="100px" />
    </div> 
}

export default Img;