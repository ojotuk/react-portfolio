import Nav from "./component/Nav/Nav";
import Landing from "./component/Landing";
import Resume from "./component/Routing/Resume";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./component/Routing/About";
import Services from "./component/Routing/Services";
import Contact from "./component/Routing/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="hashes">
          <Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/resume" component={Resume}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/what-i-do" component={Services}></Route>
            <Route component={Landing}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
