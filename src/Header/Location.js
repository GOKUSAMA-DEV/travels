import React from 'react';
import "../Header/Location.css";

import BestLocation from "../Home/BestLocation";

export const Location = () => {
   return (
        <>

            <div className="location_main">
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


        </>
    )
}
