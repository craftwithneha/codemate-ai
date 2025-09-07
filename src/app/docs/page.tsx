'use client';

import {
  BookOpen,
  Sparkles,
  Code2,
  Layers,
  HelpCircle,
  LifeBuoy,
} from 'lucide-react';

export default function DocsPage() {
  const items = [
    {
      title: 'Getting Started',
      desc: 'Set up CodeMate AI in your project in minutes.',
      points: [
        'Installation guide',
        'Basic configuration',
        'Running your first AI command',
      ],
      icon: <BookOpen className="w-7 h-7 text-purple-400" />,
    },
    {
      title: 'Features Guide',
      desc: 'Explore powerful AI features for coding and debugging.',
      points: ['Code generation', 'Error explanations', 'Productivity tools'],
      icon: <Sparkles className="w-7 h-7 text-pink-400" />,
    },
    {
      title: 'API Reference',
      desc: 'Dive deep into API endpoints, methods, and responses.',
      points: ['Authentication', 'Endpoints overview', 'Example requests & responses'],
      icon: <Code2 className="w-7 h-7 text-blue-400" />,
    },
    {
      title: 'Examples',
      desc: 'Step-by-step coding examples with AI integration.',
      points: ['Frontend with React', 'Backend with Node.js', 'Full-stack workflows'],
      icon: <Layers className="w-7 h-7 text-green-400" />,
    },
    {
      title: 'FAQ',
      desc: 'Find answers to common questions about CodeMate AI.',
      points: ['Account setup', 'Usage limits', 'Troubleshooting tips'],
      icon: <HelpCircle className="w-7 h-7 text-yellow-400" />,
    },
    {
      title: 'Support',
      desc: 'Get help from our community and support team.',
      points: ['Join Discord', 'Contact support', 'Report an issue'],
      icon: <LifeBuoy className="w-7 h-7 text-red-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          CodeMate AI Docs
        </h1>
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
          Learn how to integrate CodeMate AI into your workflow.  
          Start building with guides, tutorials, and API references.
        </p>
      </section>

      {/* Bigger Docs Cards */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {items.map((item, i) => (
          <div
            key={i}
            className="group bg-zinc-900/70 p-8 rounded-2xl hover:bg-zinc-800/90 transition-all cursor-default border border-transparent hover:border-purple-500/50 hover:shadow-2xl min-h-[280px] flex flex-col"
          >
            <div className="flex items-center gap-4 mb-5">
              {item.icon}
              <h3 className="text-2xl font-semibold group-hover:text-purple-400">
                {item.title}
              </h3>
            </div>
            <p className="text-zinc-300 text-base">{item.desc}</p>
            <ul className="mt-5 text-zinc-500 text-sm space-y-2 list-disc list-inside">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
