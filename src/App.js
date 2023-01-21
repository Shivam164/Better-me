import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Food from './Pages/Food';
import Sleep from './Pages/Sleep';

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <Food/>
      <Sleep/>
    </div>
  );
}

export default App;
