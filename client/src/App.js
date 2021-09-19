import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <h1>MERN stack Template</h1>
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
