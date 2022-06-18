import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components"; 
import { Home,Liquidity,Queue,Swap } from "./pages";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="top">
              <Button
                type="button"
                className="text-3xl p-3 hover:drop-shadown-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </Button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">SideBar w-o</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full 
                                    ${activeMenu ? "md:ml-72" : "flex:2"}`}
          >
            <div
              className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar 
                                     w-full "
            >
                 <Sidebar/>
            </div>
                  </div>
                  <div>
                      <Routes>
                       
                          <Route path="/" element={<Home/> } />
                          <Route path="/home" element={<Home/> }/>
                          <Route path="/swap" element={<Swap/>} />
                          <Route path="/liquidity" element={<Liquidity/>} />
                          <Route path="/queue" element={ <Queue/> } />
                      </Routes>
                  </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
