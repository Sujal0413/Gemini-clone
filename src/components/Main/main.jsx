import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="User Icon" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Sujal.</span></p>
                    <p>How can I help you today?</p>
                </div>
                
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="Compass Icon" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="Light Bulb Icon" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activity for our work retreat</p>
                        <img src={assets.message_icon} alt="Message Icon" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="Code Icon" />
                    </div>
                </div>  
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="Gallery Icon" />
                            <img src={assets.mic_icon} alt="Microphone Icon" />
                            <img src={assets.send_icon} alt="Send Icon" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate information, including about people. Double-check its responses. Your privacy and Gemini Apps.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;

