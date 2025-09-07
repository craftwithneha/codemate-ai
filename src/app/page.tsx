// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { useTypewriter } from 'react-simple-typewriter';
// import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function HomePage() {
//   const [text] = useTypewriter({
//     words: ['CodeMate AI', 'Your AI Coding Partner', 'Build Smarter, Faster'],
//     loop: true,
//     delaySpeed: 2000,
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col">

//       {/* Hero Section */}
//       <section className="flex flex-col justify-center items-center text-center py-20 sm:py-24">
//         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
//         >
//           {text}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="max-w-xl text-lg text-zinc-400"
//         >
//           Your personal AI-powered coding assistant. Build, debug, and deploy effortlessly.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="flex flex-wrap justify-center gap-4"
//         >
//           <Link href="/sign-up">
//             <Button className="h-11 px-8 bg-purple-600 hover:bg-purple-700">
//               Get Started <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//           </Link>

//           <Link href="/sign-in">
//             <Button variant="outline" className="h-11 px-8 border-zinc-700 text-zinc-300 hover:bg-zinc-800">
//               Sign In
//             </Button>
//           </Link>
//         </motion.div>
//         </div>

//       </section>

//       {/* Features Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-16 bg-zinc-900/40">
//         <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[
//           { icon: <Sparkles className="text-blue-400 w-8 h-8" />, title: 'Instant Code Generation', description: 'Generate React, JavaScript, and backend code instantly with AI assistance.' },
//           { icon: <Code className="text-purple-500 w-8 h-8" />, title: 'Debug Smarter', description: 'Explain your errors and fix your bugs with clarity and speed.' },
//           { icon: <Zap className="text-green-400 w-8 h-8" />, title: 'Boost Productivity', description: 'Automate repetitive coding tasks and focus on building amazing products.' },
//         ].map((feature, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.2, duration: 0.6 }}
//             className="bg-zinc-800/60 p-6 rounded-xl w-full text-center space-y-4 hover:scale-[1.02] transition"
//           >
//             <div className="flex justify-center">{feature.icon}</div>
//             <h3 className="text-xl font-semibold">{feature.title}</h3>
//             <p className="text-zinc-400">{feature.description}</p>
//           </motion.div>
//         ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 text-center text-zinc-500 text-sm border-t border-zinc-800">
//         © 2025 CodeMate AI. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col">

//       {/* Hero Section */}
//       <section className="flex flex-col justify-center items-center text-center py-20 sm:py-24">
//         <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

//           <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
//             CodeMate AI
//           </h1>

//           <p className="max-w-xl mx-auto text-lg text-zinc-400">
//             Your personal AI-powered coding assistant. Build, debug, and deploy effortlessly.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <Link href="/sign-up">
//               <Button className="h-11 px-8 bg-purple-600 hover:bg-purple-700 cursor-pointer">
//                 Get Started <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//             </Link>

