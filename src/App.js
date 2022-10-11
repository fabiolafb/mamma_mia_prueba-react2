import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PizzeriaProvider } from "./ContextPizzeria";

// components
import Navbar from "./components/Navbar";

// views
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import NotFound from "./views/NotFound";
import DescripcionPizza from "./views/DescripcionPizza";
import Footer from "./components/Footer";

export default function App() {
 

  return (
    <div className="App">
      <PizzeriaProvider >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<DescripcionPizza />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PizzeriaProvider>
    </div>
  );
};
