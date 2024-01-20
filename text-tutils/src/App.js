import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextUtilForm from './Component/TextUtilForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Alert from './Component/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const removeBody=()=>
  {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    console.log(cls)
    removeBody();
    document.body.classList.add('bg-'+cls);

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled!", "success")
      // document.title="TextUtils - Dark Mode"
      // setTimeout(() => {
      //   document.title="wirus attact !!"
      // }, 2100);
      // setTimeout(() => {
      //   document.title="Close the site"
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'whitesmoke';
      showAlert("Light Mode Enabled!", "success")
      // document.title="TextUtils - Light Mode"
      
    }


  }

  return (

    <Router>

      <Navbar title={"text-utils"} Home={"Home"} mode={mode} toggleMode={toggleMode} About={"About"} Text={"Text"} />
      <Alert alert={alert} />
      <Routes>


        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/home" element={<TextUtilForm mode={mode} showAlert={showAlert} title={'Try TextUtils - Word counter | Character counter | lowercase to uppercase | Uppercase to lowercase | Speaking Character | Remove extra spaces | Many More'} />} />


      </Routes>


    </Router>




  );
}

export default App;
