import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import { authContext } from "../contexts/authContext.js";

import Header from "../Components/header/Header.jsx";
import Footer from "../Components/footer/Footer.jsx";
import LoginPage from "../Components/login/LoginPage.jsx";
import RegisterPage from "../Components/register/RegisterPage.jsx";
import ContactUs from "../Components/contactUs/ContactUs.jsx";
import About from "../Components/about/About.jsx";
import Home from "../Components/home/Home.jsx"
import Sell from "../Components/sell/Sell.jsx";
import Partners from "../Components/partners/Partners.jsx";
import Details from "../Components/cars/Details.jsx";
import NotFound from "../Components/error pages/NotFound.jsx";
import AllCars from "../Components/cars/AllCars.jsx";


export default function Layout () {
const [authState, seAuthState] = useState({})

const changeAuthState = (state) => {
  localStorage.setItem('accessToken', state.accessToken)
  seAuthState(state)
}

const contextData = {
  userId: authState._id,
  email: authState.email,
  accessToken: authState.accessToken,
  isAuthenticated: !!authState.email,
  changeAuthState
}
return (
  <authContext.Provider value={contextData}>
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
              <Route path="/allcars" element={<AllCars />}/>
              <Route path="/cars/:carId/details" element={<Details />}/>
              <Route path="/details" element={<Details />}/>
              <Route path="*" element={<NotFound />}/>
         </Routes>
    </main>
     <Footer />
      </>
  </authContext.Provider>
  );
};