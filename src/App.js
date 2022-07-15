import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
// import About from "./Components/About";
import Alert from "./Components/Alert";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Text Editor dark Mode";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(31, 69, 90)";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Text Editor light Mode";
    }

    // setTimeout(() => {
    //   document.title = "Text Editor light Mode";
    // }, 2500);

    // setTimeout(() => {
    //   document.title = "Installing Amazon";
    // }, 3500);
  };
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type,
      },
      setTimeout(() => {
        setalert(null);
      }, 2000)
    );
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}></Route> */}
        {/* <Route */}
        {/* exact path="/home" element=
        { */}
        <Textform
          showAlert={showAlert}
          heading="Enter your text to Analyse below"
          mode={mode}
        />
        {/* } */}
        {/* ></Route> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
