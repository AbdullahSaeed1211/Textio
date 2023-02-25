import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
//  { const removeBodyClasses=()=>{
//     document.body.classList.remove('bg-light')
//     document.body.classList.remove('bg-dark')
//     document.body.classList.remove('bg-warning')
//     document.body.classList.remove('bg-danger')
//     document.body.classList.remove('bg-success')
//     document.body.classList.remove('bg-alert')}
  // }
  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#371B58";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar
          title="Textio"
          mode={mode}
          toggleMode={toggleMode}
          key={new Date()}
        />
        <Alert alert={alert} />
       
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm
          showAlert={showAlert}
          heading="Try Textio - word counter, character counter, remove extra spaces"
          mode={mode}
        />}/>
            <Route exact path="/about" element={<About mode={mode} />}> 
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
