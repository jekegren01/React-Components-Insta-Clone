//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data";

const PostsPage = () => {
  const [data, setData] = useState(dummyData);
  console.log(data);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      data.map(post => {
        return (
        <Post key={post.username} post={post} /> )
        })}
    </div>
  );
};

export default PostsPage;
