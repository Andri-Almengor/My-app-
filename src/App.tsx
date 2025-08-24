import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </div>
  );
}

export default App;
