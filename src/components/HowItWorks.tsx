import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, TrendingUp, Sprout } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Your Data",
      description: "Share your farm's soil data, climate information, and historical crop performance with our secure platform."
    },
    {
      icon: Brain,
      number: "02", 
      title: "AI Analysis",
      description: "Our advanced algorithms analyze your data alongside market trends, weather patterns, and agricultural best practices."
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Explore Scenarios",
      description: "Review personalized recommendations and explore 'what-if' scenarios to understand the potential impact of different crop choices."
    },
    {
      icon: Sprout,
      number: "04",
      title: "Make Informed Decisions",
      description: "Use the insights to make confident, data-driven decisions that optimize your yield, profit, and sustainability."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How AltCrop
            <span className="block text-primary">Works for You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our simple, four-step process transforms complex agricultural data into 
            actionable insights that empower your farming decisions.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <Card key={index} className="text-center bg-card hover:shadow-feature transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero text-primary-foreground rounded-full text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <step.icon className="w-12 h-12 text-primary mx-auto" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5 Min</div>
            <div className="text-muted-foreground">Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">AI Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">Real-time</div>
            <div className="text-muted-foreground">Recommendations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;