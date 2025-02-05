import React from "react";

function LikeCount(props){
    return(
        <>
            <button onClick={props.likeIncrease}>Like</button>
        </>
        );
}
export default LikeCount;