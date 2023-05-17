// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" abouttext="About Us"/>
      {/* <div className="container">
        <About/>
      </div> */}
      <div className="container">
        <TextForm heading="Enter Text to Convert"/>
      </div>
    </>
  );
}

export default App;
