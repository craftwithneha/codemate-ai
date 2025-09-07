'use client';

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic AI code suggestions",
      "Limited daily usage",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$19/month",
    features: [
      "Unlimited AI coding help",
      "Multi-language support",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Team collaboration tools",
      "Dedicated support",
      "Custom AI training",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
        Pricing Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col shadow-lg hover:border-purple-500 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6 text-purple-400">{plan.price}</p>

            <ul className="space-y-3 flex-1">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-zinc-300">
                  <Check className="text-purple-400 mt-1" size={18} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium cursor-pointer">
              Choose {plan.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
