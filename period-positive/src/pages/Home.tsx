import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Package, Users, Calendar, Brain, Gamepad2, ArrowRight } from "lucide-react";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

const pillars = [
  {
    icon: BookOpen,
    title: "Educate",
    description: "Breaking myths and spreading knowledge about menstrual health",
    color: "bg-primary",
  },
  {
    icon: Package,
    title: "Equip",
    description: "Providing sustainable menstrual products to those in need",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Empower",
    description: "Building confident advocates for menstrual equity",
    color: "bg-secondary",
  },
];

const quickLinks = [
  { icon: Brain, title: "Learning Hub", description: "Interactive lessons & videos", path: "/learn" },
  { icon: Calendar, title: "Period Tracker", description: "Track your cycle privately", path: "/tracker" },
  { icon: Gamepad2, title: "Flow Arcade", description: "Learn while playing games", path: "/arcade" },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Empowering Lives,
            <br />
            <span className="text-primary">One Period at a Time</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Breaking stigmas, building knowledge, and creating a world where menstruation is celebrated, not hidden.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
              <Link to="/learn">Start Learning</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={5000} suffix="+" />
              </p>
              <p className="text-muted-foreground">Lives Touched</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-accent-foreground">
                <AnimatedCounter end={50} suffix="+" />
              </p>
              <p className="text-muted-foreground">Schools Reached</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-secondary">
                <AnimatedCounter end={200} suffix="+" />
              </p>
              <p className="text-muted-foreground">Ambassadors</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">
                <AnimatedCounter end={10000} suffix="+" />
              </p>
              <p className="text-muted-foreground">Kits Distributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Three Pillars</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The foundation of our mission to transform menstrual health education
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-foreground text-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path} className="group">
                <Card className="bg-background/10 border-background/20 hover:bg-background/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <link.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-background text-lg">{link.title}</h3>
                      <p className="text-background/70 text-sm">{link.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-background/50 group-hover:translate-x-1 transition-transform" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join our community of changemakers and help us break the stigma around menstruation.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
            <Link to="/get-involved">Join The Movement</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
