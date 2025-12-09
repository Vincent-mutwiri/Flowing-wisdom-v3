import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Our Impact", path: "/impact" },
  { name: "Learning Hub", path: "/learn" },
  { name: "Ask Iris", path: "/ask-iris" },
  { name: "Flow Arcade", path: "/arcade" },
  { name: "Period Tracker", path: "/tracker" },
  { name: "Get Involved", path: "/get-involved" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">B</span>
          </div>
          <span className="text-xl font-bold text-foreground">Beyond The Flow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-primary/10 hover:scale-105 ${
                location.pathname === link.path
                  ? "bg-primary/20 text-primary"
                  : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={handleQuickExit}
            variant="destructive"
            size="sm"
            className="flex items-center gap-1 animate-pulse hover:animate-none"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Quick Exit</span>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      location.pathname === link.path
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
