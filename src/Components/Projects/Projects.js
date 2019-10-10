import React from "react"
import './Projects.css'

export default function Contact() {
    return (
        <div className="Projects_Outer">
            <h1 className="Projects-Title">Projects:</h1>
            <div className="Aces-Dungeon-Creator">
                <div className="Projects-Background">
                </div>
            </div>
                <div className="About-Aces-Dungeon-Creator">
                    <a href="http://www.acesdungeoncreator.com" target="_blank">
                    <h1 className="Projects-Title">Ace's Dungeon Creator</h1>
                    </a>
                    <h4>A mobile responsive website <p>
                        designed to let users take their</p>
                        <p>Table Top Dungeons and Dragons</p><p>
                            Game on the go with them</p></h4>
                </div>
                            <div className="Aces-Dungeon-Creator">
                <div className="game-Trader-Background">
                </div>
            </div>
                <div className="About-game-Traders">
                    <a href="http://104.248.178.127:4200/#/" target="_blank">
                    <h1 className="Projects-Title">Game Traders</h1>
                    </a>
                    <h4>A Smart rework of the current <p>
                        pre-owned game Industry</p>
                        <p>Peer to Peer trades allow</p><p>
                            discounted prices on all trades</p></h4>
                </div>

        </div>
    )
}