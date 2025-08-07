import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Farmer-First Approach",
      description: "Every feature is designed with farmers' real needs and challenges in mind, ensuring practical solutions that work in the field."
    },
    {
      icon: Target,
      title: "Transparent AI",
      description: "We believe in explainable AI that farmers can understand and trust, never black-box solutions that hide their reasoning."
    },
    {
      icon: Award,
      title: "Scientific Excellence",
      description: "Our algorithms are based on peer-reviewed research and validated by agricultural experts worldwide."
    },
    {
      icon: Globe,
      title: "Sustainable Future",
      description: "We're committed to promoting practices that protect the environment while maximizing agricultural productivity."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About
            <span className="block text-primary">CropShift</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to democratize agricultural intelligence and empower 
            farmers worldwide with the tools they need to thrive in an changing world.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto bg-gradient-card border-border/50">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To transform agriculture through artificial intelligence that enhances farmer decision-making, 
                promotes sustainable practices, and increases food security for communities worldwide. 
                We believe that when farmers have access to better information, everyone benefits.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="bg-card hover:shadow-feature transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  RC
                </div>
                <h4 className="font-semibold mb-1 text-card-foreground">Rahul Chitturi</h4>
                <p className="text-sm text-primary mb-2">Lead Developer & Co-Founder</p>
                <p className="text-sm text-muted-foreground">BTech 4th Year Computer Science, VIT Vellore</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  NY
                </div>
                <h4 className="font-semibold mb-1 text-card-foreground">N. Yashwanth</h4>
                <p className="text-sm text-primary mb-2">AI Engineer & Co-Founder</p>
                <p className="text-sm text-muted-foreground">BTech 4th Year Computer Science, VIT Vellore</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  SN
                </div>
                <h4 className="font-semibold mb-1 text-card-foreground">Saketh Notu</h4>
                <p className="text-sm text-primary mb-2">Product Manager & Co-Founder</p>
                <p className="text-sm text-muted-foreground">BTech 4th Year Computer Science, VIT Vellore</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-hero text-primary-foreground border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
              <p className="mb-6 text-primary-foreground/90">
                Be part of the agricultural revolution. Connect with farmers, researchers, and 
                innovators who are shaping the future of farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact Our Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;