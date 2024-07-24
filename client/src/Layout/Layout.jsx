import Latest from "../Components/Latest.jsx";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import SearchBox from "../Components/SearchBox.jsx";
import Register from "../Components/Register/Register.jsx"



const Layout = () => {

    return (
      <>
      <Header />
      <SearchBox />
        <main>
        <Hero />
        <Latest />
        </main>
        <Footer />
      </>
    );
  };
  
  export default Layout;