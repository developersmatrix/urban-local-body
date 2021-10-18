import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dummy from "./components/Dummy/Dummy";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Dummy />
      <Sidebar />

      <p>ಪಟ್ಟಣ ಪಂಚಾಯಿತಿ ವಿರಾಜಪೇಟೆ </p>
    </div>
  );
};

export default App;
