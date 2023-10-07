import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Notification from "./Notification";
import Login from "./Login";
import "./site.css";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/home"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route
          path="/notification"
          element={<Notification cartItems={cartItems} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
