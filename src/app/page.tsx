'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [text] = useTypewriter({
    words: ['CodeMate AI', 'Your AI Coding Partner', 'Build Smarter, Faster'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col">

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20 sm:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
        >
          {text}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-xl text-lg text-zinc-400"
        >
          Your personal AI-powered coding assistant. Build, debug, and deploy effortlessly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/sign-up">
            <Button className="h-11 px-8 bg-purple-600 hover:bg-purple-700">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>

          <Link href="/sign-in">
            <Button variant="outline" className="h-11 px-8 border-zinc-700 text-zinc-300 hover:bg-zinc-800">
              Sign In
            </Button>
          </Link>
        </motion.div>
        </div>

      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-zinc-900/40">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <Sparkles className="text-blue-400 w-8 h-8" />, title: 'Instant Code Generation', description: 'Generate React, JavaScript, and backend code instantly with AI assistance.' },
          { icon: <Code className="text-purple-500 w-8 h-8" />, title: 'Debug Smarter', description: 'Explain your errors and fix your bugs with clarity and speed.' },
          { icon: <Zap className="text-green-400 w-8 h-8" />, title: 'Boost Productivity', description: 'Automate repetitive coding tasks and focus on building amazing products.' },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-zinc-800/60 p-6 rounded-xl w-full text-center space-y-4 hover:scale-[1.02] transition"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-zinc-400">{feature.description}</p>
          </motion.div>
        ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-zinc-500 text-sm border-t border-zinc-800">
        © 2025 CodeMate AI. All rights reserved.
      </footer>
    </div>
  );
}
