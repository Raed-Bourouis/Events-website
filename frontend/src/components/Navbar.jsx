
import { Link } from "react-router-dom";

import "../style/Navbar.css";
export default function Navbar(){
    return (
        <header>
            <img src="frontend\image\téléchargement.png" alt="error"/>
        <div className="container">

            <div className="social_media">
                <button className="button">
                    <img src=".\image\fb.png" alt="error"/> 
                    <a href = "https://www.facebook.com/"></a> 
                </button> 
                <button className="button">
                <img src="imge\instajpg" alt="error"/> 
                    <a href = "https://www.facebook.com/"></a> 
                </button>
                <button className="button">
                <img src="" alt="error"/> 
                    <a href = "https://www.facebook.com/"></a> 
                </button>
            </div>
            
            <input type ="text"placeholder="search event " className="search"></input>
            <div className="signing">
                <Link to={"/signin"}><button className="button_sign">Sign-in</button></Link>
                
               
            </div>
        


        </div>
        </header>
    );
}