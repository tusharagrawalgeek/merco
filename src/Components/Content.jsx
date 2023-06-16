import React from "react";
import "../style2.css";
import search from "../img/search-normal.png";
import notification from "../img/notification.png";
import calender from "../img/calendar-2.png";
import question from "../img/question.png";
import downarr from "../img/downarrow.png";
import oip from "../img/OIP.jpg";
import pencil from "../img/arrow-square-up.png";
import link from "../img/Group 626 (1).png";
import addsqr from "../img/add-squarebg.png";
import downarrfade from "../img/downarrfade.png";
import calender2 from "../img/calendar-2.png";
import filter from "../img/filter.png";
import group from "../img/Group 615.png";
import fourD from "../img/Group 612.png";
import menu from "../img/Group 611.png";
import ellip1 from "../img/Ellipse 10 (1).png";
import ellip2 from "../img/Ellipse 11.png";
import ellip3 from "../img/Ellipse 8.png";
import message from "../img/message.png";
import folder from "../img/Group 628.png";
import Card from "./Card";
function Content() {
  return (
    <>
      <div style={{ display: "block" }}>
        <div className="search">
          <img
            src={search}
            width="22px"
            height="22px"
            style={{ verticalAlign: "middle", margin: "0 17px" }}
          />
          <input
            type="text"
            className="inputtext"
            placeholder="Search for anything..."
          />
        </div>
        <img
          src={downarr}
          width="17px"
          height="7px"
          style={{ float: "right", margin: "16px 0 0 14px" }}
        />
        <img
          src={oip}
          width="40px"
          height="40px"
          style={{
            borderRadius: "20px",
            float: "right",
            verticalAlign: "middle",
          }}
        />
        <div className="profile">
          <div className="text5">
            Anima Agrawal
            <br />
            <text style={{ color: "#787486" }}>U.P. India</text>
          </div>
        </div>
        <div className="tools">
          <img
            src={calender}
            width="20px"
            height="20px"
            style={{ marginRight: "30px" }}
          ></img>
          <img
            src={question}
            width="20px"
            height="20px"
            style={{ marginRight: "30px" }}
          ></img>
          <img src={notification} width="20px" height="20px"></img>
        </div>
      </div>
      <div style={{ display: "inline-block" }}>
        <div className="text6">mobile app</div>
        <img
          src={pencil}
          height="25px"
          width="25px"
          style={{ marginLeft: "20px", marginTop: "12px" }}
        ></img>
        <img
          src={link}
          height="25px"
          width="25px"
          style={{ marginLeft: "17px", marginTop: "12px" }}
        ></img>
        <div
          style={{
            display: "inline-block",
            verticalAlign: "bottom",
            marginLeft: "466px",
            marginTop: "50px",
          }}
        >
          <img
            src={addsqr}
            width="15px"
            height="15px"
            style={{
              marginRight: "8.5px",
              verticalAlign: "top",
              marginTop: "15px",
            }}
          />
          <div className="invite">Invite</div>
          <img
            src={oip}
            height="40px"
            width="40px"
            style={{
              borderRadius: "21px",
              border: "1px solid white",
              position: "relative",
              zIndex: "1",
            }}
          ></img>
          <img
            src={oip}
            height="40px"
            width="40px"
            style={{
              borderRadius: "21px",
              border: "1px solid white",
              position: "relative",
              zIndex: "2",
              right: "10px",
            }}
          ></img>
          <img
            src={oip}
            height="40px"
            width="40px"
            style={{
              borderRadius: "21px",
              border: "1px solid white",
              position: "relative",
              zIndex: "3",
              right: "20px",
            }}
          ></img>
          <img
            src={oip}
            height="40px"
            width="40px"
            style={{
              borderRadius: "21px",
              border: "1px solid white",
              position: "relative",
              zIndex: "4",
              right: "30px",
            }}
          ></img>
          <div
            style={{
              background: "pink",
              height: "30px",
              width: "40px",
              textAlign: "center",
              paddingTop: "10px",
              borderRadius: "20px",
              border: "1px solid white",
              display: "inline-block",
              position: "relative",
              verticalAlign: "top",
              zIndex: "5",
              right: "40px",
              fontFamily: "inter",
              color: "red",
              fontWeight: "500",
            }}
          >
            +3
          </div>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <div className="filter">
          <img src={filter} width="11" height="13" />
          <div className="text7">Filter</div>
          <img src={downarrfade} width="12px" height="6px" />
        </div>
        <div className="filter">
          <img src={calender2} width="13" height="13" />
          <div className="text7">Today</div>
          <img src={downarrfade} width="12px" height="6px" />
        </div>
        <div className="filter" style={{ marginLeft: "617px" }}>
          <img src={group} width="13" height="13" />
          <div className="text7">Share</div>
        </div>
        <hr
          style={{
            width: "0px",
            height: "28px",
            border: "1px solid #787486",
            display: "inline-block",
            margin: "5px 20px 5px 8px",
          }}
        />
        <img
          src={fourD}
          width="40px"
          height="40px"
          style={{ verticalAlign: "middle", marginLeft: "28px" }}
        />
        <img
          src={menu}
          width="21px"
          height="21px"
          style={{ verticalAlign: "middle", marginLeft: "22px" }}
        />
      </div>
      <div style={{ marginTop: "40px" }}>
        <div className="cardcontainer">
          <div className="heads">
            <img
              src={ellip1}
              width="8px"
              height="8px"
              style={{ marginRight: "8px" }}
            />
            To do
            <div
              style={{
                width: "20px",
                height: "17px",
                borderRadius: "10px",
                background: "#E0E0E0",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
                color: "#625F6D",
                textAlign: "center",
                paddingTop: "3px",
                display: "inline-block",
                marginLeft: "20px",
              }}
            >
              4
            </div>
            <hr
              style={{
                border: "1px solid #800080",
                width: "314px",
                marginTop: "23px",
                marginBottom: "8px",
              }}
            ></hr>
            </div>
            
            <Card status="low" title="BrainStorming" subtitle="Brainstorming brings team members' diverese experience into
                play." noOfProfiles={3} comments={12} files={0} />
                <Card status="high" title="Research" subtitle="User research helps you to create an optimal product for users." noOfProfiles={2} comments={10} files={3}/
                >
                    <Card status="high" title="Wireframse" subtitle="Low fidelity wireframes contains the most basic content and visuals." noOfProfiles={2} comments={2} files={1} />
            {/* <Card/> */}
        </div>


        <div className="cardcontainer">
          <div className="heads">
            <img
              src={ellip2}
              width="8px"
              height="8px"
              style={{ marginRight: "8px" }}
            />
            On Progress
            <div
              style={{
                width: "20px",
                height: "17px",
                borderRadius: "10px",
                background: "#E0E0E0",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
                color: "#625F6D",
                textAlign: "center",
                paddingTop: "3px",
                display: "inline-block",
                marginLeft: "20px",
              }}
            >
              3
            </div>
            <hr
              style={{
                border: "1px solid #FFA500",
                width: "314px",
                marginTop: "23px",
                marginBottom: "8px",
              }}
            ></hr>
            </div>
            
            <Card status="low" title="Onboarding Illustrations" subtitle="" noOfProfiles={3} comments={14} files={15} image/>
                <Card status="low" title="Moodboard" subtitle="" noOfProfiles={1} comments={9} files={10} image/>
                    <Card status="completed" title="BrainStorming" subtitle="Brainstorming brings team members' diverese experience into
                play." noOfProfiles={2} comments={5} files={25} image/>
            {/* <Card/> */}
        </div>


        <div className="cardcontainer">
          <div className="heads">
            <img
              src={ellip3}
              width="8px"
              height="8px"
              style={{ marginRight: "8px" }}
            />
            Done
            <div
              style={{
                width: "20px",
                height: "17px",
                borderRadius: "10px",
                background: "#E0E0E0",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
                color: "#625F6D",
                textAlign: "center",
                paddingTop: "3px",
                display: "inline-block",
                marginLeft: "20px",
              }}
            >
              2
            </div>
            <hr
              style={{
                border: "1px solid #8BC48A",
                width: "314px",
                marginTop: "23px",
                marginBottom: "8px",
              }}
            ></hr>
            </div>
            
            <Card status="completed" title="Mobile App Design" subtitle="" noOfProfiles={2} comments={12} files={15} image/>
                <Card status="completed" title="Design System" subtitle="It just needs to adapt the UI from what you did before " noOfProfiles={3} comments={12} files={15} />
                    {/* <Card status="completed" title="BrainStorming" subtitle="Brainstorming brings team members' diverese experience into */}
                {/* play." noOfProfiles={2} comments={5} files={25} image/> */}
            {/* <Card/> */}
        </div>
      </div>


      
    </>
  );
}
export default Content;
