"use client";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
