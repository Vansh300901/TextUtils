import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState({
    backgroundColor: 'dark',
    darkModeText: 'Enable Dark Mode'
  });

  const toggleDarkMode = () => {
    if (mode.backgroundColor === 'dark') {
      setMode({
        backgroundColor: 'light',
        darkModeText: 'Enable Light Mode'
      })
      document.body.style.backgroundColor = 'black'
    }
    else {
      setMode({
        backgroundColor: 'dark',
        darkModeText: 'Enable Dark Mode'
      })
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <div className="App">
      <NavBar title="TextUtils" mode={mode} toggleDarkMode={toggleDarkMode} />
      <div className="container my-3">
        <TextForm heading="Enter Your Text To Analyze Below" mode={mode} />
      </div>
      {/* <div className="container my-3">
        <About />
      </div> */}
    </div>
  );
}

export default App;
