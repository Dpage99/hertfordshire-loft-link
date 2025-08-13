import { MapPin, Phone, Mail, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hertfordshire Loft Specialists</h3>
                <p className="text-sm opacity-75">Expert Matching Network</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed mb-4">
              Connecting Hertfordshire homeowners with trusted, vetted loft specialists. 
              Your perfect match is just a click away.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
              <span className="text-sm ml-2">4.8/5 from 200+ reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>Loft Boarding Specialists</li>
              <li>Loft Insulation Experts</li>
              <li>Loft Ladder Installation</li>
              <li>Loft Flooring Services</li>
              <li>Loft Lighting Installation</li>
              <li>Loft Clearance & Disposal</li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Coverage Areas</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>Watford & Surrounding</li>
              <li>St Albans & District</li>
              <li>Hemel Hempstead</li>
              <li>Stevenage & North Herts</li>
              <li>Hertford & East Herts</li>
              <li>All Hertfordshire</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 opacity-75" />
                <div>
                  <p className="font-semibold">01923 123 456</p>
                  <p className="text-xs opacity-75">Mon-Fri 8am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 opacity-75" />
                <div>
                  <p>hello@hertsloft.co.uk</p>
                  <p className="text-xs opacity-75">24hr response</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 opacity-75" />
                <div>
                  <p>Serving All Hertfordshire</p>
                  <p className="text-xs opacity-75">Local specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2024 Hertfordshire Loft Specialists Network. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-smooth">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;