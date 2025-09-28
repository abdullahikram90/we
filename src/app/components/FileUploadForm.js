"use client";

import { useState } from "react";

export default function FileUploadForm() {
  const [passwordEnabled, setPasswordEnabled] = useState(false);
  const [mode, setMode] = useState("link"); // default: get link

  return (
    <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
      {/* Toggle Mode Buttons */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setMode("link")}
          className={`px-6 py-2 rounded-l-lg font-medium transition-all duration-200 ${
            mode === "link"
              ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg"
              : "bg-white/20 text-gray-200 hover:bg-white/30"
          }`}
        >
          Get a Link
        </button>
        <button
          onClick={() => setMode("email")}
          className={`px-6 py-2 rounded-r-lg font-medium transition-all duration-200 ${
            mode === "email"
              ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg"
              : "bg-white/20 text-gray-200 hover:bg-white/30"
          }`}
        >
          Send as Email
        </button>
      </div>

      <form className="space-y-4">
        <input
          type="file"
          className="w-full border border-white/30 p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        {mode === "email" && (
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-white/30 p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        )}

        <input
          type="text"
          placeholder="Title and Message"
          className="w-full border border-white/30 p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <select className="w-full border border-white/30 p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <option className="bg-gray-800 text-white">Expires in 3 days</option>
          <option className="bg-gray-800 text-white">Expires in 7 days</option>
          <option className="bg-gray-800 text-white">Expires in 30 days</option>
          <option className="bg-gray-800 text-white">Expires in 60 days</option>
        </select>

        <div className="flex items-center justify-between">
          <label className="text-gray-200 font-medium">Set Password</label>

          {/* Toggle Switch */}
          <button
            type="button"
            onClick={() => setPasswordEnabled(!passwordEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
              passwordEnabled ? "bg-cyan-500" : "bg-gray-500"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                passwordEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {passwordEnabled && (
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-white/30 p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 mt-3"
          />
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-cyan-500 hover:to-indigo-600 text-white py-3 rounded-lg shadow-lg transition-all duration-200"
        >
          Transfer
        </button>
      </form>
    </div>
  );
}
