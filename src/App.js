import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import { AppProvider } from "./context/context";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
