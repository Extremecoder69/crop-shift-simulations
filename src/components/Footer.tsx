import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "API Documentation", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact", href: "#contact" },
      { name: "Community", href: "#" },
      { name: "Training", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with CropShift</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest farming insights, AI updates, and seasonal tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="cta" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-accent">CropShift</span>
              </div>
              <p className="text-primary-foreground/80 mb-6">
                Empowering farmers worldwide with AI-driven insights and counterfactual analysis 
                for smarter crop decisions and sustainable agriculture.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-primary-foreground/80">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@cropshift.com
                </div>
                <div className="flex items-center text-sm text-primary-foreground/80">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-sm text-primary-foreground/80">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
            © 2024 CropShift. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;