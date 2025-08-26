import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  const [count, setCount] = useState(0);

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
