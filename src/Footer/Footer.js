import React from "react";
import "../Footer/Footer.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    root: {
        fontSize: 25,
        color: "white",
        border: 2,
        borderRadious: 15,
        "&:hover": {
            color: "grey"    
        }
    }
}
const useStyles = makeStyles(styles);

export const Footer = () => {
    const look = useStyles();
    return (
        <>
            <div className="footer">
                <div className="title">
                    <h1>Sasta Travels</h1>
                </div>
                <div className="follow-us">
                <a href="https://twitter.com/gauravsahu394"><TwitterIcon className={look.root} /></a>
                <a href="https://www.instagram.com/i.am.gaurav.sahu/"><InstagramIcon className={look.root} /></a>
                <a href="https://www.facebook.com/gourav.shau/"><FacebookIcon className={look.root} /></a>
                <a href="https://www.youtube.com/channel/UCzYyFi-DXnpuQrz_wOZKF4w"><YouTubeIcon className={look.root} /></a>
            </div>
            </div>
            
        </>
    )
}
