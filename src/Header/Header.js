import React from 'react';
import { Link } from 'react-router-dom';
import "../Header/Header.css";

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header_title">
                    <Link to="/"><h1>Sasta Travels</h1></Link>
                </div>
                <div className="header_menu">
                    <Link to="/location">Location</Link>
                    <Link to="/Booking">Booking</Link>
                </div>
            </div>
        </>
    )
}
