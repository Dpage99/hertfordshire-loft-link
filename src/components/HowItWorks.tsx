import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search, Users, Handshake, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Tell Us Your Needs",
      description: "Complete our simple form describing your loft project requirements, timeline, and budget.",
      color: "text-primary"
    },
    {
      step: "02", 
      icon: Search,
      title: "We Find Perfect Matches",
      description: "Our experts identify ideal specialists from our vetted network based on your specific needs.",
      color: "text-accent"
    },
    {
      step: "03",
      icon: Users,
      title: "Compare & Choose",
      description: "Review detailed quotes, specialist profiles, and customer reviews to make your decision.",
      color: "text-success"
    },
    {
      step: "04",
      icon: Handshake,
      title: "Get Started",
      description: "Connect directly with your chosen expert and begin your loft transformation project.",
      color: "text-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How We Match You with the{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">Perfect Specialist</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures you're connected with the ideal loft specialist 
            for your project - guaranteed quality, competitive pricing, local expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 h-full text-center hover:shadow-medium transition-smooth border-0 shadow-soft">
                {/* Step Number */}
                <div className="text-6xl font-bold text-muted mb-4 opacity-20">
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>

              {/* Arrow - Hidden on last item and mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-muted" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-12 py-6">
            Start Your Match Today
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes less than 2 minutes • Completely free • No obligation
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;