import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./screens/Home";
import SeeAllProduct from "./screens/SeeAllProduct";
import { useProduct } from "./hooks/useProduct";

const App = () => {
  const { state } = useProduct();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllProduct" element={<SeeAllProduct state={state} />} />
      </Routes>
    </Router>
  );
};

export default App;
