import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Analytics, Calls, Home, Meetings, Settings, Team } from "./pages";
import "./App.css";

import { useStateContext } from "./Context/ContextProvider";

export default function App() {
  const { activeMenu } = useStateContext();
  return (
    <>
      <div className="flex relative ">
        <BrowserRouter>
          {activeMenu ? (
            <div className="w-56 fixed shadow-xl bg-white navbar">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          <div
            className={`bg-[#e9f2ef] min-h-screen  w-full ${
              activeMenu ? " md:ml-56 " : " flex-2"
            }`}
          >
            <div className="fixed md:static bg-slate-100  w-full shadow-lg z-10">
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route path="/calls" element={<Calls />}></Route>
                <Route path="/meetings" element={<Meetings />}></Route>
                <Route path="/analytics" element={<Analytics />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
