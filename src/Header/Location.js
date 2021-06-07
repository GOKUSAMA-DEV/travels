import React from 'react';
import "../Header/Location.css";
import A from "../Location/Pack/a.JPG";
import BestLocation from "../Header/BestLocation";
import { Link } from 'react-router-dom';

export const Location = () => {
    return (
        <>
            <div className="parent_jai">
                <div className="title_name">
                    <h1>Location</h1>
                </div>

                <div className="location_main">
                    {
                        BestLocation.map((val, ind) => (
                            <div className="main_card" key={ind}>
                                <div className="img_card">
                                    <img src={val.imgsrc} alt={val.name} />
                                </div>
                                <div className="card_name">
                                    <h1>{val.name}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="city_pack">
                <div className="city_image">
                    <img src={A} alt="delhi" />
                </div>
                <div className="cont">
                    <h1 style={{ fontSize: 55, marginBottom: 25 }}>Delhi</h1>
                    <h1>Amount 30,000 Rs</h1>
                    <h1>7 Days, 6 Night Package</h1>
                    <div className="btn">
                        <Link to="/book">Book</Link>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </>
    )
}
