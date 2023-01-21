import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Food from './Pages/Food';
import Sleep from './Pages/Sleep';
import Navbar from './components/Navbar';
import Exercise from './Pages/Exercise';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route exact path = "/sleep" element={<Sleep/>}/>
        <Route exact path = "/food" element={<Food/>}/>
        <Route exact path = "/exercise" element={<Exercise/>}/>
        <Route exact path = "/signup" element={<SignUp/>}/>
        <Route exact path = "/signin" element={<SignIn/>}/>
      </Routes>
    </div>
    );
}

export default App;
