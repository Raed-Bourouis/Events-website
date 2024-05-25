

import "./Navbar.css";
export default function Navbar(){
    return (
        <header>
        <div className="container">

            <div className="social_media">
                <button className="button">
                    <img src="..\image\fb.png" alt="error"/> 
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
                <button className="button_sign">Sign-in</button>
                <button className="button_sign">Sign-up</button>
                <button className="button_sign">Shop_Now</button>
            </div>
        


        </div>
        </header>
    );
}