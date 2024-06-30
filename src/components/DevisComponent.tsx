import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logo.png";
import { useTableRowStore } from "../store/tableRowStore";
import { useTableHeadStore } from "../store/tableHeadStore";

const DevisComponent: React.FC = () => {
  const { tableRow } = useTableRowStore();
  const { tableHead } = useTableHeadStore();

  const valeursDevisList = tableRow
    .filter((devis) => devis.description) // Filtrer les devis qui ont une description
    .map(({ id, ...rest }) => Object.values(rest));

  const generatePDF = () => {
    if (tableRow.length === 0) {
      alert("Veuillez ajouter un devis");
    } else {
      const doc = new jsPDF();

      doc.setFontSize(28);
      doc.text("Devis #1234", 125, 25);
      doc.addImage(logo, "PNG", 10, 15, 50, 15);

      doc.setFontSize(12);
      doc.text("Client", 15, 40);
      doc.text("Rita Marnier", 15, 45);
      doc.text("12, rue de la Paix, 75012 Paris", 15, 50);
      doc.text("06 78 78 78 78", 15, 55);

      doc.setFontSize(12);
      doc.text("Date: 25/01/2030", 125, 40);
      doc.text("Valable jusqu'au : 25/02/2030", 125, 45);
      doc.text("N°client: 1234", 125, 50);

      autoTable(doc, { html: "#my-table" });

      autoTable(doc, {
        styles: { fillColor: [0, 0, 0] },
        head: [Object.values(tableHead)],
        startY: 80,
        body: valeursDevisList,
      });

      doc.save("table.pdf");
    }
  };

  return (
    <div className="w-full flex justify-center py-16">
      <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-4 px-6 rounded-lg text-gray-900 bg-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3 mt-4"
        type="button"
        onClick={generatePDF}
      >
        Telecharger devis
      </button>
    </div>
  );
};

export default DevisComponent;
