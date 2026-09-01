import { useQuery } from "@tanstack/react-query";
import Carte from "../components/Carte";
import { useState } from "react";

function Accueil() {
  const [texte, setTexte] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["produits"],
    queryFn: async () => {
      const reponse = await fetch("https://fakestoreapi.com/products");
      return reponse.json();
    },
  });

  if (isLoading) return <p className="text-center py-16">Chargement...</p>;
  if (error) return <p className="text-center py-16">Erreur de chargement</p>;

  const resultats = data.filter((p) =>
    p.title.toLowerCase().includes(texte.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <input
        className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md mb-8"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Rechercher un produit"
      />

      {resultats.length === 0 && (
        <p className="text-gray-500 py-8">Aucun produit trouvé</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {resultats.map((p) => (
          <Carte key={p.id} produit={p} />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
