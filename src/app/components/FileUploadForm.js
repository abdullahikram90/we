
"use client";

import { useState } from "react";

export default function FileUploadForm({ mode }) {
  const [passwordEnabled, setPasswordEnabled] = useState(false);

  return (
    <form className="space-y-4">
      {mode === "email" && (
        <input
          type="email"
          placeholder="Recipient Email"
          className="w-full border p-2 rounded"
        />
      )}
      <input type="file" className="w-full border p-2 rounded" />
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Message"
        className="w-full border p-2 rounded"
      ></textarea>
      <select className="w-full border p-2 rounded">
        <option>Expires in 3 days</option>
        <option>Expires in 7 days</option>
        <option>Expires in 30 days</option>
        <option>Expires in 60 days</option>
      </select>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={passwordEnabled}
          onChange={(e) => setPasswordEnabled(e.target.checked)}
        />
        <label>Set Password</label>
      </div>

      {passwordEnabled && (
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Transfer
      </button>
    </form>
  );
}
