import React from "react";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Avatar } from "@material-ui/core";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function Post({name, verified, text, image, avatar}) {
  return (
    <div className="dogs">
        <div className="avatar">
        <Avatar src={avatar}></Avatar>       
        </div>
        <div className="messageBody">
            <div >
                <div >
                    <h3>
  {name}{" "} <span>{verified && <VerifiedUserIcon className="badge"></VerifiedUserIcon>}</span>
                    </h3>
                </div>
                <div >
                    <p>
                        {text}
                    </p>
                </div>
            </div>
            <img src={image} alt=""/>
            <div className="footer">
            <ThumbUpIcon fontSize="small" />
            <ThumbDownIcon fontSize="small" />
            <ChatBubbleOutlineIcon fontSize="small" />
            </div>
        </div>
    </div>
  );
}

export default Post;