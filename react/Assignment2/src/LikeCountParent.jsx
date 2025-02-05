import React from "react";
import { useState } from "react";
import LikeCount from "./LikeCountChild";
import "./App.css"

function LikeCountParent(){
    const [likes, setLikes] = useState(0);
    function likeIncrease(){
        setLikes(likes + 1);
    }
    return(
        <>
        <div className="bhanu">
            <p>Likes : {likes}</p>
            <LikeCount likeIncrease={likeIncrease} />
            <LikeCount likeIncrease={likeIncrease} />
            <button onClick={()=>setLikes(0)}>Reset</button>
        </div>
        </>
    )
}

export default LikeCountParent;