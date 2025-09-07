// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { Input } from '../../components/ui/input';
// import { Button } from '../../components/ui/button';
// import { Send } from 'lucide-react';
// import { cn } from '../../../lib/utils';
// import { UserButton, useUser } from '@clerk/nextjs';
// import Image from 'next/image';
// import ReactMarkdown from 'react-markdown';
// import { ComponentProps } from 'react';

// type Message = {
//   role: 'user' | 'assistant';
//   content: string;
// };

// export default function DashboardPage() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const chatRef = useRef<HTMLDivElement>(null);
//   const { user } = useUser();

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage: Message = { role: 'user', content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput('');
//     setLoading(true);

//     try {
//       const res = await fetch('/api/ai', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ prompt: input }),
//       });

//       const data = await res.json();
//       const aiMessage: Message = { role: 'assistant', content: data.message };
//       setMessages((prev) => [...prev, aiMessage]);
//     } catch (error) {
//       console.error('API error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   useEffect(() => {
//     chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
//   }, [messages, loading]);

//   return (
//     <div className="flex flex-col h-screen bg-gradient-to-b from-[#0e0e10] via-[#0b0b0d] to-[#000000] text-white">
//       {/* Header */}
//       <header className="px-6 py-4 bg-black/80 border-b border-zinc-800 shadow-sm backdrop-blur-md flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <h1 className="text-xl font-bold text-purple-500">CodeMate <span className="text-white">AI</span></h1>
//         </div>
//         <UserButton afterSignOutUrl="/" />
//       </header>

//       {/* Chat Messages */}
//       <div
//         ref={chatRef}
//         className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent"
//       >
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={cn(
//               'flex gap-3',
//               msg.role === 'user' ? 'justify-end' : 'justify-start'
//             )}
//           >
//             {msg.role === 'assistant' && (
//               <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs">🤖</div>
//             )}

//             <div
//               className={cn(
//                 'max-w-[70%] px-4 py-3 rounded-2xl whitespace-pre-wrap shadow-md',
//                 msg.role === 'user'
//                   ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white'
//                   : 'bg-zinc-800 text-zinc-100'
//               )}
//             >
//               <div className="text-xs mb-1 font-medium text-zinc-400">
//                 {msg.role === 'user' ? (user?.username || 'You') : 'CodeMate AI'}
//               </div>
//               {msg.role === 'assistant' ? (
//                 <div className="prose prose-invert max-w-none text-sm">
//                   <ReactMarkdown
//                     components={{
//                       pre: (props: ComponentProps<'pre'>) => <pre className="bg-zinc-900 rounded p-3 overflow-x-auto my-2" {...props} />,
//                       code: (props: ComponentProps<'code'>) => <code className="bg-zinc-800 rounded px-1 py-0.5 text-purple-400" {...props} />,
//                       h1: (props: ComponentProps<'h1'>) => <h1 className="text-lg font-bold mt-2 mb-1" {...props} />,
//                       h2: (props: ComponentProps<'h2'>) => <h2 className="text-base font-semibold mt-2 mb-1" {...props} />,
//                       ul: (props: ComponentProps<'ul'>) => <ul className="list-disc ml-6 my-2" {...props} />,
//                       ol: (props: ComponentProps<'ol'>) => <ol className="list-decimal ml-6 my-2" {...props} />,
//                       li: (props: ComponentProps<'li'>) => <li className="mb-1" {...props} />,
//                       p: (props: ComponentProps<'p'>) => <p className="mb-2" {...props} />,
//                     }}
//                   >
//                     {msg.content}
//                   </ReactMarkdown>
//                 </div>
//               ) : (
//                 <div className="text-sm whitespace-pre-line">{msg.content}</div>
//               )}
//             </div>
//             {msg.role === 'user' && user?.imageUrl && (
//               <Image
//                 src={user.imageUrl}
//                 alt="Profile"
//                 width={32}
//                 height={32}
//                 className="w-8 h-8 rounded-full border-2 border-purple-600"
//               />
//             )}
//           </div>
//         ))}

//         {loading && (
//           <div className="flex gap-3 justify-start">
//             <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs">🤖</div>
//             <div className="bg-zinc-800 text-zinc-400 rounded-2xl px-4 py-3 max-w-[70%] shadow-md">
//               <span className="animate-pulse">CodeMate is typing...</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input Area */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           sendMessage();
//         }}
//         className="border-t border-zinc-800 px-6 py-4 flex gap-3 bg-black"
//       >
//         <Input
//           className="flex-1 bg-zinc-900 text-white border-zinc-700 placeholder-zinc-500 focus:ring-purple-500"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Ask CodeMate something..."
//         />
//         <Button type="submit" disabled={loading} className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600">
//           <Send className="w-4 h-4" />
//         </Button>
//       </form>
//     </div>
//   );
// } 




'use client';

import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import type { ComponentProps } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function DashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const aiMessage: Message = { role: 'assistant', content: data.message };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('API error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#0e0e10] via-[#0b0b0d] to-[#000000] text-white">
      {/* Header */}
      <header className="px-6 py-4 bg-black/80 border-b border-zinc-800 shadow-sm backdrop-blur-md flex items-center justify-between">
        <h1 className="text-xl font-bold text-purple-500">
          CodeMate <span className="text-white">AI</span>
        </h1>
        <UserButton afterSignOutUrl="/" />
      </header>

      {/* Chat Messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto px-3 sm:px-4 py-6 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-transparent"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={cn(
              'flex gap-3',
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs">🤖</div>
            )}

            <div
              className={cn(
                'max-w-[88%] sm:max-w-[75%] md:max-w-[65%] px-4 py-3 rounded-2xl whitespace-pre-wrap shadow-md',
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white'
                  : 'bg-zinc-800 text-zinc-100'
              )}
            >
              <div className="text-xs mb-1 font-medium text-zinc-400">
                {msg.role === 'user' ? (user?.username || 'You') : 'CodeMate AI'}
              </div>

              {msg.role === 'assistant' ? (
                <div className="prose prose-invert max-w-none text-sm">
                  <ReactMarkdown
                    components={{
                      pre: ({ ...props }: ComponentProps<'pre'>) => (
                        <pre className="bg-zinc-900 rounded p-3 overflow-x-auto my-2" {...props} />
                      ),
                      code: ({ ...props }: ComponentProps<'code'>) => (
                        <code className="bg-zinc-800 rounded px-1 py-0.5 text-purple-400" {...props} />
                      ),
                      h1: ({ ...props }: ComponentProps<'h1'>) => (
                        <h1 className="text-lg font-bold mt-2 mb-1" {...props} />
                      ),
                      h2: ({ ...props }: ComponentProps<'h2'>) => (
                        <h2 className="text-base font-semibold mt-2 mb-1" {...props} />
                      ),
                      ul: ({ ...props }: ComponentProps<'ul'>) => (
                        <ul className="list-disc ml-6 my-2" {...props} />
                      ),
                      ol: ({ ...props }: ComponentProps<'ol'>) => (
                        <ol className="list-decimal ml-6 my-2" {...props} />
                      ),
                      li: ({ ...props }: ComponentProps<'li'>) => (
                        <li className="mb-1" {...props} />
                      ),
                      p: ({ ...props }: ComponentProps<'p'>) => (
                        <p className="mb-2" {...props} />
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="text-sm whitespace-pre-line">{msg.content}</div>
              )}
            </div>

            {msg.role === 'user' && user?.imageUrl && (
              <Image
                src={user.imageUrl}
                alt="Profile"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-purple-600"
              />
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs">🤖</div>
            <div className="bg-zinc-800 text-zinc-400 rounded-2xl px-4 py-3 max-w-[70%] shadow-md">
              <span className="animate-pulse">CodeMate is typing...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="border-t border-zinc-800 px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 bg-black"
      >
        <Input
          className="flex-1 bg-zinc-900 text-white border-zinc-700 placeholder-zinc-500 focus:ring-purple-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask CodeMate something..."
        />
        <Button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 w-full sm:w-auto"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
