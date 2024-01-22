import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypeState } from "../types/Interface";
import { addDevis, deleteDevis } from "../redux/DevisReducer";

export const TableDevis = () => {
  const [description, setDescription] = useState("");
  const [quantite, setQuantite] = useState("");
  const [prix, setPrix] = useState("");
  const [total, setTotal] = useState("");
  const [title, setTitle] = useState("Description");
  const [isWrite, setIsWrite] = useState(false);

  const devis = useSelector((state: TypeState) => state.devis);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteDevis({ id: id }));
  };

  const handleWriteText = () => {
    setIsWrite(!isWrite);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      addDevis({
        id: devis.length > 0 ? devis[devis.length - 1].id + 1 : 1,
        description,
        quantite,
        prix,
        total,
      })
    );
  };

  return (
    <div className="w-full p-24 bg-white">
      <div className="flex">
        <h1 className="text-3xl font-bold mb-4 w-full">
        Bienvenue sur le generateur de devis
        </h1>
      </div>

      <div className="overflow-x-auto">
        <form onSubmit={handleSubmit}>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border-y border-gray-100 bg-gray-50/50 p-2">
                  <input
                    disabled={!isWrite && true}
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    className={`p-2 rounded ${isWrite && "border"} hourly-rate`}
                    value={title}
                  />
                  <button onClick={handleWriteText}>O</button>
                </th>
                <th className="border-y border-gray-100 bg-gray-50/50 p-2">
                  Quantite
                </th>
                <th className="border-y border-gray-100 bg-gray-50/50 p-2">
                  Prix
                </th>
                <th className="border-y border-gray-100 bg-gray-50/50 p-2">
                  Totale
                </th>
                <th className="border-y border-gray-100 bg-gray-50/50 p-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody id="attendees-list">
              {devis.map((devis, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      disabled
                      value={devis.description}
                      className="p-2 rounded bg-white  hourly-rate w-full"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      disabled
                      value={devis.quantite}
                      className="p-2 rounded bg-white  text-center hourly-rate w-full"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      disabled
                      value={devis.prix}
                      className="p-2 rounded bg-white text-center attendees-count w-full"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      disabled
                      value={devis.total}
                      className="p-2 rounded bg-white  text-center total-cost w-full"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="p-2 text-red-600 "
                      onClick={() => handleDelete(devis.id)}
                    >
                      <svg
                        className="w-6 h-6 "
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                      >
                        <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    className="p-2 rounded border hourly-rate w-full"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    className="p-2 rounded border hourly-rate w-full"
                    onChange={(e) => setQuantite(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    className="p-2 rounded border attendees-count w-full"
                    onChange={(e) => setPrix(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    className="p-2 rounded border total-cost w-full"
                    onChange={(e) => setTotal(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="p-2 text-blue-600 ">Ajouter</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};
