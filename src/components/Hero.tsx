import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-farmer.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Crop Intelligence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Empower Your Farm with
            <span className="block text-accent">Smart Decisions</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            AltCrop uses cutting-edge AI and counterfactual analysis to help farmers explore 
            "what-if" scenarios and make informed crop choices for maximum yield and sustainability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button variant="hero" size="xl" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">95%</div>
              <div className="text-sm text-primary-foreground/80">Decision Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10,000+</div>
              <div className="text-sm text-primary-foreground/80">Farmers Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">25%</div>
              <div className="text-sm text-primary-foreground/80">Yield Increase</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;