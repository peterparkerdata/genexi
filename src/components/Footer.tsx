import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 hero-text">Gen-AI Global Community</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Building the future of artificial intelligence through global collaboration, 
              innovation, and shared knowledge.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-electric-blue transition-colors">Join Now</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-electric-blue transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Slack</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Gen-AI Global Community. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-electric-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electric-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};