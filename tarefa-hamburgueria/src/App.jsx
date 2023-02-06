import Header from "./components/Header";
import Main from "./components/Main";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import api from "./services/api.js";

function App() {
  const localCurrentSale = localStorage.getItem("@currentSale");
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(
    localCurrentSale ? JSON.parse(localCurrentSale) : []
  );
  const [cartTotal, setCartTotal] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([""]);
  // onMount
  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
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
      <Header setFilteredProducts={setFilteredProducts} />
      <Main
        products={products}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
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

// const warning = () => {
//   toast.warning("Aviso");
// };
// const info = () => {
//   toast.info("Informação");
// };
// const success = () => {
//   toast.success("Sucesso");
// };
// const error = () => {
//   toast.error("Erro");
// };
