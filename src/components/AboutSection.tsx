import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar, BookOpen } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-card-gradient">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering the Next Generation of <span className="hero-text">AI Innovators</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our community is built on the belief that the future of AI is collaborative. 
              We bring together minds from diverse backgrounds to share knowledge, solve challenges, 
              and push the boundaries of what's possible with generative AI.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageCircle className="w-4 h-4 text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Active Discussions</h3>
                  <p className="text-muted-foreground">Engage in daily conversations about the latest AI developments and breakthroughs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="w-4 h-4 text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Weekly Events</h3>
                  <p className="text-muted-foreground">Join workshops, webinars, and networking sessions with industry experts.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-electric-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-4 h-4 text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Learning Resources</h3>
                  <p className="text-muted-foreground">Access curated courses, tutorials, and research papers from top institutions.</p>
                </div>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-electric-blue/20 rounded-2xl p-8 border border-electric-blue/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric-blue mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Member Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric-blue mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Community Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric-blue mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Mentors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-electric-blue mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Active Support</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-electric-blue rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};