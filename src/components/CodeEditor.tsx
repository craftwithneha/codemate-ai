"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
  const [code, setCode] = useState("// Start coding with AI 🚀");

  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden h-[55vh] sm:h-[60vh] md:h-[65vh] min-h-64">
      <Editor
        height="100%"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
}
