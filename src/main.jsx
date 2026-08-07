import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Home from "./Home";
import SignIn from "./SignIn";
import SignIn2 from "./SignIn2";
import App from "./App";
import Herosection from "./Herosection";
import Herosection2 from "./Herosection2";
import CtaSection from "./CtaSection";
import CtaSection2 from "./CtaSection2";
import Bentogrids from "./Bentogrids";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin2" element={<SignIn2 />} />

        <Route path="/hero" element={<Herosection />} />
        <Route path="/hero2" element={<Herosection2 />} />

        <Route path="/cta" element={<CtaSection />} />
        <Route path="/cta2" element={<CtaSection2 />} />

        <Route path="/bentogrids" element={<Bentogrids />} />

        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
