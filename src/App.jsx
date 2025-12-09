import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import productsData from "./data/products.json";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ItemDetails from "./pages/ItemDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";




function App() {


  const [products, setProducts] = useState(productsData);

  const handleAddProduct = (newProduct) => {
    const newId = products.length > 0
      ? Math.max(...products.map((p) => p.id)) + 1
      : 1;

    const productToAdd = { id: newId, ...newProduct };

    setProducts((prev) => [...prev, productToAdd]);
  };


  const handleDeleteProduct = (idToDelete) => {
    setProducts((prev) => prev.filter((p) => p.id !== idToDelete));
  };


  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <main style={{ padding: "20px", flexGrow: 1 }}>
          <Routes>


            <Route
              path="/"
              element={
                <Dashboard
                  products={products}
                  onAddProduct={handleAddProduct}
                  onDeleteProduct={handleDeleteProduct}
                />
              }
            />


            <Route
              path="/items/:id"
              element={
                <ItemDetails
                  products={products}
                  onUpdateProduct={handleUpdateProduct}
                />
              }
            />


            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;

