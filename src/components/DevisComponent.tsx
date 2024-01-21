import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { TypeState } from "../types/Interface";

const DevisComponent: React.FC = () => {

  const devis = useSelector((state: TypeState) => state.devis);
  const valeursDevisList = devis.map(({ id, ...rest }) => Object.values(rest));

  const generatePDF = () => {
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
      head: [["Description", "Quantité", "Prix", "Total"]],
      startY: 80,
      body: valeursDevisList,
    });

    doc.save("table.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF}>Générer PDF</button>
    </div>
  );
};

export default DevisComponent;
