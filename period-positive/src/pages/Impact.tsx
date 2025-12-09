import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Package, Users, Scale, MessageCircle, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedStat({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

const pillars = [
  {
    id: "literacy",
    title: "Menstrual Literacy",
    icon: BookOpen,
    color: "bg-primary",
    stats: [
      { value: 5000, label: "Students Educated", suffix: "+" },
      { value: 50, label: "Schools Reached", suffix: "+" },
      { value: 95, label: "Knowledge Retention", suffix: "%" },
    ],
    content: "Through interactive workshops and engaging curriculum, we've transformed how young people understand and talk about menstruation. Our peer-led education model ensures information is relatable, accurate, and empowering.",
    testimonial: {
      quote: "Before the workshop, I was embarrassed to even say the word 'period.' Now I educate my friends and family!",
      author: "Faith, 15, Nairobi",
    },
  },
  {
    id: "solutions",
    title: "Sustainable Solutions",
    icon: Package,
    color: "bg-accent",
    stats: [
      { value: 10000, label: "Kits Distributed", suffix: "+" },
      { value: 85, label: "Use Reusables Now", suffix: "%" },
      { value: 12, label: "Counties Covered", suffix: "" },
    ],
    content: "We provide sustainable menstrual products including reusable pads, menstrual cups, and period underwear. Each kit comes with education on proper use and care, ensuring long-term impact.",
    testimonial: {
      quote: "The reusable pads changed everything. I no longer miss school, and my family saves money.",
      author: "Grace, 14, Mombasa",
    },
  },
  {
    id: "ambassadors",
    title: "Youth Ambassadors",
    icon: Users,
    color: "bg-secondary",
    stats: [
      { value: 200, label: "Active Ambassadors", suffix: "+" },
      { value: 20, label: "Counties Represented", suffix: "" },
      { value: 15000, label: "People Reached", suffix: "+" },
    ],
    content: "Our Ambassador Program trains young leaders to become menstrual health advocates in their communities. These peer educators lead workshops, distribute products, and challenge stigma daily.",
    testimonial: {
      quote: "Being an ambassador gave me purpose. I'm proud to help other girls stay in school.",
      author: "Sarah, Ambassador, Kisumu",
    },
  },
  {
    id: "policy",
    title: "Policy Advocacy",
    icon: Scale,
    color: "bg-primary",
    stats: [
      { value: 3, label: "Policy Wins", suffix: "" },
      { value: 10, label: "Partnerships", suffix: "+" },
      { value: 5, label: "Gov't Collaborations", suffix: "" },
    ],
    content: "We work with policymakers to ensure menstrual health is prioritized in education and healthcare policy. Our advocacy has contributed to increased funding for menstrual products in schools.",
    testimonial: {
      quote: "Beyond The Flow's research and advocacy has been instrumental in shaping our county's menstrual health policy.",
      author: "County Health Official",
    },
  },
  {
    id: "silence",
    title: "Breaking Silence",
    icon: MessageCircle,
    color: "bg-accent",
    stats: [
      { value: 100000, label: "Social Reach", suffix: "+" },
      { value: 50, label: "Media Features", suffix: "+" },
      { value: 12, label: "Campaigns", suffix: "" },
    ],
    content: "Through social media, community events, and media partnerships, we're normalizing conversations about menstruation. Our campaigns challenge myths and celebrate periods openly.",
    testimonial: {
      quote: "Their social media content made me realize periods aren't something to hide. It's just biology!",
      author: "James, 17, Nairobi",
    },
  },
];

export default function Impact() {
  return (
    <Layout>
      <section className="py-20 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real change, measured results. See how we're transforming lives through our five pillars of impact.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="literacy" className="space-y-8">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent">
              {pillars.map((pillar) => (
                <TabsTrigger
                  key={pillar.id}
                  value={pillar.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                >
                  <pillar.icon className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{pillar.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {pillars.map((pillar) => (
              <TabsContent key={pillar.id} value={pillar.id}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${pillar.color} text-white`}>
                      <pillar.icon className="h-5 w-5" />
                      <span className="font-medium">{pillar.title}</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">{pillar.content}</p>
                    
                    {/* Animated Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {pillar.stats.map((stat) => (
                        <Card key={stat.label} className="text-center">
                          <CardContent className="p-4">
                            <p className="text-2xl md:text-3xl font-bold text-primary">
                              <AnimatedStat value={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Testimonial */}
                    <Card className="bg-foreground text-background">
                      <CardContent className="p-8">
                        <MessageCircle className="h-8 w-8 text-primary mb-4" />
                        <blockquote className="text-lg italic mb-4">"{pillar.testimonial.quote}"</blockquote>
                        <p className="text-background/70">— {pillar.testimonial.author}</p>
                      </CardContent>
                    </Card>

                    {/* Photo Placeholder */}
                    <Card className="overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                        <div className="text-center">
                          <TrendingUp className="h-12 w-12 text-primary mx-auto mb-2" />
                          <p className="text-muted-foreground">Impact in Action</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
