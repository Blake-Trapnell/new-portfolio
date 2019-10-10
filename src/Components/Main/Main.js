import React, {Component} from "react"
import "./Main.css"
import {TweenMax} from "gsap/all"

export default class Main extends Component {
    state = {
        displayContact: true,
        displayProjects: true,
        displaySkills: true,
    }

 moveContact = () => {
     
     this.setState({
         displayContact: !this.state.displayContact
     })
if(this.state.displayContact === false) {
  TweenMax.to(document.getElementsByClassName("Contact_Outer"), 1, {opacity: 0,})

    
}
else if(this.state.displayContact === true) {TweenMax.to(document.getElementsByClassName("Contact_Outer"), 1, {opacity: 1})
    TweenMax.from(document.getElementsByClassName("Contact_Links"), 1, {x: -300})
 }

 }

 moveProjects = () => {
    
    this.setState({
        displayProjects: !this.state.displayProjects
    })
if(this.state.displayProjects === false) {
 TweenMax.to(document.getElementsByClassName("Projects_Outer"), 1, {opacity: 0})

   
}
else if(this.state.displayProjects === true) {TweenMax.to(document.getElementsByClassName("Projects_Outer"), 1, {opacity: 1})
TweenMax.from(document.getElementsByClassName("Projects_Outer"), 1, {x: 300})
}

}

moveSkills = () => {
    
    this.setState({
        displaySkills: !this.state.displaySkills
    })
if(this.state.displaySkills === false) {
 TweenMax.to(document.getElementsByClassName("Skills_Outer"), 1, {opacity: 0})

   
}
else if(this.state.displaySkills === true) {TweenMax.to(document.getElementsByClassName("Skills_Outer"), 1, {opacity: 1})
TweenMax.from(document.getElementsByClassName("Skills_Outer"), 1, {y: 300})
}

}

render() {


    return (
        <div className="main_info">
            <div className="Main_Name">
                <h1 className="main_h1">Blake Trapnell</h1>
            </div>
            <div className="Main_Web">
                <h6 className="main_h6">Full Stack Web Developer</h6>
            </div>
            <div className="Main_Navigation">
                <div className="Main_Navigation_Top">
              
                </div>
                <div className="Main_Navigation_LeftRight">
                    <h4 onClick={()=>this.moveContact()} className="Main_Navigation_Left">⇦ Contact</h4>
                    <h4 onClick={()=>this.moveProjects()} className="Main_Navigation_Right">Projects ⇨</h4>
                </div>
                <div className="Main_Navigation_Bottom">
                    <h4 onClick={()=>this.moveSkills()}>Skills</h4>
                </div>
            </div>
        </div>

    )
}
}