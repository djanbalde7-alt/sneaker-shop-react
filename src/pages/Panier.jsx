import { usePanier } from "../PanierContext";
import { Link } from "react-router-dom";

function Panier() {
  const { panier, total, viderPanier } = usePanier();

  if (panier.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-xl text-gray-500 mb-6">Votre panier est vide</p>
        <Link
          to="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition"
        >
          Voir les produits
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Votre panier</h1>

      <div className="flex flex-col gap-4">
        {panier.map((produit, index) => (
          <article
            key={index}
            className="flex gap-4 items-center border border-gray-200 rounded-lg p-4"
          >
            <div className="bg-gray-50 rounded p-2 shrink-0">
              <img
                src={produit.image}
                alt={produit.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-medium line-clamp-1">{produit.title}</h3>
              <p className="text-sm text-gray-500">{produit.category}</p>
            </div>

            <p className="font-bold shrink-0">{produit.price}€</p>
          </article>
        ))}
      </div>

      <div className="border-t mt-8 pt-6 flex justify-between items-center">
        <p className="text-xl font-bold">Total : {total.toFixed(2)}€</p>
        <button
          onClick={viderPanier}
          className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
        >
          Vider le panier
        </button>
      </div>
    </div>
  );
}

export default Panier;
