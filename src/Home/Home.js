import React from 'react';
import "../Home/Home.css";
// import A from "../Home/back.jpg";
import video from "../Home/video-1.mp4";
import Guide from '../Guide/Guide';
import { Link } from 'react-router-dom';
import LocationData from "../Home/LocationData";
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const Home = () => {

    const look = {
        fontSize: 20,
        marginTop: 5,
        marginRight: 5,
    }

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
                <div className="best">
                        <h1>We Have Best Location</h1>
                    </div>
                <div className="parent_lol">
                {
                    LocationData.map((val, ind) => (
                        <div className="location_parent" key={ind}>
                            <div className="location_card">
                                <img src={val.imgsrc} />
                            </div>
                            <div className="location_name">
                                <p><LocationOnIcon style={look} /></p>
                                <p>{val.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
                <div className="slogan">
                    <div className="best">
                        <h1>We Have Best guide</h1>
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
