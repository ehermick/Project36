import React from "react";
import "./Feed.css";
import DogBox from "./DogBox";
import Post from "./Post";


function Feed() {
  return (
    <div className="feed">
        <div className="feed__header">
        <h2>Home</h2>
        </div>
       <DogBox /> 
       <Post />
       <Post />
    </div>
  );
}

export default Feed;