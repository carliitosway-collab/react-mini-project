import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar fija a la izquierda */}
      <Sidebar />

      {/* Zona principal: Navbar + contenido + Footer */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />

        <main style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
