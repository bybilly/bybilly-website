import './App.css';
import { Router, Link } from "@reach/router";
import Home from './Home';

function App() {
  return (
    <Router>
      <Home path="/" />
      {/* <Contact path="contact" /> */}
    </Router>
  );
}

export default App;
