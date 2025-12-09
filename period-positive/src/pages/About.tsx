import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Heart, Linkedin, Twitter } from "lucide-react";

const flipCards = [
  {
    icon: Eye,
    title: "Our Vision",
    front: "A world where menstruation is celebrated",
    back: "We envision a future where every person who menstruates has access to education, products, and support—free from shame or stigma.",
    color: "bg-primary",
  },
  {
    icon: Target,
    title: "Our Mission",
    front: "Breaking barriers through education",
    back: "To educate, equip, and empower communities with knowledge and resources for menstrual health and hygiene.",
    color: "bg-accent",
  },
  {
    icon: Heart,
    title: "Our Values",
    front: "Empathy • Dignity • Impact",
    back: "We believe in treating everyone with respect, prioritizing dignity in all our work, and creating lasting positive change.",
    color: "bg-secondary",
  },
];

export default function About() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond The Flow is more than an organization—it's a movement dedicated to transforming 
            how the world views and supports menstrual health.
          </p>
        </div>
      </section>

      {/* Flip Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {flipCards.map((card, index) => (
              <div
                key={card.title}
                className="perspective-1000 h-80 cursor-pointer"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    flippedCards.includes(index) ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedCards.includes(index) ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <Card
                    className="absolute inset-0 backface-hidden border-0 shadow-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center">
                      <div
                        className={`w-20 h-20 ${card.color} rounded-2xl flex items-center justify-center mb-6`}
                      >
                        <card.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                      <p className="text-muted-foreground">{card.front}</p>
                      <p className="text-sm text-primary mt-4">Click to flip →</p>
                    </CardContent>
                  </Card>

                  {/* Back */}
                  <Card
                    className={`absolute inset-0 ${card.color} border-0 shadow-lg`}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <CardContent className="h-full flex flex-col items-center justify-center p-8 text-center text-white">
                      <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                      <p className="text-white/90">{card.back}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Spotlight */}
      <section className="py-20 bg-foreground text-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Leadership Spotlight</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-background/10 border-background/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/20 flex items-center justify-center p-8">
                    <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary-foreground">NK</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-background mb-2">Njeri Kamau</h3>
                    <p className="text-primary mb-4">Founder & Executive Director</p>
                    <p className="text-background/80 mb-6">
                      Njeri is a passionate advocate for menstrual equity, having dedicated her career to 
                      breaking down barriers and empowering young people across Kenya with knowledge and resources.
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="text-background/60 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-background/60 hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-center">
              Beyond The Flow began with a simple observation: too many young people were missing school, 
              losing opportunities, and facing shame simply because of a natural biological process.
            </p>
            <p className="text-center mt-4">
              What started as a small community initiative has grown into a comprehensive movement 
              that combines education, product distribution, and advocacy to create lasting change 
              in how menstruation is perceived and supported across Kenya and beyond.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
