import React from "react";
import '../style.css';
import group7 from '../img/Group 7.png';
import message from '../img/message.png';
import category from '../img/category.png';
import profile from '../img/profile-2user.png';
import settings from '../img/setting-2.png';
import task from '../img/task-square.png';
import addsqr from '../img/add-square.png';
import ellip1 from '../img/Ellipse 10 (1).png';
import ellip2 from '../img/Ellipse 11.png';
import ellip3 from '../img/Ellipse 8.png';
import ellip4 from '../img/Ellipse 9.png';
import dots from '../img/dots.png';
function SideBar(){
    return(
        <>
        <div style={{display:""}}>
        <div className="projectHead">
            <img src={group7} width="24px" height="24px" style={{
                verticalAlign:"middle",
                marginRight:"10px"
            }}></img>
            <b>Project M.</b>
        </div>
        <hr className="hrrule"></hr>
        <div className="modules">
        <div className="module">
            <img src={category} width="20px" height="20px" style={{verticalAlign:"middle", paddingRight:"16px"}}></img>
            Home</div>
            
            <div className="module">
            <img src={message} width="20px" height="20px" style={{verticalAlign:"middle", paddingRight:"16px"}}></img>
            Messagges</div>
            <div className="module">
            <img src={task} width="20px" height="20px" style={{verticalAlign:"middle", paddingRight:"16px"}}></img>
            Tasks</div>
            <div className="module">
            <img src={category} width="20px" height="20px" style={{verticalAlign:"middle", paddingRight:"16px"}}></img>
            Category</div>
            <div className="module">
            <img src={settings} width="20px" height="20px" style={{verticalAlign:"middle", paddingRight:"16px"}}></img>
            Settings</div>
        </div>
        <hr className="hrrule2"></hr>
        <div className="projects">
            <div className="myprojects">
                <div className="myprojtext">
                MY PROJECTS
                <img src={addsqr} width="14" height={14} style={{verticalAlign:"middle", float:"right", marginTop:"2px"}}></img>
                </div>
            </div>
            <div className="projectnameSelected">
                <div className="innercontent">
                    <img src={ellip3} width="8px" height="8px" style={{verticalAlign:"middle", marginRight:"16px"}}/>
                Mobile app 
                <div style={{float:"right"}}>
                ...
                </div>
                </div>
            </div>
            <div className="projectname">
                <div className="innercontent">
                    <img src={ellip4} width="8px" height="8px" style={{verticalAlign:"middle", marginRight:"16px"}}/>
                Website Redesign
                {false&&
                <div style={{float:"right"}}>
                ...
                </div>
                }
                </div>
            </div>
            <div className="projectname">
                <div className="innercontent">
                    <img src={ellip1} width="8px" height="8px" style={{verticalAlign:"middle", marginRight:"16px"}}/>
                Design System
                {false&&
                <div style={{float:"right"}}>
                ...
                </div>
                }
                </div>
            </div>
            <div className="projectname">
                <div className="innercontent">
                    <img src={ellip2} width="8px" height="8px" style={{verticalAlign:"middle", marginRight:"16px"}}/>
                Wireframes
                {false&&
                <div style={{float:"right"}}>
                ...
                </div>
                }
                </div>
            </div>

        </div>
        <div className="message">
            <div className="bulb">

            </div>
            <div className="content-feedback">
                <div className="text1">
                Thoughts Time
                </div>
                <div className="text2">
                We dont't have any notice for you, till then you can share your thoughts with your peers.
                </div>
                <div className="text1" style={{background:"white", padding:"12px 27px", borderRadius:"4px"
            }}>
                Write a message
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default SideBar;