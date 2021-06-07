import React from 'react';
import "../Booking/Booking.css";
import A from "../Booking/card.jpg";


export const Booking = () => {
    return (
        <div className="parent_booking">
            <div className="inner_border">
                <div className="img_container">
                    <img src={A} alt="back" />
                </div>
                <div className="form">
                    <div className="booking_title">
                        <h1>Booking Details</h1>
                    </div>
                    <div className="form_details">
                        <form>
                            <label>
                                Name:
                                <input type="text" name="name" />
                            </label>
                            <br></br>
                            <label>
                                Peoples:
                                <input type="text" name="name" />
                            </label>
                            <br></br>
                            <label>
                                Date:
                                <input type="text" name="name" />
                            </label>
                            <br></br>
                            <label>
                                Packages:
                                <input type="text" name="name" />
                            </label>
                            <br></br>
                            <label>
                                Email:
                                <input type="text" name="name" />
                            </label>
                            <br></br>
                        </form>
                    </div>
                    <div className="sumbit_btn">
                        {/* <input type="submit" value="Submit" /> */}
                    </div>
                    <div className="via_social">

                    </div>
                </div>
            </div>
        </div>
    )
}
