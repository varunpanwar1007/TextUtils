import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import React,{useState} from 'react';
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const[alert,setAlert] = useState(null);
  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      msg:message
    })
    setTimeout(()=>{
      setAlert(null);
    },3000)
  }
  const[mode,setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('success',' : Dark Mode Has Been Enabled!');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success',' : Light Mode Has Been Enabled!');
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-2">
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
