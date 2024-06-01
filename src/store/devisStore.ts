import { create } from "zustand";

type Devis = {
    id: string;
    description: string;
    prix: string;
    quantite: string;
    total: string;
}

type DevisStore = {
    devis: Devis[]; // Update the type to Devis[]
    setDevis: (devis: Devis[]) => void; // Update the type to Devis[]
    deleteDevis: (id: string) => void;
};

export const useDevisStore = create<DevisStore>((set) => ({
        devis: [],
        setDevis: (devis: Devis[]) => set({ devis }),
        deleteDevis: (id: string) => set((state) => ({
            devis: state.devis.filter((devis) => devis.id !== id),
        })),
}));