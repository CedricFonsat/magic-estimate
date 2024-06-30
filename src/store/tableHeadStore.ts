import { create } from "zustand";

// Définition de l'interface TableHead pour décrire la structure de l'en-tête du tableau
interface TableHead {
  description: string;
  prix: string;
  quantite: string;
  total: string;
}

// Définition de l'interface TableHeadState pour décrire l'état et les actions disponibles dans le store
interface TableHeadState {
  tableHead: TableHead;
  setTableHead: (tableHead: TableHead) => void;
}

// Création du store avec Zustand
export const useTableHeadStore = create<TableHeadState>((set) => ({
  // Initialisation de l'état tableHead avec des valeurs par défaut
  tableHead: {
    description: "Description",
    prix: "Prix",
    quantite: "Quantite",
    total: "Total",
  },
  // Définition de l'action setTableHead pour mettre à jour l'état de tableHead
  setTableHead: (tableHead) => set({ tableHead }),
}));
