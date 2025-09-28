"use client";

import { FileText, Image, Video, FileArchive, Download } from "lucide-react";

export default function Received() {
  // Dummy data
  const dummyFiles = [
    { id: 1, name: "Invoice.pdf", size: "1.8 MB", date: "Sep 28, 2025", type: "doc", sender: "John Doe" },
    { id: 2, name: "Logo.png", size: "800 KB", date: "Sep 27, 2025", type: "image", sender: "Alice Smith" },
    { id: 3, name: "Tutorial.mp4", size: "35 MB", date: "Sep 25, 2025", type: "video", sender: "David Lee" },
    { id: 4, name: "Data.zip", size: "10 MB", date: "Sep 23, 2025", type: "zip", sender: "Emma Watson" },
  ];

  // File type icon
  const getIcon = (type) => {
    switch (type) {
      case "image":
        return <Image className="w-10 h-10 text-cyan-400" />;
      case "video":
        return <Video className="w-10 h-10 text-purple-400" />;
      case "zip":
        return <FileArchive className="w-10 h-10 text-yellow-400" />;
      default:
        return <FileText className="w-10 h-10 text-gray-300" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600">
      {/* Header */}
      <header className="p-8 text-center text-white">
        <h1 className="text-4xl font-bold drop-shadow-lg">📥 Received Files</h1>
        <p className="text-lg opacity-90">Files shared with you</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl mx-auto w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {dummyFiles.length === 0 ? (
          <p className="text-white text-center text-lg bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20">
            No files received yet.
          </p>
        ) : (
          <ul className="space-y-5">
            {dummyFiles.map((file) => (
              <li
                key={file.id}
                className="flex items-center justify-between p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                {/* File Info */}
                <div className="flex items-center gap-5">
                  {getIcon(file.type)}
                  <div className="leading-snug">
                    <p className="text-lg font-semibold text-white">{file.name}</p>
                    <p className="text-sm text-gray-300">
                      {file.size} • {file.date}
                    </p>
                    <p className="text-sm text-gray-400">From: {file.sender}</p>
                  </div>
                </div>

                {/* Download Button */}
                <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-900/40 border border-cyan-400/40 rounded-full shadow-sm hover:bg-cyan-800/50 transition cursor-pointer">
                  <Download size={16} />
                  Download
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>

      {/* Footer */}
      <footer className="p-4 bg-white/10 text-center text-white text-sm backdrop-blur-md border-t border-white/20">
        © 2025 My App. All rights reserved.
      </footer>
    </div>
  );
}
