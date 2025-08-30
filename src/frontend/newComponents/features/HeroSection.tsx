"use client";

import { Button } from "@/frontend/core/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/frontend/core/components/ui/card";
import { Badge } from "@/frontend/core/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";
import { heroFeatures } from "@/frontend/featuresPage/domain/featuresData";

export function HeroSection({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
          <Star className="h-3 w-3 mr-1" />
          Everything you need to scale your business
        </Badge>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Powerful features for
          <br />
          <span className="text-purple-600">modern sellers</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          From listing management to order fulfillment, JellySell® provides all
          the tools you need to run a successful multi-platform business.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {heroFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
          onClick={onGetStarted}
        >
          Start Free - No Credit Card Required
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
