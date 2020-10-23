import React, {useEffect, useState} from "react";
import "./Feed.css";
import DogBox from "./DogBox";
import Post from "./Post";
import database from "./firebase";

function Feed() {
  const[dogs, setDogs]=useState([]);
  useEffect(()=>{
    database.collection("dogs").onSnapshot(snapshot =>(
    setDogs(snapshot.docs.map(doc=>doc.data()))
  ))
  }, []);
  return (
    <div className="feed">
        <div className="feed__header">
        <h2>Home</h2>
        </div>
        <DogBox /> 
      {dogs.map(dog => (
       <Post name={dog.name} verified={dog.verified} text={dog.text} image={dog.image} avatar={dog.avatar}/>
      ))}
       </div>
  );
}

export default Feed;