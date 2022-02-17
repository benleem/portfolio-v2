import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from "./components/header/Header";

function App() {
  const location = useLocation().pathname;

  return (
    <div className="App">
      <Header location={location}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;