import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useDevisStore } from "../store/devisStore";
import { useHeaderStore, useTableHeadStore } from "../store/tableHeadStore";

const TableCell = ({
  value,
  className,
}: {
  value: string | number;
  className: string;
}) => (
  <td className="whitespace-nowrap border-e border-neutral-200 px-4 py-2 dark:border-white/10">
    <input
      type="text"
      disabled
      value={value}
      className={`rounded bg-transparent ${className} w-full`}
    />
  </td>
);

const Table = () => {
  const [description, setDescription] = useState("");
  const [quantite, setQuantite] = useState<string>();
  const [prix, setPrix] = useState<string>();
  const [total, setTotal] = useState<string>();
  const [title, setTitle] = useState("Description");
  const [isWrite, setIsWrite] = useState(false);

  const { deleteDevis, setDevis, devis } = useDevisStore();
  const { setHead } = useTableHeadStore();

  const handleDelete = (id: string) => {
    deleteDevis(id);
  };

  const handleWriteText = () => {
    setIsWrite(!isWrite);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (description === "" || prix === "" || quantite === "" || total === "") {
      alert("Veuillez ajouter des elements");
    }else{
    // setHead([title, "Quantité", "Prix", "Total"]);  
    setDevis([
      ...devis,
      {
        id: Math.random().toString(36),
        description,
        prix: prix ? prix : "",
        quantite: quantite ? quantite : "",
        total: total ? total : "",
      },
    ]);

    setDescription("");
    setPrix("");
    setQuantite("");
    setTotal("");
  }

  };


  return (
    <form
      onSubmit={handleSubmit}
      className="w-[100%] flex justify-center items-center"
    >
      <table className="border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
          <tr>
            <th
              scope="col"
              className="border-e border-neutral-200 px-4 py-2 dark:border-white/10"
            >
              <input
                disabled={!isWrite && true}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className={`p-2 rounded ${
                  isWrite && "border"
                } hourly-rate bg-transparent`}
                value={title}
              />
              <button onClick={handleWriteText}>
                <Pencil size={16} />
              </button>
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-4 py-2 dark:border-white/10"
            >
              Quantite
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-4 py-2 dark:border-white/10"
            >
              Prix
            </th>
            <th scope="col" className="px-4 py-2 border-e dark:border-white/10">
              Totale
            </th>
            <th scope="col" className="px-4 py-2 border-e dark:border-white/10">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {devis.map((devis, index) => {

            return (
             <>
             {devis.description && (
               <tr
               key={index}
               className="border-b border-neutral-200 dark:border-white/10"
             >
               <TableCell value={devis.description} className="hourly-rate" />
               <TableCell
                 value={devis.quantite}
                 className="text-center hourly-rate"
               />
               <TableCell
                 value={devis.prix}
                 className="text-center attendees-count"
               />
               <TableCell
                 value={devis.total}
                 className="text-center total-cost"
               />
               <td className="whitespace-nowrap px-4 py-2">
                 <button
                   className="p-2 text-red-600 "
                   onClick={() => handleDelete(devis.id)}
                 >
                   <Trash2 />
                 </button>
               </td>
             </tr>
             )}
             </>
            )
          })}
          <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={description}
                    className="rounded bg-transparent hourly-rate w-full outline-none"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={quantite}
                    className="rounded bg-transparent hourly-rate w-full outline-none"
                    onChange={(e) => setQuantite(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={prix}
                    className="rounded bg-transparent attendees-count w-full outline-none"
                    onChange={(e) => setPrix(e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={total}
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
  );
};

export default Table;
