import { NextApiRequest, NextApiResponse } from "next";
import replaceTextInPDF from "@/app/(utils)/MakePdf";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const pdfBytes = await replaceTextInPDF(
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    "userName"
  );

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=new.pdf");
  res.send(Buffer.from(pdfBytes));
}
