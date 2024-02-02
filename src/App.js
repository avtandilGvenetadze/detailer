import "./App.css";
import React, { useState,  } from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";



function App() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  const [page, setPage] = useState("home");
  function scrollToPageDown() {
    window.scrollBy({
      top: 300,
      behavior: "smooth",
    });
  }

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home isChecked={isChecked}/>;
      case "services":
        return <Services isChecked={isChecked}/>;
      case "about":
        return <About isChecked={isChecked}/>;
      case "contact":
        return <Contact isChecked={isChecked}/>;
      default:
        return <Home />;
    }
  };

  

  return (
    <div>
      <header>
        <Toggle isChecked={isChecked } handleCheckboxChange ={handleCheckboxChange}/>
        <div className="cover-image">
          <img
            className="detailer-image"
           
            src={process.env.PUBLIC_URL + "/images/Detailer.jpg"}
        
            alt="Detailer"
          />
        </div>
        <nav>
          <ul>
            <li>
              <button onClick={() => setPage("home")}>{isChecked?"Home":"მთავარი"}</button>
            </li>
          
            <li>
              <button
                onClick={() => {
                  setPage("services");
                  scrollToPageDown();
                }}
              >
            {isChecked?"Services":"სერვისები"}
              </button>
            </li>
            <li>
              <button onClick={() => setPage("about")}>{isChecked?"About":"ჩვენს შესახებ"}</button>
            </li>
            <li>
              <button onClick={() => setPage("contact")}>{isChecked?"Contact":"კონტაქტი"}</button>
            </li>
          </ul>
        </nav>
      </header>
      <main> {renderPage()}</main>

      <Footer />
    </div>
  );
}

export default App;
