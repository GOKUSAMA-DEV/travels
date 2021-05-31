import React from 'react';
import "../Home/Home.css";
// import A from "../Home/back.jpg";
import video from "../Home/video-1.mp4";
import BestLocation from "../Home/BestLocation";
import Guide from '../Guide/Guide';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <div className="body_parent">
                <div className="video">
                    {/* <img src={A} /> */}
                    {/* <video src="video-1.mp4" autoPlay loop muted /> */}
                    <video autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="video_caption">
                        <p>We have better experince in all location</p>
                        <div className="buttons">
                            <Link className="fill">View</Link>
                            <Link className="fill_not">More</Link>
                        </div>
                    </div>
                </div>
                <div className="slogan">
                    <div className="best">
                        <h1>We Have Best Location in States</h1>
                    </div>
                    <div className="location">
                        {
                            BestLocation.map((val, ind) => (
                                <div className="main_card" key={ind}>
                                    <div className="img_card">
                                        <img src={val.imgsrc} />
                                    </div>
                                    <div className="card_name">
                                        <h1>{val.name}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* <div className="slogan">
                    <div className="best">
                        <h1>We Have Best Guide for All Location</h1>
                    </div>
                    <div className="guide">
                        {
                            Guide.map((val, ind) => (
                                <div className="main_card" key={ind}>
                                    <div className="img_card">
                                        <img src={val.imgsrc} />
                                    </div>
                                    <div className="card_name">
                                        <h1>{val.name}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div> */}

            </div>
        </>
    )
}
