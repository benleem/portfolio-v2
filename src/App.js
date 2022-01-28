import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from "./components/Header";

function App() {
  const location = useLocation().pathname;

  return (
    <div className="App" onKeyDown={(e) => (console.log(e))}>
      <Header location={location}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;