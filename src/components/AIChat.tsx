// "use client";

// import { useState } from "react";

// export default function AIChat() {
//   const [prompt, setPrompt] = useState("");
//   const [response, setResponse] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await fetch("/api/ai", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt }),
//     });

//     const data = await res.json();
//     setResponse(data.message);
//   };

//   return (
//     <div className="mt-8 w-full max-w-3xl mx-auto px-4 sm:px-6">
//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
//         <input
//           className="flex-1 p-2 rounded bg-gray-800 text-white w-full"
//           placeholder="Ask CodeMate AI..."
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full sm:w-auto"
//         >
//           Send
//         </button>
//       </form>

//       {response && (
//         <div className="mt-4 p-4 bg-gray-800 rounded">
//           <p className="text-green-400 whitespace-pre-wrap">{response}</p>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.message);
    setLoading(false);
  };

  return (
    <div className="mt-8 w-full max-w-3xl mx-auto px-4 sm:px-6">
      <div className="bg-zinc-900 rounded-2xl shadow-xl border border-zinc-800 p-6">
        {/* Chat Box */}
        <div className="h-80 overflow-y-auto space-y-4 p-2 bg-zinc-950 rounded-lg border border-zinc-800">
          {/* User Message */}
          {prompt && (
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-sm">
                {prompt}
              </div>
            </div>
          )}

          {/* AI Message */}
          {loading && (
            <div className="flex items-center gap-2 text-gray-400">
              <Loader2 className="h-4 w-4 animate-spin" />
              <p>Codemate AI is thinking...</p>
            </div>
          )}
          {response && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-green-400 px-4 py-2 rounded-lg max-w-sm whitespace-pre-wrap">
                {response}
              </div>
            </div>
          )}
        </div>

        {/* Input Box */}
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex items-center gap-2"
        >
          <Input
            className="flex-1 p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask Codemate AI..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white flex items-center gap-2 disabled:opacity-50"
          >
            <Send className="w-4 h-4" /> Send
          </Button>
        </form>
      </div>
    </div>
  );
}
