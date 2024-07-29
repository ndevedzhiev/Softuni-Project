import { Routes, Route } from "react-router-dom"
import Header from "../Components/header/HeaderGuest.jsx";
import Footer from "../Components/footer/Footer.jsx";
import LoginPage from "../Components/login/LoginPage.jsx";
import RegisterPage from "../Components/register/RegisterPage.jsx";
import BestCars from "../Components/bestCars/AllCars.jsx";
import ContactUs from "../Components/contactUs/ContactUs.jsx";
import About from "../Components/About.jsx";
import Home from "../Components/home/Home.jsx"
import Sell from "../Components/Sell.jsx";
import Partners from "../Components/Partners.jsx";
import Details from "../Components/Details.jsx";
import NotFound from "../Components/NotFound.jsx";


export default function Layout () {

return (
      <>
    <Header />
    <main>
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
    </main>
     <Footer />
      </>
  );
};