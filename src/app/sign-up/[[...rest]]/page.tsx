// 'use client';

// import { SignUp } from '@clerk/nextjs';

// export default function SignUpPage() {
//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-zinc-900 rounded-xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold mb-6 text-center text-purple-500">
//           Create Account
//         </h1>

//         <SignUp
//           afterSignUpUrl="/dashboard"
//           appearance={{
//             elements: {
//               formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white font-medium',
//               formFieldLabel: 'text-zinc-400',
//               formFieldInput: 'bg-zinc-800 border border-zinc-700 text-white focus:ring-purple-500',
//               card: 'bg-zinc-900 text-white',
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }



'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-2xl shadow-lg p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Create Account
        </h1>

        {/* Clerk Sign Up */}
        <SignUp
          afterSignUpUrl="/dashboard"
          appearance={{
            elements: {
              formButtonPrimary:
                'bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition',
              formFieldLabel: 'text-zinc-400',
              formFieldInput:
                'bg-zinc-800 border border-zinc-700 text-white focus:ring-purple-500 focus:border-purple-500',
              card: 'bg-transparent shadow-none',
              headerTitle: 'hidden', // hide Clerk default title
            },
          }}
        />
      </div>
    </div>
  );
}
