import { Link } from "react-router-dom";
import { Heart, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">B</span>
              </div>
              <span className="text-xl font-bold">Beyond The Flow</span>
            </div>
            <p className="text-background/70 text-sm">
              Empowering lives, one period at a time. Breaking stigmas and building futures.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/learn" className="hover:text-primary transition-colors">Learning Hub</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/get-involved" className="hover:text-primary transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/tracker" className="hover:text-primary transition-colors">Period Tracker</Link></li>
              <li><Link to="/ask-iris" className="hover:text-primary transition-colors">Ask Iris</Link></li>
              <li><Link to="/arcade" className="hover:text-primary transition-colors">Flow Arcade</Link></li>
              <li><Link to="/impact" className="hover:text-primary transition-colors">Our Impact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} Beyond The Flow. All rights reserved.
          </p>
          <p className="text-sm text-background/70 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-secondary fill-secondary" /> in Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
