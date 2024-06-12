import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState({
    backgroundColor: 'dark',
    darkModeText: 'Enable Dark Mode'
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleDarkMode = () => {
    if (mode.backgroundColor === 'dark') {
      setMode({
        backgroundColor: 'light',
        darkModeText: 'Enable Light Mode'
      })
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled", 'success')
    }
    else {
      setMode({
        backgroundColor: 'dark',
        darkModeText: 'Enable Dark Mode'
      })
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", 'success')
    }
  }
  return (
    <div className="App">
      <NavBar title="TextUtils" mode={mode} toggleDarkMode={toggleDarkMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Your Text To Analyze Below" mode={mode} showAlert={showAlert} />
      </div>
      {/* <div className="container my-3">
        <About />
      </div> */}
    </div>
  );
}

export default App;
