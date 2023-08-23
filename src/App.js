import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterList from "./rick-and-morty-app/components/CharacterList";
import CharacterDetail from "./rick-and-morty-app/components/CharacterDetail";
import "./index.css";

const AppCha = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<CharacterList />} />
        <Route path="/character/:characterId" element={<CharacterDetail />} />
    </Routes>
    </BrowserRouter>
  );
};

export default AppCha;
