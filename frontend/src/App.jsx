import LoginPage from "./components/LoginPage";
import EventsList from "./components/EventsList";
import UsersList from "./components/UsersList";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/events" element={<EventsList />}></Route>
      <Route path="/users" element={<UsersList />}></Route>
    </Routes>
  );
}
