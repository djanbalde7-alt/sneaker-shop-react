import { usePanier } from "../PanierContext";
import { Link } from "react-router-dom";

function Header() {
  const { panier, total } = usePanier();

  return (
    <header className="border-b">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <Link to="/" className="font-bold text-xl">
          Ma boutique
        </Link>

        <Link
          to="/panier"
          className="text-sm font-medium hover:text-orange-500 transition"
        >
          Panier ({panier.length}) — {total.toFixed(2)}€
        </Link>
      </div>
    </header>
  );
}

export default Header;
