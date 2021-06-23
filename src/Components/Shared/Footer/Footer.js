import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Forum Support" , link: "/"},
        {name: "Help & FAQ" , link: "/"},
        {name: "Contact Us" , link: "/"},
        {name: "Pricing and plans" , link: "/"},
        {name: "Cookies Policy" , link: "/"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},

    ]
    const oralHealth = [
        {name: "Pick up locations" , link: "/"},
        {name: "Terms of Payment" , link: "/"},
        {name: "Privacy Policy" , link: "/"},
        {name: "Where to Find Us" , link: "/"}
    ]
    const services = [
        {name: "Laptop Repair" , link: "/"},
        {name: "Mobile Repair" , link: "/"},
        {name: "Tv Repair" , link: "/"},
        {name: "Cable wearing" , link: "/"},
        {name: "Best Support" , link: "/"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={4} menuTitle="Our Office" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </FooterCol>
                    <FooterCol key={2} menuTitle="Our Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Quick links" menuItems={oralHealth}/>
                    <FooterCol key={1} menuTitle={"Support"} menuItems={noNamed}/>

                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
