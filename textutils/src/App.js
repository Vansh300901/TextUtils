import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <NavBar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter Your Text To Analyze Below" />
      </div>
    </div>
  );
}

export default App;
