import { createContext, useContext, useState } from "react";

const PanierContext = createContext();

export function PanierProvider({ children }) {
  const [panier, setPanier] = useState([]);

  function ajouterAuPanier(produit) {
    setPanier([...panier, produit]);
  }

  function viderPanier() {
    setPanier([]);
  }

  const total = panier.reduce((somme, p) => somme + p.price, 0);

  return (
    <PanierContext.Provider
      value={{ panier, ajouterAuPanier, viderPanier, total }}
    >
      {children}
    </PanierContext.Provider>
  );
}

export function usePanier() {
  return useContext(PanierContext);
}
