import "./App.css";
import Login from "./Login";
import MainApp from "./MainApp";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Error from "./Components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/mainapp" exact component={MainApp} />
            <Route path="/mainapp/rooms/:roomId" exact component={MainApp} />
            <Route path="/mainapp/chat/:chatId" exact component={MainApp} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
