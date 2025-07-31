import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Organic Farmer, California",
      avatar: "/placeholder.svg",
      rating: 5,
      quote: "CropShift helped me increase my tomato yield by 30% while reducing water usage. The what-if scenarios were game-changing for my decision-making process."
    },
    {
      name: "James Chen",
      role: "Corn & Soybean Farmer, Iowa",
      avatar: "/placeholder.svg", 
      rating: 5,
      quote: "The AI recommendations saved me from a costly mistake last season. CropShift predicted the market downturn for corn and suggested diversifying into soybeans."
    },
    {
      name: "Sarah Johnson",
      role: "Sustainable Farm Owner, Vermont",
      avatar: "/placeholder.svg",
      rating: 5,
      quote: "Finally, an AI tool that explains its reasoning! I feel more confident in my farming decisions knowing the science behind the recommendations."
    },
    {
      name: "Miguel Santos",
      role: "Mixed Crop Farmer, Brazil",
      avatar: "/placeholder.svg",
      rating: 5,
      quote: "CropShift's counterfactual analysis helped me optimize my crop rotation. I'm seeing better soil health and higher profits than ever before."
    },
    {
      name: "Linda Thompson",
      role: "Fruit Orchard Owner, Oregon",
      avatar: "/placeholder.svg",
      rating: 5,
      quote: "The platform is so easy to use, even for someone like me who isn't tech-savvy. The insights have transformed how I plan my planting seasons."
    },
    {
      name: "David Kumar",
      role: "Rice Farmer, India",
      avatar: "/placeholder.svg",
      rating: 5,
      quote: "CropShift adapted to my local conditions perfectly. The AI learned from my farm's unique climate patterns and gave me incredibly accurate predictions."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Farmers
            <span className="block text-primary">Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how CropShift is empowering farmers across the globe to make better 
            decisions and achieve greater success.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-feature transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by agricultural institutions worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* You could add actual partner logos here */}
            <div className="px-6 py-3 bg-muted rounded-lg">Agricultural University Partners</div>
            <div className="px-6 py-3 bg-muted rounded-lg">USDA Approved</div>
            <div className="px-6 py-3 bg-muted rounded-lg">ISO Certified</div>
            <div className="px-6 py-3 bg-muted rounded-lg">Climate Smart Agriculture</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;