import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useTableRowStore } from "../store/tableRowStore";
import { useTableHeadStore } from "../store/tableHeadStore";
import logo from "../assets/logo.png";

const DevisComponent: React.FC = () => {
  const { tableRow } = useTableRowStore();
  const { tableHead } = useTableHeadStore();
  const date =  new Date();
  const completeDate = date.toLocaleDateString('fr-FR');
  date.setMonth(date.getMonth() + 1);
  const completeDate2 = date.toLocaleDateString('fr-FR');

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
      doc.addImage(logo, "PNG", 10, 15, 15, 15);

      doc.setFontSize(12);
      doc.text("Client", 15, 40);
      doc.text("Rita Marnier", 15, 45);
      doc.text("12, rue de la Paix, 75012 Paris", 15, 50);

      doc.setFontSize(12);
      doc.text("Name Client", 125, 40);
      doc.text("Émis le " + completeDate, 125, 50);
      doc.text("Valide jusqu'au " + completeDate2, 125, 55);
      doc.text("N°client 1234", 125, 60);

      // autoTable(doc, { html: "#my-table" });

      autoTable(doc, {
        //#FEF7EC,    rgb(254, 247, 236)
        styles: { fillColor: [254, 247, 236], textColor: [0, 0, 0] },
        bodyStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] }, // Texte noir pour le corps
        head: [Object.values(tableHead)],
        startY: 80,
        body: valeursDevisList

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
        <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/><path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
        Download Estimate
      </button>
    </div>
  );
};

export default DevisComponent;
