import React from 'react';
import "../Booking/Booked.css";

export const Booked = () => {
    return (
        <>
            <div className="parent_booked">
                <h1>Your Booking Details</h1>
                <div className="info">
                    <div className="package_name">
                        <div className="booking_name">
                            <h1>Gaurav</h1>
                            <h1>Status: <span style={{ color: 'green' }}>Booked</span></h1>
                        </div>
                        <div className="booking_place">
                            <h1>Amritsar</h1>
                        </div>
                    </div>
                    <div className="total_members">
                        <p>5 Adults || 0 Child</p>
                    </div>
                    <div className="member_details">
                        <ol>
                            <li>
                                <div>
                                    <p>Gaurav</p>
                                    <p>Age 25Yrs</p>
                                    <p>Male</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
