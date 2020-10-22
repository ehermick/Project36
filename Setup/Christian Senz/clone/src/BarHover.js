import React from "react";
import "./BarHover.css";
function BarHover({ active, text, Icon }) {
    return (
        <div className={`barHover ${active && "barHover--active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}
export default BarHover;
