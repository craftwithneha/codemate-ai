'use client';

import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "AI Code Assistance",
    description: "Generate, debug, and explain code instantly across multiple languages.",
    points: [
      "Real-time coding support",
      "Multi-language compatibility",
      "Quick debugging solutions",
    ],
  },
  {
    title: "Smart Suggestions",
    description: "Write cleaner code with intelligent, context-aware recommendations.",
    points: [
      "Reduces repetitive tasks",
      "Improves overall code quality",
      "Learns from your coding style",
    ],
  },
  {
    title: "Team Collaboration",
    description: "Build together with powerful AI tools designed for teams.",
    points: [
      "Share sessions with teammates",
      "Seamless GitHub integration",
      "Perfect for remote workflows",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
        Powerful Features
      </h1>
      <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-16">
        Everything you need to code smarter, faster, and better.  
        CodeMate AI adapts to your workflow and supercharges your productivity.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            className="relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
              <CheckCircle size={24} />
            </div>

            {/* Title & Description */}
            <h2 className="text-2xl font-semibold mb-2 text-purple-300">
              {feature.title}
            </h2>
            <p className="text-zinc-400 mb-6">{feature.description}</p>

            {/* Points */}
            <ul className="space-y-3">
              {feature.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-2 text-zinc-300"
                >
                  <CheckCircle className="text-green-400 mt-1" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
