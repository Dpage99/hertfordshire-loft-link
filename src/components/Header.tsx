import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Hertfordshire Loft Specialists</h1>
              <p className="text-sm text-muted-foreground">Expert Matching Network</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-smooth font-medium">
              How It Works
            </a>
            <a href="#areas" className="text-foreground hover:text-primary transition-smooth font-medium">
              Areas
            </a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-smooth font-medium">
              Reviews
            </a>
          </nav>

          {/* Contact CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-semibold">01923 123 456</span>
            </div>
            <Button variant="cta" size="lg">
              Get Matched
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;