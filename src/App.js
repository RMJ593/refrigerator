import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage  from "./pages/MainPage";
import ScrollToTop from "./utils/ScrollToTop";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
