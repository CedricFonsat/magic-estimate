import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import DevisComponent from "./components/DevisComponent";
import { TypeState } from "./types/Interface";
import { addDevis, deleteDevis } from "./redux/DevisReducer";
import { useState } from "react";

function App() {
  const [description, setDescription] = useState("");
  const [quantite, setQuantite] = useState("");
  const [prix, setPrix] = useState("");
  const [total, setTotal] = useState("");
  const devis = useSelector((state: TypeState) => state.devis);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteDevis({ id: id }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      addDevis({
        id: devis[devis.length - 1].id + 1,
        description,
        quantite,
        prix,
        total,
      })
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Bienvenue sur le generateur de devis sans style css version
      </h1>
      <DevisComponent />
      <table className="table-auto">
        <thead>
          <tr className="bg-gray-600">
            <th>Description</th>
            <th>Quantité</th>
            <th>Prix</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {devis.map((devis, index) => (
            <tr key={index}>
              <td>{devis.description}</td>
              <td>{devis.quantite}</td>
              <td>{devis.prix}</td>
              <td>{devis.total}</td>
              <td>
                <button onClick={() => handleDelete(devis.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit} className="mt-10">
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="quantite"
          placeholder="quantite"
          onChange={(e) => setQuantite(e.target.value)}
        />
        <input
          type="number"
          name="prix"
          placeholder="prix"
          onChange={(e) => setPrix(e.target.value)}
        />
        <input
          type="number"
          name="total"
          placeholder="total"
          onChange={(e) => setTotal(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
