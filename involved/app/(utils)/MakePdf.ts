import { PDFDocument, PDFPage, rgb, StandardFonts } from "pdf-lib";
import fetch from "node-fetch";

export default async function replaceTextInPDF(
  templateUrl: string,
  userName: string
) {
  // Fetch the PDF

  const existingPdfBytes = await fetch(templateUrl).then((res) =>
    res.arrayBuffer()
  );

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Embed the Helvetica font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Get the width and height of the first page
  const { width, height } = firstPage.getSize();

  // Draw the name in the center of the page
  firstPage.drawText(userName, {
    x: width / 2 - 50,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Return the PDF bytes
  return pdfBytes;
}
