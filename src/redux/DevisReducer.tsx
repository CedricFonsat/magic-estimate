import { createSlice } from "@reduxjs/toolkit";
import { devisList } from "../data/devis";

const devisSlice = createSlice({
    name: "devis",
    initialState: devisList,
    reducers: {
        addDevis: (state, action) => {
           state.push(action.payload);
        },
        updateDevis: (state, action) => {
            const {id, description, prix, quantite, total} = action.payload;
            const uu = state.find(devis => devis.id == id);
            if (uu) {
                uu.description = description;
                uu.prix = prix;
                uu.quantite = quantite;
                uu.total = total;
            }
        },
        deleteDevis: (state, action) => {
            const {id} = action.payload;
            const uu = state.find(devis => devis.id == id);
            if (uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const {addDevis, updateDevis, deleteDevis} = devisSlice.actions
export default devisSlice.reducer;