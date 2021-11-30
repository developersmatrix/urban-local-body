import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Dummy from "./components/Dummy/Dummy";
import Mib from "./components/Mib/Mib";
import CollectionUpdate from "./components/UpdationComponents/CollectionUpdate/CollectionUpdate";

import { ptax } from "./data";

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
        <CollectionUpdate data={ptax} />
      </div>
    </Router>
  );
};

export default App;
