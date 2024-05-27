import { Link } from "react-router-dom";
import facebook from "../assets/fb.png";
import instagram from "../assets/insta.png";
import festival from "../assets/festival.png";
import Input from "@mui/joy/Input"
import Button from "@mui/joy/Button"


import "../style/Navbar.css";
export default function Navbar() {
  return (
    <header>
        <div className="social_media">
          <button className="button">
            <img src={facebook} className="socials" alt="error" />
            <a href="https://www.facebook.com/"></a>
          </button>
          <button className="button">
            <img src={instagram} className="socials" alt="error" />
            <a href="https://www.facebook.com/"></a>
          </button>
        </div>

        <img id="Logo" src={festival} alt="error" />

        <Input
          type="text"
          placeholder="search event "
          className="search"
        ></Input>
        <div className="signing">
          <Link to={"/signin"}>
            <Button className="button_sign">Sign-in</Button>
          </Link>
        </div>
      
    </header>
  );
}
