
import { Background } from './components/Background';
import Effect from "./components/Effect";
import Home from "./pages/Home";
import SteenzyCV from "./pages/CV";
import LastChanceStudio from "./pages/LastChanceStudio";
import MyWorks from "./pages/MyWorks";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Test from "./pages/Test";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/steenzy-cv" element={<SteenzyCV />} />
          <Route path="/last-chance-studio" element={<LastChanceStudio />} />
          <Route path="/my-works" element={<MyWorks />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>

      <Effect />
      <Background />
    </div >
  );
}


export default App;