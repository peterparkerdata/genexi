import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Zap, Globe, Code, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Cutting-Edge Knowledge",
    description: "Stay updated with the latest AI research, breakthroughs, and industry trends from leading experts worldwide."
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with AI practitioners, researchers, and enthusiasts from every corner of the globe."
  },
  {
    icon: Zap,
    title: "Accelerate Learning",
    description: "Fast-track your AI journey with peer learning, mentorship, and collaborative projects."
  },
  {
    icon: Code,
    title: "Open Source Projects",
    description: "Contribute to and discover innovative open-source AI projects that shape the future."
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Brainstorm, prototype, and bring your AI ideas to life with like-minded innovators."
  },
  {
    icon: Globe,
    title: "24/7 Global Support",
    description: "Get help and support around the clock from our diverse, worldwide community."
  }
];

export const CommunityBenefits = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Join Our <span className="hero-text">Community?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the benefits of being part of the world's most vibrant Gen-AI community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card-gradient border-electric-blue/20 hover:border-electric-blue/40 transition-smooth hover-lift">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-electric-blue" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};