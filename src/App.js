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

  // const removeBodyClass = () =>{
  //   document.body.classList.remove('bg-light'); 
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  // }
  // const check = (c) =>{
  //   if(c === 'dark'){
  //     return 'Dark';
  //   }else if(c === 'danger'){
  //     return 'Red';
  //   }else if(c === 'light'){
  //     return 'Light';
  //   }else if(c === 'success'){
  //     return 'Green';
  //   }else if(c === 'warning'){
  //     return 'Yellow';
  //   }else if(c === 'primary'){
  //     return 'Blue';
  //   }
  // }

  const toggleMode = (cls) => {
    // removeBodyClass();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
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
      //   setInterval(() => {
      //      document.title = 'TextUtils: Light Mode';
      //   }, 2000);
      //   setInterval(() => {
      //     document.title = 'new message';
      //  }, 1500);
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
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to convert below :" mode={mode} />} />
            <Route exact path="about" element={<About/>} />
          </Routes>
        </div>
      </Router>

      
    {/*  so use exact path = " "
    /users --> components 1
    /users/home --> components 2 */}


      {/* Deprecated as in v6 switch is replaced with routes
       <Routes>
          <Route path="/about">
            <About/>
          </Route>
            <Route path="/">
              <Textform showAlert={showAlert} heading="Enter the text to convert below :" mode={mode} />
            </Route>
          </Routes>  
        </div> 
      </Router>  */}
    </>


    // {/* <Navbar/>  only run for default prop */}
    //80-90% HTML EXCEPT RESERVED KEYWORDS
    // ONLY ONE ELEMENT RETURN IN REACT JSX EX: ONLY ONE NAV OR ONLY ONE DIV
  );
}

export default App;