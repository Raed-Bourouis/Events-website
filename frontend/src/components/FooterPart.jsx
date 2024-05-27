
import '../style/FooterPart.css';

import facebook from "../assets/fb.png"
import instagram from "../assets/insta.png"


export default function FooterPart(){
   
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>

            <li> Tunisia, Tunis, 56789</li>
            <li>Phone: (216) 56 984 963</li>
            <li>Email: Festival@gmail.com</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        
{/* 
        <div className="footer-column footer-social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <img className='footerImage' src={facebook} /> </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img className='footerImage' src={instagram} /></a>
        </div> */}

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
      <br />
    </footer>
  );
}



