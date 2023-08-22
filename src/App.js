import './App.css';
import About from './components/About';
import {User, Name} from './components/User.js'
import Home from './components/User.js';

const App =() => {
  return (
    <>
      <Home></Home>
      <h1>I like coding!</h1>
      <Name/>
      <User/>
      <About/>
    </>
  )
}




export default App;
