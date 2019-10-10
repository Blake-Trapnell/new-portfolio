import React, { useEffect, useRef } from "react"
import "./Nav.css"
import Background from '../../Wb2.jpg';
import { TimelineMax, TweenLite, Draggable, Power3, Bounce, TweenMax } from "gsap/all";


export default function Nav() {

    let throwable = useRef(null)
    let move = useRef(null)

    useEffect(() => {

        TweenMax.from(throwable, 2, {y: 310, ease: Power3.Bounce})
        TweenMax.to(throwable, 1, {y: 80, ease: Power3.Bounce, delay: 2})
        TweenMax.to(move, 1, {opacity: 1, ease: Power3.easeOut,})
        TweenMax.to(move, 1, {opacity: 0, ease: Power3.easeOut, delay: 1})
        TweenMax.to(move, 1, {opacity: 1, ease: Power3.easeOut, delay: 2})
        TweenMax.to(move, 1, {opacity: 0, ease: Power3.easeOut, delay: 3})

        Draggable.create("#Throwable", {
            type: "x,y",
            edgeResistance: 0.15,
            bounds: ".App",
            throwProps: true,
            onDrag: function () {
                if (this.hitTest(".Skills_Logo_JavaScript", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_JavaScript"), 0.3, { opacity: 1, scale: 1 });
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_JavaScript"), 0.3, { opacity: 0, scale: 0 });
                }
                if (this.hitTest(".Skills_Logo_Html5", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Html5"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Html5"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_Css3", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Css3"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Css3"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_React", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_React"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_React"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_Heroku", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Heroku"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Heroku"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_Node", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Node"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Node"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_PS", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_PS"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_PS"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_Postgres", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Postgres"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Postgres"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".main_h1", "100%")) {
                    TweenLite.to(document.getElementsByClassName('main_h1'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('main_h1'), .2, { opacity: 0, })
                }
                if (this.hitTest(".main_h6", "100%")) {
                    TweenLite.to(document.getElementsByClassName('main_h6'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('main_h6'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Main_Navigation_Top", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Main_Navigation_Top"), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Top'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Main_Navigation_Left", "100%")) {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Left'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Left'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Main_Navigation_Right", "100%")) {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Right'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Right'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Main_Navigation_Bottom", "100%")) {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Bottom'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Bottom'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Skills_Link", "30%")) {
                    console.log('hit')
                    TweenLite.to(document.getElementsByClassName('Skills_Link'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Skills_Link'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Contact_Profile_image", "100%")) {
                    console.log('hit')
                    TweenLite.to(document.getElementsByClassName('Contact_Profile_image'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Contact_Profile_image'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Contact_Links_Container", "90%")) {
                    console.log('hit')
                    TweenLite.to(document.getElementsByClassName('Contact_Links_Container'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Contact_Links_Container'), .2, { opacity: 0, })
                }          
            }

        })
    }, [])

    return (
        <div>
            <div className="App_Background" src={Background} alt="Background">
                <div
                ref={el => throwable = el}
                    id="Throwable" className="Nav_Header">
                    <h1
                    ref={el => move = el}
                    className="Move_Me">Move me!</h1>
                </div>
            </div>
        </div>
    )
}
