import React from "react";
import message from "../img/message.png";
import folder from "../img/Group 628.png";
import oip from "../img/OIP.jpg";
import '../style2.css';
function Card(props){
    return(
        <>
        <div
              style={{
                padding: "20px",
                background: "white",
                borderRadius: "16px",
                margin: "20px 0",
              }}
            >
              <div>
                <div
                  style={{
                    padding: "4px 6px",
                    borderRadius: "4px",
                    background: props.status==="low"?"rgba(223, 168, 116, 0.2)":props.status==="high"?"rgba(216, 114, 125, 0.1)":"rgba(131, 194, 157, 0.2)",
                    color: props.status==="low"?"#D58D49":props.status==="high"?"#D8727D":"#68B266",
                    display: "inline-block",
                    fontFamily:"Inter",
                    fontWeight:"500",
                    fontSize:"12px"
                  }}
                >
                  {props.status==="low"?"Low":props.status==="high"?"High":"Completed"}
                </div>
                <div
                  style={{
                    float: "right",
                    fontWeight: "800px",
                    fontSize: "16px",
                  }}
                >
                  ...
                </div>
              </div>
              <div className="cardtext">{props.title}</div>
              <div className="cardsubtext">
                {props.subtitle}
              </div>
              {props.image&&
              <img
                src={oip}
                width="280px"
                height="110px"
                style={{ margin: "7px 0 0" }}
              />}
              <div style={{ display: "inline-block", marginTop: "27px" }}>
                {[...Array(props.noOfProfiles).keys()].map((i, ind) => {
                  return (
                    <img
                      src={oip}
                      height="24px"
                      width="24px"
                      style={{
                        borderRadius: "21px",
                        border: "1px solid white",
                        position: "relative",
                        zIndex: ind + 1,
                        right: 10 * ind,
                      }}
                    ></img>
                  );
                })}
                <img
                  src={message}
                  width="14px"
                  height="14px"
                  style={{
                    verticalAlign: "top",
                    marginTop: "5px",
                    marginRight: "6px",
                    marginLeft: "30px",
                  }}
                />
                <div className="cardsubtext2">
                  {props.comments} comments
                  <img
                    src={folder}
                    height="16px"
                    width="16px"
                    style={{
                      verticalAlign: "top",
                      marginLeft: "5px",
                      marginRight: "6px",
                    }}
                  />
                  {props.files}files
            
              </div>
            </div>
            </div>
        </>
    );
}
export default Card;