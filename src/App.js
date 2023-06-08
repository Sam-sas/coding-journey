import "./App.css";
import handleSubmit from "./firebase/firebase_handlers/handlers";
import { useRef } from "react";
import Homepage from "./pages/Homepage";
import GetStarted from "./pages/GetStarted";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  // const dataRef = useRef();

  // const submithandler = (e) => {
  //   e.preventDefault();
  //   handleSubmit(dataRef.current.value);
  //   dataRef.current.value = "";
  // };

  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/get-started">Get Started</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