//             <Link href="/sign-in">
//               <Button
//                 variant="outline"
//                 className="h-11 px-8 border-gray-800 text-white-300 hover:bg-zinc-800 cursor-pointer"
//               >
//                 Sign In
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-16 bg-zinc-900/40">
//         <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               icon: <Sparkles className="text-blue-400 w-8 h-8" />,
//               title: 'Instant Code Generation',
//               description:
//                 'Generate React, JavaScript, and backend code instantly with AI assistance.',
//             },
//             {
//               icon: <Code className="text-purple-500 w-8 h-8" />,
//               title: 'Debug Smarter',
//               description:
//                 'Explain your errors and fix your bugs with clarity and speed.',
//             },
//             {
//               icon: <Zap className="text-green-400 w-8 h-8" />,
//               title: 'Boost Productivity',
//               description:
//                 'Automate repetitive coding tasks and focus on building amazing products.',
//             },
//           ].map((feature, i) => (
//             <div
//               key={i}
//               className="bg-zinc-800/60 p-6 rounded-xl w-full text-center space-y-4"
//             >
//               <div className="flex justify-center">{feature.icon}</div>
//               <h3 className="text-xl font-semibold">{feature.title}</h3>
//               <p className="text-zinc-400">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-6 text-center text-zinc-500 text-sm border-t border-zinc-800">
//         © 2025 CodeMate AI. All rights reserved.
//       </footer>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full border-b border-zinc-800 bg-black/50 backdrop-blur-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            CodeMate AI
          </Link>
          <div className="flex gap-6 text-sm text-zinc-400">
            <Link href="/features" className="hover:text-white">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/docs" className="hover:text-white">
              Docs
            </Link>
          </div>

          {/* Navbar Buttons */}
          <div className="flex gap-3">
            <Link href="/sign-in">
              <Button
                variant="outline"
                className="h-9 px-5 rounded-xl border border-purple-500/30 
                 bg-black/30 backdrop-blur-md 
                 text-purple-300 hover:text-white 
                 hover:bg-purple-600/20 hover:border-purple-500/60 
                 shadow-lg shadow-purple-900/30 transition-all cursor-pointer"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                className="h-9 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 
                 hover:from-purple-700 hover:to-pink-600 
                 text-white font-medium shadow-lg shadow-purple-900/40 
                 flex items-center gap-1 transition-all cursor-pointer"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center pt-40 pb-24">
        <div className="w-full max-w-5xl mx-auto px-4 space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Your AI Coding Partner
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            CodeMate AI helps developers build, debug, and ship projects faster
            with AI-powered coding assistance.
          </p>

          {/* Hero Section Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sign-up">
              <Button
                className="h-12 px-8 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 
                 hover:from-purple-700 hover:to-pink-600 
                 text-white text-lg font-semibold shadow-xl shadow-purple-900/40 
                 transition-all cursor-pointer"
              >
                Start for Free
              </Button>
            </Link>
            <Link href="/docs">
              <Button
                variant="outline"
                className="h-12 px-8 rounded-2xl border border-purple-500/30 
                 bg-black/30 backdrop-blur-lg 
                 text-purple-300 text-lg font-medium 
                 hover:bg-purple-600/20 hover:text-white hover:border-purple-500/60 
                 shadow-lg shadow-purple-900/30 transition-all cursor-pointer"
              >
                Read Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-zinc-900/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="text-blue-400 w-10 h-10" />,
              title: "Instant Code Generation",
              description:
                "Generate React, JavaScript, and backend code instantly with AI assistance.",
            },
            {
              icon: <Code className="text-purple-500 w-10 h-10" />,
              title: "Debug Smarter",
              description:
                "Explain errors, fix bugs, and optimize your code with AI-driven insights.",
            },
            {
              icon: <Zap className="text-green-400 w-10 h-10" />,
              title: "Boost Productivity",
              description:
                "Automate repetitive tasks so you can focus on building great products.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-zinc-800/60 p-8 rounded-2xl text-center space-y-4 hover:bg-zinc-800/80 hover:scale-105 transition-all"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
     {/* Community Section */}
<section className="px-6 py-24 text-center relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-500/10 blur-3xl" />

  <div className="relative max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
      Trusted by Developers Worldwide 
    </h2>
    <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg">
      Join thousands of engineers who rely on <span className="text-purple-400 font-medium">CodeMate AI</span> daily to write, debug, and ship faster than ever.
    </p>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {[
        { icon: "🚀", title: "10K+", subtitle: "Active Users" },
        { icon: "⚡", title: "1M+", subtitle: "Code Snippets Generated" },
        { icon: "💻", title: "Loved", subtitle: "by Developers" },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-purple-500/20 hover:border-purple-400/40 transition-all hover:scale-105"
        >
          <div className="text-3xl">{stat.icon}</div>
          <h3 className="mt-3 text-2xl font-bold text-white">{stat.title}</h3>
          <p className="text-sm text-zinc-400">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-6 text-center text-zinc-500 text-sm border-t border-zinc-800">
        © 2025 CodeMate AI. All rights reserved.
      </footer>
    </div>
  );
}
