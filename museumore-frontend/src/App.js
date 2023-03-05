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
import LibraryItemInfo from "./Components/Pages/LibraryItemInfo";

import './locale.js';
import EditItem from "./Components/Pages/EditItem";


function App() {

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
        <Route path="/libraryiteminfo/:index" element={<LibraryItemInfo />} />
        <Route path="/editItem" element={<EditItem />} />
        <Route path="/additionalinfo" element={<AdditionalInfo />} />
        <Route path="/iteminfo/:index" element={<ItemInfo />} />
        <Route path="/museuminfo" element={<MuseumInfo />} />
      </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
