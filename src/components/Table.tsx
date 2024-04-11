import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypeState } from "../types/Interface";
import { addDevis, deleteDevis } from "../redux/DevisReducer";
import { Pencil, Trash2 } from "lucide-react";

const Table = () => {
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
        <form onSubmit={handleSubmit} className="w-[100%] flex justify-center items-center">
        <table
          className="border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
          <thead
            className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th
                scope="col"
                className="border-e border-neutral-200 px-4 py-2 dark:border-white/10">
                <input
                    disabled={!isWrite && true}
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    className={`p-2 rounded ${isWrite && "border"} hourly-rate bg-transparent`}
                    value={title}
                  />
                  <button onClick={handleWriteText}>
                  <Pencil size={16} />
                  </button>
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-4 py-2 dark:border-white/10">
                Quantite
              </th>
              <th
                scope="col"
                className="border-e border-neutral-200 px-4 py-2 dark:border-white/10">
                Prix
              </th>
              <th scope="col" className="px-4 py-2 border-e dark:border-white/10">Totale</th>
              <th scope="col" className="px-4 py-2 border-e dark:border-white/10">Action</th>
            </tr>
          </thead>
          <tbody>
          {devis.map((devis, index) => (
            <tr key={index} className="border-b border-neutral-200 dark:border-white/10">
            <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-2 dark:border-white/10">
              <input
                      type="text"
                      disabled
                      value={devis.description}
                      className="rounded bg-transparent hourly-rate w-full"
                    />
              </td>
              <td
                className="whitespace-nowrap border-e border-neutral-200 px-4 py-2 dark:border-white/10">
                <input
                      type="text"
                      disabled
                      value={devis.quantite}
                      className="rounded bg-transparent text-center hourly-rate w-full"
                    />
              </td>
              <td
                className="whitespace-nowrap border-e border-neutral-200 px-4 py-2 dark:border-white/10">
                <input
                      type="text"
                      disabled
                      value={devis.prix}
                      className="rounded bg-transparent text-center attendees-count w-full"
                    />
              </td>
              <td
                className="whitespace-nowrap border-e border-neutral-200 px-4 py-2 dark:border-white/10">
                <input
                      type="text"
                      disabled
                      value={devis.total}
                      className="rounded bg-transparent text-center total-cost w-full"
                    />
              </td>
              <td className="whitespace-nowrap px-4 py-2">
              <button
                      className="p-2 text-red-600 "
                      onClick={() => handleDelete(devis.id)}
                    >
                     <Trash2 />
                    </button>
              </td>
            </tr>
              ))}
               <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    className="rounded bg-transparent hourly-rate w-full outline-none"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    className="rounded bg-transparent hourly-rate w-full outline-none"
                    onChange={(e) => setQuantite(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    className="rounded bg-transparent attendees-count w-full outline-none"
                    onChange={(e) => setPrix(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    className="rounded bg-transparent total-cost w-full outline-none"
                    onChange={(e) => setTotal(e.target.value)}
                  />
                </td>
                <td className=" px-4 py-2 text-center">
                  <button className="p-2 text-blue-600 ">Ajouter</button>
                </td>
              </tr>
          </tbody>
        </table>
        </form>
    )
  }
  
  export default Table