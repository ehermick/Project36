import React from "react";
import "./Bar.css";
import PetsIcon from '@material-ui/icons/Pets';
import BarHover from"./BarHover";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SearchIcon from "@material-ui/icons/Search";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AndroidIcon from '@material-ui/icons/Android';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
function Bar() {
    return(
        <div className="bar">
            <PetsIcon className="tIcon"/>
            <BarHover active Icon={HomeWorkIcon} text="Home" />
            <BarHover Icon= {SearchIcon} text="Search" />
            <BarHover Icon= {NotificationsActiveIcon} text="Notifications" />
            <BarHover Icon={ArrowForwardIcon} text="Emails" />
            <BarHover Icon= {BookmarkBorderIcon} text="Saved" />
            <BarHover Icon={AndroidIcon} text="User" />
            <BarHover Icon= {MoreHorizIcon} text="More" />
            <Button variant="outlined" className="button1" fullWidth>Add Dog</Button>
        </div>
    );
}
export default Bar;