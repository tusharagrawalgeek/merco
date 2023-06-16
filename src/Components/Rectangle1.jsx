import React from "react";
import '../style.css';
import SideBar from "./SideBar";
import Content from "./Content";
function Rectangle1(){
    return(
        <>
            <div className="rect1">
                <div className="left">
                    <SideBar/>
                </div>
                
                <hr className="verticalrule"></hr>
                <div className="right">
                    <Content/>
                </div>
            </div>
        </>
    );
}
export default Rectangle1;