import LoginPage from "./components/LoginPage";
import EventsList from "./components/EventsList";
import HomePage from "./components/HomePage";
import PageEventClient from "./components/page2client";
import UpdateEvent from "./components/UpdateEvent";
import { useSearchParams } from "react-router-dom";
import FooterPart from "./components/FooterPart";
import UsersList from "./components/UsersList";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  let [Routing, setRouting]=useState(<PageEventClient/>)
  const [searchParams] = useSearchParams();
  let [refresh, setRefresh]=useState(false)


  

  function ReRender(){

    let currentUserId = searchParams.has("userId") ? searchParams.get("userId") : "";
    
  searchParams.has("userId")? setRouting(<PageEventClient/>): setRouting(<LoginPage/>)
  console.log(Routing)
  
  }

  useEffect(()=>ReRender(),[refresh])

  let currentUserId = searchParams.has("userId") ? searchParams.get("userId") : "";
  console.log(currentUserId)

  return (
    <div>
      <Navbar />
      <div id="middleContent">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path={"/event/:id"} element={Routing}></Route>
          <Route path="/signin" element={<LoginPage />}></Route>
          <Route path="/events" element={<EventsList />}></Route>
          <Route path="/events/edit/:id" element={<UpdateEvent />}></Route>

          <Route path="/users" element={<UsersList />}></Route>
        </Routes>
      </div>
      <FooterPart />
    </div>
  );
}
