import { Link } from "react-router-dom";
import { usePanier } from "../PanierContext";

function Carte({ produit }) {
  const { ajouterAuPanier } = usePanier();

  return (
    <article className="border border-gray-200 rounded-lg p-4 flex flex-col gap-3 h-full hover:shadow-lg transition">
      <Link to={`/produit/${produit.id}`} className="flex flex-col gap-3">
        <div className="bg-gray-50 rounded p-4 flex items-center justify-center">
          <img
            src={produit.image}
            alt={produit.title}
            className="h-40 object-contain"
          />
        </div>
        <h3 className="font-medium line-clamp-2">{produit.title}</h3>
        <p className="font-bold">{produit.price}€</p>
      </Link>

      <button
        onClick={() => ajouterAuPanier(produit)}
        className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg mt-auto transition"
      >
        Ajouter au panier
      </button>
    </article>
  );
}

export default Carte;
