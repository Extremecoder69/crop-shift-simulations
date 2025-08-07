import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@altcrop.com",
      description: "We typically respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Monday - Friday, 9AM - 6PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Drive, San Francisco, CA 94105",
      description: "Schedule a meeting with our team"
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "24/7 Online Support",
      description: "AI-powered chat available anytime"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in
            <span className="block text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about AltCrop? Want to schedule a demo? 
            Our team is here to help you revolutionize your farming operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Smith" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmType">Farm Type</Label>
                <Input id="farmType" placeholder="e.g., Organic vegetables, Grain crops, Mixed farming" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your farming operation and how AltCrop can help..."
                  rows={5}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">How long does it take to see results?</h5>
                  <p className="text-sm text-muted-foreground">
                    Most farmers see valuable insights within the first week of using AltCrop, 
                    with full benefits realized over a complete growing season.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Is my farm data secure?</h5>
                  <p className="text-sm text-muted-foreground">
                    Absolutely. We use enterprise-grade security and never share your data 
                    with third parties without your explicit consent.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Do you offer training and support?</h5>
                  <p className="text-sm text-muted-foreground">
                    Yes! We provide comprehensive onboarding, training materials, 
                    and ongoing support to ensure you get the most out of AltCrop.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-hero text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">Need Immediate Assistance?</h4>
                <p className="text-primary-foreground/90 mb-4">
                  For urgent technical issues during critical farming periods, 
                  our emergency support line is available 24/7.
                </p>
                <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Call Emergency Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;