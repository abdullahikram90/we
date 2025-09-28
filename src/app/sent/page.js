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
      <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-2">
          📤 Sent Files
        </h2>

        {dummyFiles.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">No files sent yet.</p>
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
                  </div>
                </div>

                {/* Status */}
                <div className="flex-shrink-0">
                  {file.status === "sent" ? (
                    <span className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-full shadow-sm hover:bg-green-100 transition">
                      Sent
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-full shadow-sm hover:bg-red-100 transition">
                      Failed
                    </span>
                  )}
                </div>
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
