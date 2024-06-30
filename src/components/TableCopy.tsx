import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useTableRowStore } from "../store/tableRowStore";
import { useTableHeadStore } from "../store/tableHeadStore";

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

const TableCopy = () => {
  const [description, setDescription] = useState("");
  const [quantite, setQuantite] = useState<string>();
  const [prix, setPrix] = useState<string>();
  const [total, setTotal] = useState<string>();

  // useState headDescription, headQuantite, headPrix, headTotal
  const [headDescription, setHeadDescription] = useState("Description");
  const [headQuantite, setHeadQuantite] = useState("Quantité");
  const [headPrix, setHeadPrix] = useState("Prix");
  const [headTotal, setHeadTotal] = useState("Total");

  // useState isHeadD, isHeadQ, isHeadP, isHeadT
  const [isHeadD, setIsHeadD] = useState(false);
  const [isHeadQ, setIsHeadQ] = useState(false);
  const [isHeadP, setIsHeadP] = useState(false);
  const [isHeadT, setIsHeadT] = useState(false);

  const { tableRow, setTableRow, deleteTableRow } = useTableRowStore();
  const { tableHead, setTableHead } = useTableHeadStore();

  const handleDelete = (id: string) => {
    deleteTableRow(id);
  };

  const handleWriteText = (head: string) => {
    if (head === headDescription) {
      setIsHeadD(!isHeadD);
    } else if (head === headQuantite) {
      setIsHeadQ(!isHeadQ);
    } else if (head === headPrix) {
      setIsHeadP(!isHeadP);
    } else if (head === headTotal) {
      setIsHeadT(!isHeadT);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (description === "" || prix === "" || quantite === "" || total === "") {
      alert("Veuillez ajouter des elements");
    }else{
    setTableHead({
      description: headDescription,
      quantite: headQuantite,
      prix: headPrix,
      total: headTotal,
    }); 
    setTableRow([
      ...tableRow,
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
  }};


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
                disabled={!isHeadD && true}
                type="text"
                onChange={(e) => setHeadDescription(e.target.value)}
                className={`p-2 rounded ${
                  isHeadD && "border"
                } hourly-rate bg-transparent`}
                value={headDescription}
              />
              <button onClick={() => handleWriteText(headDescription)}>
                <Pencil size={16} />
              </button>
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-4 py-2 dark:border-white/10"
            >
               <input
                disabled={!isHeadQ && true}
                type="text"
                onChange={(e) => setHeadQuantite(e.target.value)}
                className={`p-2 rounded ${
                  isHeadQ && "border"
                } hourly-rate bg-transparent`}
                value={headQuantite}
              />
              <button onClick={() => handleWriteText(headQuantite)}>
                <Pencil size={16} />
              </button>
            </th>
            <th
              scope="col"
              className="border-e border-neutral-200 px-4 py-2 dark:border-white/10"
            >
               <input
                disabled={!isHeadP && true}
                type="text"
                onChange={(e) => setHeadPrix(e.target.value)}
                className={`p-2 rounded ${
                  isHeadP && "border"
                } hourly-rate bg-transparent`}
                value={headPrix}
              />
              <button onClick={() => handleWriteText(headPrix)}>
                <Pencil size={16} />
              </button>
            </th>
            <th scope="col" className="px-4 py-2 border-e dark:border-white/10">
            <input
                disabled={!isHeadT && true}
                type="text"
                onChange={(e) => setHeadTotal(e.target.value)}
                className={`p-2 rounded ${
                  isHeadT && "border"
                } hourly-rate bg-transparent`}
                value={headTotal}
              />
              <button onClick={() => handleWriteText(headTotal)}>
                <Pencil size={16} />
              </button>
            </th>
            <th scope="col" className="px-4 py-2 border-e dark:border-white/10">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRow.map((devis, index) => {

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

export default TableCopy;
