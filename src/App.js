import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;