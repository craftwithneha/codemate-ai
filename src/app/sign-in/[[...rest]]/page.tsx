'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-xl shadow-xl p-8">

        <h1 className="text-3xl font-bold mb-6 text-center text-purple-500">
          Welcome Back
        </h1>

        <SignIn
          afterSignInUrl="/dashboard"
          appearance={{
            elements: {
              formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white font-medium',
              formFieldLabel: 'text-zinc-400',
              formFieldInput: 'bg-zinc-800 border border-zinc-700 text-white focus:ring-purple-500',
              card: 'bg-zinc-900 text-white',
            },
          }}
        />
      </div>
    </div>
  );
}
