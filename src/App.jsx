import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import MenuPage from './pages/Menu/MenuPage';
import About from './pages/About/About';
import Offers from './pages/Offers/Offers';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;