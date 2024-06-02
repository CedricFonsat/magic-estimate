import { create } from "zustand";

// Définir le type pour votre store
type TableHeadStore = {
    head: string[][];
    setHead: (head: string[][]) => void;
  };
  
  // Créer le store
  export const useTableHeadStore = create<TableHeadStore>((set) => ({
    head: [["Description", "Quantité", "Prix", "Total"]],
    setHead: (head) => set({ head }),
  }));