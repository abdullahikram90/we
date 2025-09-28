"use client";
import { useState } from "react";
import {
  FileText,
  Image,
  Video,
  FileArchive,
  MoreVertical,
  Star,
  LayoutGrid,
  List,
} from "lucide-react";

export default function Saved() {
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"

  // Dummy data
  const dummyFiles = [
    { id: 1, name: "Resume.pdf", size: "1.2 MB", date: "Sep 28, 2025", type: "doc", preview: "/thumbnails/pdf.png" },
    { id: 2, name: "Banner.png", size: "3.4 MB", date: "Sep 25, 2025", type: "image", preview: "/thumbnails/banner.png" },
    { id: 3, name: "Promo Video.mp4", size: "50 MB", date: "Sep 20, 2025", type: "video", preview: "/thumbnails/video.png" },
    { id: 4, name: "Backup.zip", size: "120 MB", date: "Sep 15, 2025", type: "zip", preview: "/thumbnails/zip.png" },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "image":
        return <Image className="w-6 h-6 text-blue-500" />;
      case "video":
        return <Video className="w-6 h-6 text-purple-500" />;
      case "zip":
        return <FileArchive className="w-6 h-6 text-yellow-500" />;
      default:
        return <FileText className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-8 max-w-6xl mx-auto w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            ⭐ Saved Files
          </h2>
          {/* Toggle Button */}
          <button
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-white shadow-sm hover:bg-gray-100 transition"
          >
            {viewMode === "grid" ? (
              <>
                <List className="w-5 h-5 text-gray-600" /> List View
              </>
            ) : (
              <>
                <LayoutGrid className="w-5 h-5 text-gray-600" /> Grid View
              </>
            )}
          </button>
        </div>

        {/* No Files */}
        {dummyFiles.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No saved files yet.</p>
        ) : viewMode === "grid" ? (
          // 🔹 Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dummyFiles.map((file) => (
              <div
                key={file.id}
                className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-yellow-200 transition-all overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="h-40 w-full bg-gray-50 flex items-center justify-center">
                  {file.preview ? (
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    getIcon(file.type)
                  )}
                </div>

                {/* File Info */}
                <div className="p-4">
                  <p className="font-semibold text-gray-800 truncate">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {file.size} • {file.date}
                  </p>
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
                    <Star className="w-4 h-4 text-yellow-500" />
                  </button>
                  <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // 🔹 List View
          <div className="space-y-3">
            {dummyFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between bg-white border rounded-xl shadow-sm p-4 hover:shadow-md hover:border-yellow-200 transition"
              >
                {/* Left: Icon + File Info */}
                <div className="flex items-center gap-4">
                  {file.preview ? (
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  ) : (
                    getIcon(file.type)
                  )}
                  <div>
                    <p className="font-semibold text-gray-800">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {file.size} • {file.date}
                    </p>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
                    <Star className="w-4 h-4 text-yellow-500" />
                  </button>
                  <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-100 text-center text-gray-600 text-sm">
        © 2025 My App. All rights reserved.
      </footer>
    </div>
  );
}
