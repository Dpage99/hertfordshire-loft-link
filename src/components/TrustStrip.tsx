import { Card } from "@/components/ui/card";
import { Shield, Star, MapPin, Phone } from "lucide-react";

const TrustStrip = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Thoroughly Vetted",
      description: "Background checks, insurance verification & quality standards",
      stat: "100%"
    },
    {
      icon: Star,
      title: "5-Star Reviews",
      description: "Real customer feedback from completed projects",
      stat: "4.8/5"
    },
    {
      icon: MapPin,
      title: "Local Experts",
      description: "Hertfordshire specialists with area knowledge",
      stat: "25+"
    },
    {
      icon: Phone,
      title: "Free Service",
      description: "No obligation matching - completely free to use",
      stat: "£0"
    }
  ];

  return (
    <section className="py-16 bg-trust-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Hertfordshire Homeowners Trust Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We take the guesswork out of finding reliable loft specialists through our rigorous vetting process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-smooth border-0 shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{point.stat}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;