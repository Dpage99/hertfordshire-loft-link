import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Clock, Shield } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-hero-gradient text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your Perfect Loft Specialist?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied Hertfordshire homeowners who found their ideal 
            specialist through our trusted matching service. Free, fast, and completely obligation-free.
          </p>

          {/* Trust Points */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, text: "100% Vetted Partners" },
              { icon: Clock, text: "24hr Response" },
              { icon: Phone, text: "Free Consultation" },
              { icon: Mail, text: "No Obligation" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <item.icon className="w-8 h-8" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="cta" size="lg" className="text-lg px-12 py-6 bg-white text-primary hover:bg-gray-100">
              Get Matched Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-white text-white hover:bg-white/10">
              Call 01923 123 456
            </Button>
          </div>

          <p className="text-sm opacity-75">
            Average matching time: 2 hours • 98% customer satisfaction • Fully insured specialists
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Speak to Our Experts</h3>
                <p className="opacity-90">Mon-Fri 8am-6pm, Sat 9am-4pm</p>
                <p className="font-semibold text-xl">01923 123 456</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Enquiries</h3>
                <p className="opacity-90">Quick response guaranteed</p>
                <p className="font-semibold text-lg">hello@hertsloft.co.uk</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;