import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, GitBranch, Users, BarChart3, Shield, Lightbulb } from "lucide-react";
import aiIcon from "@/assets/ai-icon.png";
import scenariosIcon from "@/assets/scenarios-icon.png";
import autonomyIcon from "@/assets/autonomy-icon.png";

const Features = () => {
  const features = [
    {
      icon: Brain,
      image: aiIcon,
      title: "AI-Powered Recommendations",
      description: "Advanced machine learning algorithms analyze your farm data to provide personalized crop suggestions based on soil, climate, and market conditions.",
      benefits: ["Soil analysis integration", "Weather pattern recognition", "Market trend analysis", "Personalized insights"]
    },
    {
      icon: GitBranch,
      image: scenariosIcon,
      title: "What-If Scenario Analysis",
      description: "Explore counterfactual scenarios to understand the impact of different crop choices before making critical farming decisions.",
      benefits: ["Risk assessment", "Profit projections", "Resource optimization", "Decision confidence"]
    },
    {
      icon: Users,
      image: autonomyIcon,
      title: "Enhanced Farmer Autonomy",
      description: "Maintain control over your farming decisions while leveraging AI insights to make more informed and empowered choices.",
      benefits: ["Transparent reasoning", "Educational insights", "Decision support", "Skill development"]
    },
    {
      icon: BarChart3,
      image: null,
      title: "Data-Driven Insights",
      description: "Transform complex agricultural data into actionable insights with easy-to-understand visualizations and recommendations.",
      benefits: ["Visual analytics", "Performance tracking", "Trend identification", "Yield optimization"]
    },
    {
      icon: Shield,
      image: null,
      title: "Risk Mitigation",
      description: "Identify potential challenges and risks before they impact your crops, with proactive recommendations for prevention.",
      benefits: ["Early warning system", "Climate adaptation", "Pest management", "Disease prevention"]
    },
    {
      icon: Lightbulb,
      image: null,
      title: "Continuous Learning",
      description: "Our AI system learns from your farm's unique conditions and outcomes to provide increasingly accurate recommendations.",
      benefits: ["Adaptive algorithms", "Local optimization", "Seasonal adjustments", "Performance improvement"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="block text-primary">Smart Farming</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AltCrop combines cutting-edge technology with farmer-centric design to deliver 
            the tools you need for successful, sustainable agriculture.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-feature transition-all duration-300 bg-gradient-card border-border/50">
              <CardHeader className="text-center pb-4">
                {/* Icon or Image */}
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <feature.icon className="w-8 h-8 text-primary" />
                  )}
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="feature" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-hero text-primary-foreground border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Farm?</h3>
              <p className="mb-6 text-primary-foreground/90">
                Join thousands of farmers who are already making smarter decisions with AltCrop.
              </p>
              <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Start Your Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;