import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-card-gradient border border-electric-blue/30 rounded-full px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span>Welcome to the Future of AI</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="hero-text">Gen-AI</span>
          <br />
          <span className="text-foreground">Global Community</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of innovators, developers, and AI enthusiasts shaping the future of generative artificial intelligence. Connect, learn, and build together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Join Our Community
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="community" size="lg" className="text-lg px-8 py-4">
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-electric-blue mb-2">25K+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-electric-blue mb-2">180+</div>
            <div className="text-muted-foreground">Countries Represented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-electric-blue mb-2">500+</div>
            <div className="text-muted-foreground">AI Projects Shared</div>
          </div>
        </div>
      </div>
    </section>
  );
};