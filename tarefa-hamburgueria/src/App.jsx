import Header from "./components/Header";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import api from "./services/api.js";
import StyledApp from "./styles/App.js";

function App() {
  const localCurrentSale = localStorage.getItem("@currentSale");
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(
    localCurrentSale ? JSON.parse(localCurrentSale) : []
  );
  const [filteredProducts, setFilteredProducts] = useState("");
  const [search, setSearch] = useState("");
  const [newFilterProducts, setNewFilterProducts] = useState([]);
  // onMount
  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await api.get("products");

        setProducts(response.data);
        setNewFilterProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProducts();
  }, []);

  // on upDate
  useEffect(() => {
    localStorage.setItem("@currentSale", JSON.stringify(currentSale));
  }, [currentSale]);

  return (
    <div className="App">
      <Header
        setNewFilterProducts={setNewFilterProducts}
        search={search}
        products={products}
        setSearch={setSearch}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      {search && (
        <StyledApp className="box_searched">
          <p>
            Resultados para: <span>{search}</span>
          </p>
          <button
            onClick={() => {
              setNewFilterProducts(products);
              setSearch("");
            }}
          >
            Limpar Busca
          </button>
        </StyledApp>
      )}
      <Main
        newFilterProducts={newFilterProducts}
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
      />

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
