import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Dummy from "./components/Dummy/Dummy";
import Mib from "./components/Mib/Mib";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Dummy />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/mib">
            <Mib />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
