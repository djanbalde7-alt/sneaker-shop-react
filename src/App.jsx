import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Produit from "./pages/Produit";
import Panier from "./pages/Panier";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produit/:id" element={<Produit />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </>
  );
}

export default App;
