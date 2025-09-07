"use client";

import { useState } from "react";

export default function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div className="mt-8 w-full max-w-3xl mx-auto px-4 sm:px-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          className="flex-1 p-2 rounded bg-gray-800 text-white w-full"
          placeholder="Ask CodeMate AI..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full sm:w-auto"
        >
          Send
        </button>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-gray-800 rounded">
          <p className="text-green-400 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}
