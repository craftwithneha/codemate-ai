"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { ComponentProps } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const aiMessage: Message = { role: "assistant", content: data.message };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const copyToClipboard = (content: string, idx: number) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#0c0c12] via-[#0a0a0e] to-[#000000] text-white">
      {/* Header */}
      <header className="px-6 py-4 bg-black/70 border-b border-purple-800/40 shadow-lg backdrop-blur-md flex items-center justify-between">
        <h1 className="text-xl font-bold text-purple-500 drop-shadow-md">
          CodeMate <span className="text-white">AI</span>
        </h1>
        <UserButton afterSignOutUrl="/" />
      </header>

      {/* Chat Messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto px-3 sm:px-4 py-6 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent"
      >
        {messages.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center h-full text-center text-zinc-400">
            <div className="text-5xl mb-4">💬</div>
            <p className="text-lg font-medium">Welcome to CodeMate AI</p>
            <p className="text-sm text-zinc-500 mt-1">
              Ask your first question to get started 🚀
            </p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={cn(
              "flex gap-3 animate-fadeIn",
              msg.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs shadow-md">
                🤖
              </div>
            )}

            <div
              className={cn(
                "relative group max-w-[88%] sm:max-w-[75%] md:max-w-[65%] px-5 py-4 rounded-2xl shadow-xl backdrop-blur-xl transition hover:scale-[1.01]",
                msg.role === "user"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white"
                  : "bg-gradient-to-br from-white/10 via-purple-500/5 to-transparent border border-purple-400/20 text-zinc-100"
              )}
            >
              {/* Glassy Username Badge */}
              <div
                className={cn(
                  "inline-block text-xs mb-3 px-3 py-1 rounded-full font-semibold shadow-lg backdrop-blur-md border tracking-wide",
                  msg.role === "user"
                    ? "bg-white/10 border-white/20 text-purple-100"
                    : "bg-purple-600/20 border-purple-400/20 text-purple-300"
                )}
              >
                {msg.role === "user" ? user?.username || "You" : "CodeMate AI"}
              </div>

              {/* Message Content */}
              {msg.role === "assistant" ? (
                <div className="prose prose-invert max-w-none text-sm leading-relaxed space-y-2">
                  <ReactMarkdown
                    components={{
                      pre: ({ ...props }: ComponentProps<"pre">) => (
                        <pre
                          className="bg-black/50 rounded-lg p-3 overflow-x-auto my-2 border border-purple-400/20 shadow-inner"
                          {...props}
                        />
                      ),
                      code: ({ ...props }: ComponentProps<"code">) => (
                        <code
                          className="bg-purple-900/40 rounded px-1 py-0.5 text-purple-300 font-mono text-sm"
                          {...props}
                        />
                      ),
                      strong: ({ ...props }: ComponentProps<"strong">) => (
                        <strong
                          className="text-purple-300 font-semibold"
                          {...props}
                        />
                      ),
                      h2: ({ ...props }: ComponentProps<"h2">) => (
                        <h2
                          className="text-purple-400 font-bold text-base mt-2 mb-1 border-b border-purple-500/30 pb-1"
                          {...props}
                        />
                      ),
                      ul: ({ ...props }: ComponentProps<"ul">) => (
                        <ul
                          className="list-disc pl-5 space-y-1 marker:text-purple-400"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="text-sm whitespace-pre-line">{msg.content}</div>
              )}

              {/* Copy Button */}
              {msg.role === "assistant" && (
                <button
                  onClick={() => copyToClipboard(msg.content, idx)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition bg-zinc-800/70 hover:bg-zinc-700 p-1.5 rounded-lg"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-400" />
                  )}
                </button>
              )}
            </div>

            {msg.role === "user" && user?.imageUrl && (
              <Image
                src={user.imageUrl}
                alt="Profile"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-purple-600 shadow-md"
              />
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 justify-start animate-fadeIn">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs shadow-md">
              🤖
            </div>
            <div className="bg-white/10 border border-purple-400/20 text-zinc-400 rounded-2xl px-4 py-3 max-w-[70%] shadow-lg backdrop-blur-md flex items-center gap-1">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:200ms]" />
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:400ms]" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="border-t border-purple-800/40 px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 bg-black/80 backdrop-blur-md"
      >
        <Input
          autoFocus
          className="flex-1 bg-zinc-900/90 text-white border-zinc-700/50 placeholder-zinc-500 rounded-xl focus:ring-2 focus:ring-purple-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask CodeMate something..."
        />
        <Button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-xl w-full sm:w-auto shadow-md"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
