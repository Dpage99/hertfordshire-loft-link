import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const AreasServed = () => {
  const areas = [
    "Watford", "St Albans", "Hemel Hempstead", "Stevenage", "Hatfield", "Welwyn Garden City",
    "Cheshunt", "Borehamwood", "Hertford", "Ware", "Bishops Stortford", "Hitchin",
    "Letchworth", "Royston", "Berkhamsted", "Tring", "Harpenden", "Rickmansworth",
    "Chorleywood", "Bushey", "Potters Bar", "Waltham Cross", "Hoddesdon", "Sawbridgeworth"
  ];

  return (
    <section id="areas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Covering All of{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">Hertfordshire</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our network of trusted loft specialists covers every corner of Hertfordshire. 
            Local expertise, building regulation knowledge, and rapid response times.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map Placeholder */}
          <div className="lg:col-span-1">
            <Card className="p-8 text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Complete Coverage</h3>
              <p className="text-muted-foreground mb-6">
                From bustling Watford to historic St Albans, we connect you with local specialists 
                who understand your area's specific requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <Badge variant="secondary">Within 24hrs</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Local Specialists</span>
                  <Badge variant="secondary">25+ Partners</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Building Regs</span>
                  <Badge variant="secondary">Compliant</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Areas Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">
              Towns & Areas We Serve
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area, index) => (
                <Card key={index} className="p-4 hover:shadow-soft transition-smooth border-0 bg-muted/30 hover:bg-background">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-trust-gradient rounded-xl">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Don't see your area listed?
                </h4>
                <p className="text-muted-foreground mb-4">
                  We're expanding our network across Hertfordshire. Get in touch and we'll 
                  find specialists in your area.
                </p>
                <Badge variant="outline" className="bg-background">
                  Call us: 01923 123 456
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;