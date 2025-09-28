"use client";

import { useState } from "react";
import FileUploadForm from "../components/FileUploadForm";

export default function CreateTransfer() {
  const [mode, setMode] = useState("link"); // link | email

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            mode === "link" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setMode("link")}
        >
          Get a Link
        </button>
        <button
          className={`px-4 py-2 rounded ${
            mode === "email" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setMode("email")}
        >
          Send as Email
        </button>
      </div>

      <FileUploadForm mode={mode} />
    </div>
  );
}
