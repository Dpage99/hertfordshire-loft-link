import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Thermometer, 
  ArrowUpDown, 
  Lightbulb, 
  Package, 
  Trash2 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Loft Boarding Specialists",
      description: "Expert installation of quality loft boarding for safe storage space. Professional flooring solutions tailored to your needs.",
      features: ["Quality materials", "Safe installation", "Storage optimization"]
    },
    {
      icon: Thermometer,
      title: "Loft Insulation Experts", 
      description: "Energy-efficient insulation solutions to reduce heating costs and improve comfort. Professional assessment and installation.",
      features: ["Energy savings", "Professional grade", "Building regs compliant"]
    },
    {
      icon: ArrowUpDown,
      title: "Loft Ladder Installation",
      description: "Safe, convenient access solutions with professional ladder installation. Various styles to suit your home and budget.",
      features: ["Safety certified", "Multiple styles", "Professional fitting"]
    },
    {
      icon: Home,
      title: "Loft Flooring Services",
      description: "Durable flooring solutions for maximum storage capacity. From basic boarding to premium finishes.",
      features: ["Durable materials", "Load-bearing design", "Professional finish"]
    },
    {
      icon: Lightbulb,
      title: "Loft Lighting Installation",
      description: "Professional electrical work for loft lighting systems. Certified electricians ensuring safe, code-compliant installations.",
      features: ["Certified electricians", "Safety compliant", "Efficient LED options"]
    },
    {
      icon: Trash2,
      title: "Loft Clearance & Disposal",
      description: "Complete loft clearance services with responsible disposal. Professional teams handling everything from junk to hazardous materials.",
      features: ["Full clearance", "Responsible disposal", "Licensed waste removal"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Services We Connect You With
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple boarding to complete loft transformations, we match you with 
            specialists who excel in exactly what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-medium transition-smooth border-0 shadow-soft bg-background">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-foreground">
                    <div className="w-2 h-2 bg-success rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-smooth">
                Find Specialists
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't see your specific requirement?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work with specialists covering all aspects of loft work. 
            Tell us what you need and we'll find the perfect match.
          </p>
          <Button variant="cta" size="lg">
            Tell Us Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;