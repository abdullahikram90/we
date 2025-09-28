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
        return <Image className="w-10 h-10 text-blue-500" />;
      case "video":
        return <Video className="w-10 h-10 text-purple-500" />;
      case "zip":
        return <FileArchive className="w-10 h-10 text-yellow-500" />;
      default:
        return <FileText className="w-10 h-10 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl mx-auto w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-2">
          📥 Received Files
        </h2>

        {dummyFiles.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No files received yet.</p>
        ) : (
          <ul className="space-y-5">
            {dummyFiles.map((file) => (
              <li
                key={file.id}
                className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all"
              >
                {/* File Info */}
                <div className="flex items-center gap-5">
                  {getIcon(file.type)}
                  <div className="leading-snug">
                    <p className="text-lg font-semibold text-gray-800">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {file.size} • {file.date}
                    </p>
                    <p className="text-sm text-gray-400">From: {file.sender}</p>
                  </div>
                </div>

                {/* Download Button */}
                <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full shadow-sm hover:bg-blue-100 transition cursor-pointer">
                  <Download size={16} />
                  Download
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>

      {/* Footer Example */}
      <footer className="p-4 bg-gray-100 text-center text-gray-600 text-sm">
        © 2025 My App. All rights reserved.
      </footer>
    </div>
  );
}
