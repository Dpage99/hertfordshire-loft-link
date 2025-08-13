import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-loft.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="inline-flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Serving All Hertfordshire</span>
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Find Trusted{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Loft Specialists
                </span>{" "}
                in Hertfordshire
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                We connect you with vetted, certified experts for loft boarding, insulation, 
                ladders & complete solutions. No pressure, just perfect matches.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 py-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-semibold text-foreground">4.8/5 Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">500+ Successful Matches</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="font-semibold text-foreground">Fully Vetted Partners</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get Matched with Specialists
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                How It Works
              </Button>
            </div>

            {/* Additional Trust */}
            <p className="text-sm text-muted-foreground">
              ✓ Free matching service • ✓ No obligation quotes • ✓ Local Hertfordshire experts
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Professional loft conversion with quality flooring and insulation"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-medium border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">100% Vetted</p>
                  <p className="text-sm text-muted-foreground">Insured & Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;