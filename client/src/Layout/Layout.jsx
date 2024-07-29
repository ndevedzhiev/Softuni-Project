import { Routes, Route } from "react-router-dom"
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import LoginPage from "../Components/LoginPage.jsx";
import RegisterPage from "../Components/RegisterPage.jsx";
import BestCars from "../Components/BestCars.jsx";
import ContactUs from "../Components/ConstactUs.jsx";
import About from "../Components/About.jsx";
import Home from "../Components/Home.jsx"
import Sell from "../Components/Sell.jsx";
import Partners from "../Components/Partners.jsx";
import Details from "../Components/Details.jsx";
import NotFound from "../Components/NotFound.jsx";


export default function Layout () {

return (
      <>
    <Header />
     <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="/sell" element={<Sell />}/>
          <Route path="/partners" element={<Partners />}/>
          <Route path="/bestcars" element={<BestCars />}/>
          <Route path="/details" element={<Details />}/>
          <Route path="*" element={<NotFound />}/>
         </Routes>
     <Footer />
      </>
  );
};