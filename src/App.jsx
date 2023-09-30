import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Dress, Shoes, Bag, Beauty, NotFound, Login } from "./pages";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
