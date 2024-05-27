import LoginPage from "./components/LoginPage";
import EventsList from "./components/EventsList";
import HomePage from "./components/HomePage";
import FooterPart from "./components/FooterPart";
import UsersList from "./components/UsersList";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <div id="middleContent">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signin" element={<LoginPage />}></Route>
        <Route path="/events" element={<EventsList />}></Route>
        <Route path="/users" element={<UsersList />}></Route>
      </Routes>
      </div>
      <FooterPart />
    </div>
  );
}
