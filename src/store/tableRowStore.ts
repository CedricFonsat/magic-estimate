import { create } from "zustand";

interface TableRow {
  id: string;
  description: string;
  prix: string;
  quantite: string;
  total: string;
}

interface TableRowState {
  tableRow: TableRow[];
  setTableRow: (tableRow: TableRow[]) => void;
  deleteTableRow: (id: string) => void;
}

export const useTableRowStore = create<TableRowState>((set, get) => ({
  tableRow: [{
    id: Math.random().toString(36),
    description: "",
    prix: "",
    quantite: "",
    total: "",
  }],
  setTableRow: (tableRow) => set({ tableRow }),
  deleteTableRow: (id) => set({ tableRow: get().tableRow.filter((row) => row.id !== id) }),
}));
