import React from 'react';
import "../Home/Home.css";
import A from "../Home/back.jpg";
import BestLocation from "../Home/BestLocation";
import Guide from '../Guide/Guide';

export const Home = () => {
    return (
        <>
            <div className="body_parent">
                <div className="video">
                    <img src={A} />
                    <div className="video_caption">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing</p>
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
                <div className="slogan">
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
                </div>

            </div>
        </>
    )
}
