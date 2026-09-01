import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { usePanier } from "../PanierContext";

function Produit() {
  const { id } = useParams();
  const { ajouterAuPanier } = usePanier();

  const { data, isLoading, error } = useQuery({
    queryKey: ["produit", id],
    queryFn: async () => {
      const reponse = await fetch(`https://fakestoreapi.com/products/${id}`);
      return reponse.json();
    },
  });

  if (isLoading) return <p className="text-center py-16">Chargement...</p>;
  if (error) return <p className="text-center py-16">Erreur de chargement</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <Link
        to="/"
        className="text-sm text-gray-500 hover:text-gray-900 transition"
      >
        ← Retour aux produits
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
          <img
            src={data.image}
            alt={data.title}
            className="max-h-96 object-contain"
          />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            {data.category}
          </span>

          <h1 className="text-3xl font-bold leading-tight">{data.title}</h1>

          <p className="text-2xl font-bold">{data.price}€</p>

          <p className="text-gray-600 leading-relaxed">{data.description}</p>

          <button
            onClick={() => ajouterAuPanier(data)}
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium mt-4 transition"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Produit;
