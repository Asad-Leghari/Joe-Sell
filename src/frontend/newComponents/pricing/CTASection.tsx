"use client";

import { Button } from "@/frontend/core/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASsection() {
  return (
    <section className="py-20 px-6 bg-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to start selling?
        </h2>
        <p className="text-xl text-purple-100 mb-8">
          Join thousands of sellers who only pay when they make money. No risk,
          all reward.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
            //   onClick={() => onGetStarted("pay-as-you-sell")}
          >
            Start Selling Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 bg-transparent"
          >
            Contact Support
          </Button>
        </div>
        <p className="text-purple-200 mt-4 text-sm">
          No setup fees • No monthly minimums • Cancel anytime
        </p>
      </div>
    </section>
  );
}
