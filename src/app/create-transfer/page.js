"use client";

import { useState } from "react";
import FileUploadForm from "../components/FileUploadForm";

export default function CreateTransfer() {
  const [mode, setMode] = useState("link"); // link | email

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600
 p-5 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <FileUploadForm mode={mode} />
      </div>
    </div>
  );
}
