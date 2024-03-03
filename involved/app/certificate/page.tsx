"use client";
import React from "react";
import replaceTextInPdf from "../(utils)/MakePdf";
import replaceTextInPDF from "../(utils)/MakePdf";

const CenteredButton: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={async () => {
          // replaceTextInPdf("@/Certificate.pdf", "Saahil Doshi");
          await replaceTextInPDF(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "userName"
          )
            .then((res) => res.blob())
            .then((blob) => {
              // Create a new object URL for the blob
              const url = window.URL.createObjectURL(blob);

              // Create a link and click it to start the download
              const a = document.createElement("a");
              a.style.display = "none";
              a.href = url;
              a.download = "new.pdf";
              document.body.appendChild(a);
              a.click();

              // After a while, revoke the data URL
              setTimeout(() => {
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
              }, 100);
            });
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default CenteredButton;
