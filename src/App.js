import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// let name = "somnath";
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
   const toggleMode = (cls) => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
      showAlert(`Dark mode enabled.`, "success")
      document.title = 'TextUtils: Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert(`Light mode enabled.`, "success")
  
    }
  }
  return (
    //JSX -> HTML MUKHAUTA PEHNA H JS KA
    <>
      {/* <h1>hello {name}</h1> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About " />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="TextUtils: Word/Character Counter, UPPERCASE/LOWERCASE, Remove extra space, etc :" mode={mode} />} />
            <Route exact path="about" element={<About/>} />
          </Routes>
        </div>
      </Router>
    </>


    // {/* <Navbar/>  only run for default prop */}
    //80-90% HTML EXCEPT RESERVED KEYWORDS
    // ONLY ONE ELEMENT RETURN IN REACT JSX EX: ONLY ONE NAV OR ONLY ONE DIV
  );
}

export default App;
