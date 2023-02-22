// import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Card from "./components/Card";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <Card />
      </div>
    </>
  );
}

export default App;
