import { Phone, Mail, MapPin, Building2, Search, GraduationCap, Home, FileText, ShoppingBag, Truck, Smartphone, Users, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { icon: Building2, title: "Business Registration", delay: "100ms" },
    { icon: Search, title: "Job Search & Recruitment", delay: "200ms" },
    { icon: GraduationCap, title: "UK Schools Placement", delay: "300ms" },
    { icon: Home, title: "Housing & Relocation Support", delay: "400ms" },
    { icon: FileText, title: "Passport, Visa & Death Certificate", delay: "500ms" },
    { icon: ShoppingBag, title: "Electronics, Fashion & Essentials", delay: "600ms" },
    { icon: Truck, title: "Delivery Services", delay: "700ms" },
    { icon: Smartphone, title: "Phone Deals", delay: "800ms" },
    { icon: Users, title: "Hiring & Partnerships", delay: "900ms" },
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Enhanced sand grain texture overlay with parallax */}
      <div 
        className="absolute inset-0 opacity-40 bg-repeat" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='3' cy='3' r='0.8'/%3E%3Ccircle cx='8' cy='8' r='1'/%3E%3Ccircle cx='13' cy='5' r='0.6'/%3E%3Ccircle cx='18' cy='12' r='0.9'/%3E%3Ccircle cx='23' cy='7' r='0.7'/%3E%3Ccircle cx='28' cy='15' r='1.1'/%3E%3Ccircle cx='33' cy='9' r='0.8'/%3E%3Ccircle cx='6' cy='18' r='0.9'/%3E%3Ccircle cx='11' cy='22' r='0.6'/%3E%3Ccircle cx='16' cy='28' r='1'/%3E%3Ccircle cx='21' cy='25' r='0.8'/%3E%3Ccircle cx='26' cy='32' r='0.7'/%3E%3Ccircle cx='31' cy='28' r='0.9'/%3E%3Ccircle cx='36' cy='22' r='0.6'/%3E%3Ccircle cx='2' cy='35' r='0.8'/%3E%3Ccircle cx='12' cy='38' r='0.7'/%3E%3Ccircle cx='22' cy='36' r='0.9'/%3E%3Ccircle cx='32' cy='39' r='0.6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollY * 0.3}px)`
        }}>
      </div>

      {/* Blue accent stripes with parallax */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-30"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="h-full bg-gradient-to-l from-blue-400 via-transparent to-transparent transform skew-x-12"></div>
      </div>

      {/* Secondary Background - YD Card with different parallax */}
      <div 
        className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vh] min-w-[200px] min-h-[150px] z-0 pointer-events-none"
        style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)` }}
      >
        <div className="w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl">
          <span className="text-white/20 font-black text-6xl md:text-8xl lg:text-9xl tracking-wider select-none">
            YD
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">YIADOM BOAKYE<span className="text-blue-300">®</span></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-blue-100 hover:text-white p-2 rounded-md transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-blue-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with different parallax effect */}
      <div 
        className="relative z-10 container mx-auto px-4 py-6 lg:py-8 pt-24"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        {/* Beautiful Header */}
        <header id="home" className="text-center mb-16 animate-[fade-in_1s_ease-out]">
          <div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
              YIADOM BOAKYE<span className="text-blue-300">®</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-white mx-auto mb-4"></div>
            <p className="text-blue-200 text-xl md:text-2xl tracking-wider font-light">LIMITED</p>
          </div>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for comprehensive business solutions and life services in the UK
          </p>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Message */}
          <div 
            id="services" 
            className="text-white space-y-8 animate-[fade-in_1s_ease-out_0.3s_both]"
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          >
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your one-stop
                <br />
                <span className="text-blue-300 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">Business</span>
                <br />
                Hub
              </h2>
              <p className="text-blue-200 text-lg md:text-xl leading-relaxed">
                <span className="text-white font-semibold">Diverse services</span> under
                <br />
                one <span className="text-white font-semibold">trusted and growing</span>
                <br />
                brand.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-blue-100">
                We specialize in:
              </h3>
              
              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-white/20 hover:border-blue-300/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 cursor-pointer animate-[fade-in_0.6s_ease-out] hover:animate-pulse"
                      style={{ 
                        animationDelay: service.delay,
                        transform: `translateY(${scrollY * 0.01 * (index + 1)}px)`
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-400/30 transition-colors duration-300">
                          <IconComponent className="text-blue-300 group-hover:text-white transition-colors duration-300" size={20} />
                        </div>
                        <span className="text-blue-100 group-hover:text-white transition-colors duration-300 font-medium">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div 
            id="contact" 
            className="flex justify-center lg:justify-end animate-[fade-in_1s_ease-out_0.6s_both]"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          >
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl max-w-md w-full hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 border border-white/20">
              <CardHeader className="text-center pb-4 bg-gradient-to-r from-blue-50 to-white rounded-t-lg">
                <CardTitle className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Contact Us</CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto"></div>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-5">
                  <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <MapPin className="text-blue-700 mt-1 flex-shrink-0" size={22} />
                    <div className="text-gray-700 leading-relaxed">
                      <p className="font-semibold">118 Travellers Lane</p>
                      <p>Hatfield AL10 8SG</p>
                      <p className="text-blue-600 font-medium">United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <Phone className="text-blue-700 flex-shrink-0" size={22} />
                    <a href="tel:+447304077686" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-lg">
                      +44 7304 077686
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <Mail className="text-blue-700 flex-shrink-0" size={22} />
                    <a href="mailto:dennisboakye800@gmail.com" className="text-gray-700 hover:text-blue-700 transition-colors break-all font-medium">
                      dennisboakye800@gmail.com
                    </a>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;