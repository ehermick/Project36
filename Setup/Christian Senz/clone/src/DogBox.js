import React, { useState } from "react";
import "./DogBox.css";
import database from "./firebase";
import { Avatar, Button } from "@material-ui/core"; 

function DogBox() {
  const[dogPosting, setDogPosting]=useState("");
  const[dogPostingImage, setDogPostingImage]=useState("");
  const sendPosting = (e)=>{
    e.preventDefault();
    database.collection("dogs").add({
      name:"Default",
      verified:true,
      text: dogPosting,
      image: dogPostingImage,
      avatar:"data:image/png;base64,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",
    });
    setDogPosting("");
    setDogPostingImage("");
  };
  return (
    <div className="adopt">
        <form>
            <div className="adopt_input">
                <Avatar src="data:image/png;base64,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"></Avatar>
                <input onChange={e=> setDogPosting(e.target.value)} value={dogPosting} placeholder="Dog Description?" type="text" />
            </div>
            <input onChange = {(e)=> setDogPostingImage(e.target.value)} value={dogPostingImage} className="image" placeholder="Enter Image URL" type="text" />
            <Button onClick={sendPosting} type="submit" className="tButton">Add Dog</Button>
        </form>
    </div>
  );
}

export default DogBox;