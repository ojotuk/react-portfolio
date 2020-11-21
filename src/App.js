import Nav from "./component/Nav/Nav";
import Landing from "./component/Landing";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import About from "./component/Routing/About";
import Resume from "./component/Routing/Resume";

import "./App.css";
import { useEffect } from "react";

function App() {
  const history = useHistory();

  console.log("listen");

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="hashes">
          <Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/resume" component={Resume}></Route>
            <Route component={Landing}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
