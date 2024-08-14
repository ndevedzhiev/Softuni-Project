import { Routes, Route } from "react-router-dom"
import AuthContextProvider from "../contexts/AuthContext.jsx";
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
import Logout from "../Components/logout/Logout.jsx";
import EditCarForm from "../Components/cars/EditCar.jsx";
import PrivateRoutes from "./PrivateRoute.jsx";


export default function Layout() {

  return (
    <AuthContextProvider>
      <>
        <Header />
        <main>
          <Routes>
            
          <Route path="/cars/:carId/edit" element={<EditCarForm />}/>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactUs />} />
           
            <Route path="/partners" element={<Partners />} />
            <Route path="/allcars" element={<AllCars />} />
            <Route path="/cars/:carId/details" element={<Details />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/logout" element={<Logout />} />
            <Route element={<PrivateRoutes />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<Sell/>} path="/sell"/>
       
            </Route>
          </Routes>
        </main>
        <Footer />
      </>
    </AuthContextProvider>
  );
};