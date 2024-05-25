


import Navbar from "./components/Navbar";
import Events from "./components/Events";
import "./App.css";
import FooterPart from "./components/FooterPart";

 export default function App() {
    return (
    <div>
    <header>
      <Navbar/>
    </header>
      <div className="e">
        <Events/>
        <Events/>
        <Events/>
        <Events/>
      </div>
      <div className="e">
        <Events/>
        <Events/>
        <Events/>
        <Events/>
      </div>
      <div className="e">
        <Events/>
        <Events/>
        <Events/>
        <Events/>
      </div>
      <FooterPart/>
   </div>

 


);
  
}
