"use client";

import { FileText, Image, Video, FileArchive } from "lucide-react";

export default function Sent() {
  // Dummy data
  const dummyFiles = [
    { id: 1, name: "Report.pdf", size: "2.3 MB", date: "Sep 28, 2025", type: "doc", status: "sent" },
    { id: 2, name: "Presentation.pptx", size: "5.1 MB", date: "Sep 27, 2025", type: "doc", status: "failed" },
    { id: 3, name: "Photo.png", size: "1.2 MB", date: "Sep 26, 2025", type: "image", status: "sent" },
    { id: 4, name: "Video.mp4", size: "20 MB", date: "Sep 25, 2025", type: "video", status: "failed" },
    { id: 5, name: "Archive.zip", size: "50 MB", date: "Sep 20, 2025", type: "zip", status: "sent" },
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
        <h1 className="text-4xl font-bold drop-shadow-lg">📤 Sent Files</h1>
        <p className="text-lg opacity-90">Your uploaded and shared files</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
        {dummyFiles.length === 0 ? (
          <p className="text-white text-center text-lg bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20">
            No files sent yet.
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
                  </div>
                </div>

                {/* Status */}
                <div className="flex-shrink-0">
                  {file.status === "sent" ? (
                    <span className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-green-300 bg-green-900/40 border border-green-400/40 rounded-full shadow-sm">
                      Sent
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-red-300 bg-red-900/40 border border-red-400/40 rounded-full shadow-sm">
                      Failed
                    </span>
                  )}
                </div>
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
