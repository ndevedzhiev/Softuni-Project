import { Routes, Route } from "react-router-dom"

import Header from "../Components/header/HeaderGuest.jsx";
import Footer from "../Components/footer/Footer.jsx";
import LoginPage from "../Components/login/LoginPage.jsx";
import RegisterPage from "../Components/register/RegisterPage.jsx";
import ContactUs from "../Components/contactUs/ContactUs.jsx";
import About from "../Components/About.jsx";
import Home from "../Components/home/Home.jsx"
import Sell from "../Components/Sell.jsx";
import Partners from "../Components/Partners.jsx";
import Details from "../Components/cars/Details.jsx";
import NotFound from "../Components/NotFound.jsx";
import AllCars from "../Components/cars/AllCars.jsx";
import { useState } from "react";
import { authContext } from "../contexts/authContext.js";

export default function Layout () {
const [authState, seAuthState] = useState({})

const changeAuthState = (state) => {
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