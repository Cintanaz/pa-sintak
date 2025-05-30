import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutSection from "./components/about-section";
import CartSection from "./components/cart-section";
import ContactsSection from "./components/contacts-section";
import HeroSection from "./components/hero-section";
import HomeSection from "./components/home-section";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeSection />}/> 
          <Route path="/hero" element={<HeroSection />}>
          <Route path="/contacts" element={<ContactsSection />}>
          <Route path="/cart" element={<CartSection />}>
          <Route path="/about" element={<AboutSection />}>
          </Route>
          </Route>
          </Route>
          </Route>
             </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
