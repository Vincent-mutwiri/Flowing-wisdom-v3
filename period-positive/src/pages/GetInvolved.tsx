import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, Gift, Package, DollarSign, CheckCircle, ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const donationAmounts = [5, 10, 25, 50, 100];

const donationImpact: Record<number, string> = {
  5: "Provides hygiene education materials for 2 students",
  10: "Supplies a reusable pad kit for 1 girl",
  25: "Provides 3 months of menstrual products",
  50: "Sponsors a full workshop for 10 students",
  100: "Supports an ambassador for 1 month",
};

const sponsorKits = [
  { id: 1, name: "Starter Kit", price: 15, items: ["3 reusable pads", "Pouch", "Soap", "Guide booklet"], emoji: "🌱" },
  { id: 2, name: "Full Kit", price: 25, items: ["6 reusable pads", "Pouch", "Soap", "Underwear", "Guide booklet"], emoji: "🌸" },
  { id: 3, name: "Annual Kit", price: 50, items: ["12 reusable pads", "2 pouches", "Soap supply", "3 underwear", "Full curriculum"], emoji: "🌟" },
];

export default function GetInvolved() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleDonate = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    // In production, this would integrate with Stripe
    alert(`Thank you for your ${donationType} donation of $${amount}! This is a demo.`);
  };

  return (
    <Layout>
      <section className="py-20 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our mission to end period poverty and stigma. Every action makes a difference.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="donate" className="space-y-8">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3">
              <TabsTrigger value="donate"><Heart className="h-4 w-4 mr-1" /> Donate</TabsTrigger>
              <TabsTrigger value="volunteer"><Users className="h-4 w-4 mr-1" /> Volunteer</TabsTrigger>
              <TabsTrigger value="ambassador"><Award className="h-4 w-4 mr-1" /> Ambassador</TabsTrigger>
            </TabsList>

            {/* Donate Tab */}
            <TabsContent value="donate">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Donation Form */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Gift className="h-5 w-5 text-primary" />
                        Make a Donation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Donation Type Toggle */}
                      <div className="flex gap-2 p-1 bg-muted rounded-lg w-fit">
                        <Button
                          variant={donationType === "one-time" ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setDonationType("one-time")}
                        >
                          One-Time
                        </Button>
                        <Button
                          variant={donationType === "monthly" ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setDonationType("monthly")}
                        >
                          Monthly
                        </Button>
                      </div>

                      {/* Amount Selection */}
                      <div>
                        <p className="text-sm font-medium mb-3">Select Amount (USD)</p>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                          {donationAmounts.map((amount) => (
                            <Button
                              key={amount}
                              variant={selectedAmount === amount && !customAmount ? "default" : "outline"}
                              onClick={() => {
                                setSelectedAmount(amount);
                                setCustomAmount("");
                              }}
                              className="h-12"
                            >
                              ${amount}
                            </Button>
                          ))}
                        </div>
                        <div className="mt-4">
                          <Input
                            type="number"
                            placeholder="Custom amount"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value);
                              setSelectedAmount(null);
                            }}
                            className="max-w-xs"
                          />
                        </div>
                      </div>

                      {/* Impact Message */}
                      {(selectedAmount || customAmount) && (
                        <div className="p-4 bg-accent/10 rounded-lg border border-accent/30">
                          <p className="text-sm font-medium flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent-foreground" />
                            Your Impact:
                          </p>
                          <p className="text-muted-foreground text-sm mt-1">
                            {customAmount
                              ? `Your $${customAmount} donation will directly support menstrual health education and product distribution.`
                              : donationImpact[selectedAmount!]}
                          </p>
                        </div>
                      )}

                      <Button size="lg" className="w-full" onClick={handleDonate}>
                        <DollarSign className="h-4 w-4 mr-2" />
                        Donate ${customAmount || selectedAmount || 0} {donationType === "monthly" && "/month"}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        🔒 Secure payment processed by Stripe (Demo)
                      </p>
                    </CardContent>
                  </Card>

                  {/* Sponsor a Kit */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        Sponsor a Kit
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Directly provide menstrual supplies to a girl in need
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        {sponsorKits.map((kit) => (
                          <Card key={kit.id} className="border-2 hover:border-primary transition-colors">
                            <CardContent className="p-4 text-center">
                              <div className="text-4xl mb-3">{kit.emoji}</div>
                              <h3 className="font-bold">{kit.name}</h3>
                              <p className="text-2xl font-bold text-primary my-2">${kit.price}</p>
                              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                                {kit.items.map((item, idx) => (
                                  <li key={idx}>• {item}</li>
                                ))}
                              </ul>
                              <Button className="w-full" size="sm">
                                Sponsor This Kit
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card className="bg-foreground text-background">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-4">Why Donate?</h3>
                      <ul className="space-y-3">
                        {[
                          "100% goes to programs",
                          "Transparent impact reports",
                          "Tax-deductible",
                          "Join 1000+ supporters",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-background/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="text-4xl font-bold text-primary mb-2">$125,000+</p>
                      <p className="text-muted-foreground">Raised in 2023</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Volunteer Tab */}
            <TabsContent value="volunteer">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Become a Volunteer</CardTitle>
                      <p className="text-muted-foreground">
                        Share your skills and time to help us make a difference
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <Input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">I'm interested in:</p>
                        <div className="flex flex-wrap gap-2">
                          {["Workshop Facilitation", "Content Creation", "Event Support", "Outreach", "Translation"].map(
                            (skill) => (
                              <Badge key={skill} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                                {skill}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                      <Textarea
                        placeholder="Tell us about yourself and why you want to volunteer..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                      <Button className="w-full">
                        Submit Application
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Volunteer Benefits</h3>
                      <ul className="space-y-3">
                        {[
                          "Make a real impact in your community",
                          "Develop leadership and facilitation skills",
                          "Join a passionate network of changemakers",
                          "Receive training and certification",
                          "Flexible time commitment",
                        ].map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-1" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Contact Us</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>volunteer@beyondtheflow.org</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>+254 700 000 000</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>Nairobi, Kenya</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Ambassador Tab */}
            <TabsContent value="ambassador">
              <div className="max-w-3xl mx-auto">
                <Card className="overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-accent p-8 text-white text-center">
                    <Award className="h-16 w-16 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-2">Youth Ambassador Program</h2>
                    <p className="text-white/90">
                      Become a leader in menstrual health advocacy in your community
                    </p>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-bold text-lg mb-4">What You'll Do</h3>
                        <ul className="space-y-2">
                          {[
                            "Lead workshops in your school/community",
                            "Distribute menstrual products",
                            "Create awareness content",
                            "Mentor younger students",
                            "Represent BTF at events",
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-4">What You'll Get</h3>
                        <ul className="space-y-2">
                          {[
                            "Comprehensive training program",
                            "Official certification",
                            "Leadership development",
                            "Networking opportunities",
                            "Monthly stipend for active ambassadors",
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-accent-foreground" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6 mb-6">
                      <h3 className="font-bold mb-2">Requirements</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ages 15-25</li>
                        <li>• Passionate about menstrual health advocacy</li>
                        <li>• Committed to at least 6 months of service</li>
                        <li>• Available for monthly training sessions</li>
                      </ul>
                    </div>

                    <Button size="lg" className="w-full">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
