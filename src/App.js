import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import First from './First';
import Shop from './Shop';
import Coupon from './Coupon';
import Blog from "./Blog";
import Contact from "./Contact";
import CartContext from "./CartContext";
import Favrite from "./Favrite";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/coupons" element={<Coupon />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favrite" element={<Favrite />} />
          <Route path="/cartcontext" element={<CartContext />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;