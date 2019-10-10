import React from "react"
import "./Skills.css"


export default function Skills() {
    return (
        <div className="Skills_List">
        <div className="Skills_Outer">
            <div className="Skills_Container">
                <img src={require('../../Pics/js-square.png')} className="Skills_Logo_JavaScript">
                </img>
            </div>
            <div className="Skills_Container">
                <img src={require('../../Pics/html5.png')} className="Skills_Logo_Html5">
                </img>

            </div>
            <div className="Skills_Container">
                <img src={require('../../Pics/css3.png')} className="Skills_Logo_Css3">
                </img>

            </div>
            <div className="Skills_Container">
                <img src={require('../../Pics/Heroku.png')} className="Skills_Logo_React">
                </img>

            </div>
            <div className="Skills_Container">
                <img src={require('../../Pics/node.png')} className="Skills_Logo_Node">
                </img>

            </div>
            <div className="Skills_Container">
                <img src={require('../../Pics/react.png')} className="Skills_Logo_Heroku">
                </img>
            </div>
            <div className="Skills_Container">
                <img src={require('../../Pics/postgresql.png')} className="Skills_Logo_Postgres">
                </img>
            </div>
            {/* <div className="Skills_Container">
                <img className="Skills_Logo_PS">
                </img>
            </div> */}
        </div>
            <h4 className="Skills_Link"></h4>
        </div>
    )
}