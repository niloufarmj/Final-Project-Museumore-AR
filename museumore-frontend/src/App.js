import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/Pages/AboutUs";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Dashboard from "./Components/Pages/Dashboard";
import AddItem from "./Components/Pages/AddItem";
import AdditionalInfo from "./Components/Pages/AdditionalInfo";
import Library from "./Components/Pages/Library";
import EditInfo from "./Components/Pages/EditInfo";
import MuseumInfo from "./Components/Pages/MuseumInfo";
import ItemInfo from "./Components/Pages/ItemInfo";
import i18next from 'i18next';
import './locale.js';


function App() {

  const [lang, setLang] = useState("fa_IR");

  const changeLang = () => {
    i18next.changeLanguage(lang);
    if (lang == "en_US") 
      setLang("fa_IR")
    else setLang("en_US")
    
  }
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/editinfo" element={<EditInfo />} />
        <Route path="/library" element={<Library />} />
        <Route path="/additionalinfo" element={<AdditionalInfo />} />
        <Route path="/iteminfo/:index" element={<ItemInfo />} />
        <Route path="/museuminfo" element={<MuseumInfo />} />
      </Routes>
    </BrowserRouter>
    <div style={{marginTop: "50px"}}>
      <p onClick={changeLang}>{lang}</p>
    </div>
    </>
    

  );
}

export default App;
