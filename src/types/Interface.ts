export interface DevisState {
   // items: string[];
    id: number,
    description: string,
    quantite: number, 
    prix: number,
    total: number
  }
  
export interface TypeState{
     devis: DevisState[];
  }