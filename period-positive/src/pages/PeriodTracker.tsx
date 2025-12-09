import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Shield, Droplets, Moon, Sun, Zap, Smile, Frown, Meh, Heart, Coffee, Cookie, Brain, ExternalLink } from "lucide-react";

const symptoms = [
  { id: "cramps", label: "Cramps", icon: Zap, color: "bg-secondary" },
  { id: "headache", label: "Headache", icon: Brain, color: "bg-primary" },
  { id: "fatigue", label: "Fatigue", icon: Coffee, color: "bg-accent" },
  { id: "bloating", label: "Bloating", icon: Cookie, color: "bg-secondary" },
  { id: "cravings", label: "Cravings", icon: Heart, color: "bg-primary" },
];

const moods = [
  { id: "happy", icon: Smile, label: "Happy", color: "text-accent-foreground" },
  { id: "neutral", icon: Meh, label: "Okay", color: "text-muted-foreground" },
  { id: "sad", icon: Frown, label: "Low", color: "text-secondary" },
];

const flowLevels = [
  { id: "light", label: "Light", drops: 1 },
  { id: "medium", label: "Medium", drops: 2 },
  { id: "heavy", label: "Heavy", drops: 3 },
];

const tips: Record<string, { title: string; content: string; emoji: string }> = {
  "follicular": {
    title: "Follicular Phase",
    content: "Energy levels rising! Great time for new projects and social activities. Your body is preparing for ovulation.",
    emoji: "🌱",
  },
  "ovulation": {
    title: "Ovulation Phase",
    content: "Peak energy and confidence! You might feel more social and creative. Stay hydrated!",
    emoji: "✨",
  },
  "luteal": {
    title: "Luteal Phase",
    content: "Wind-down time. Focus on self-care, gentle exercise, and nourishing foods. Rest when needed.",
    emoji: "🍂",
  },
  "menstrual": {
    title: "Menstrual Phase",
    content: "Time for rest and reflection. Iron-rich foods help replenish your body. Be gentle with yourself!",
    emoji: "🌸",
  },
};

export default function PeriodTracker() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [incognitoMode, setIncognitoMode] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);
  const [loggedDays, setLoggedDays] = useState<number[]>([5, 6, 7, 8, 9]); // Example period days

  const currentPhase = "luteal"; // Would be calculated based on cycle

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com");
  };

  const predictedPeriod = [24, 25, 26, 27, 28]; // Example predicted days
  const today = new Date().getDate();

  return (
    <Layout>
      {/* Privacy Banner */}
      {incognitoMode && (
        <div className="bg-accent/20 border-b border-accent/30 py-2">
          <div className="container flex items-center justify-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-accent-foreground" />
            <span>Privacy Mode Active - No data is saved</span>
          </div>
        </div>
      )}

      <section className="py-8">
        <div className="container">
          {/* Header with Privacy Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Period Tracker</h1>
              <p className="text-muted-foreground">Track your cycle privately and learn about your body</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Privacy Mode</span>
                <Switch checked={incognitoMode} onCheckedChange={setIncognitoMode} />
              </div>
              <Button variant="destructive" size="sm" onClick={handleQuickExit}>
                <ExternalLink className="h-4 w-4 mr-1" /> Exit
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle>{monthName}</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="p-2 text-sm font-medium text-muted-foreground">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="p-2" />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const isPeriod = loggedDays.includes(day);
                      const isPredicted = predictedPeriod.includes(day);
                      const isToday = day === today;

                      return (
                        <button
                          key={day}
                          className={`aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all hover:scale-110 ${
                            isPeriod
                              ? "bg-primary text-primary-foreground"
                              : isPredicted
                              ? "bg-primary/30 border-2 border-dashed border-primary"
                              : isToday
                              ? "border-2 border-foreground"
                              : "hover:bg-muted"
                          }`}
                          onClick={() => {
                            if (!incognitoMode) {
                              setLoggedDays((prev) =>
                                prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
                              );
                            }
                          }}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                      <span>Period</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/30 border-2 border-dashed border-primary" />
                      <span>Predicted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-foreground" />
                      <span>Today</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Log */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Log Today</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Flow Level */}
                  <div>
                    <p className="text-sm font-medium mb-3">Flow Level</p>
                    <div className="flex gap-3">
                      {flowLevels.map((flow) => (
                        <Button
                          key={flow.id}
                          variant={selectedFlow === flow.id ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => setSelectedFlow(flow.id)}
                        >
                          <div className="flex items-center gap-1">
                            {Array.from({ length: flow.drops }).map((_, i) => (
                              <Droplets key={i} className="h-4 w-4" />
                            ))}
                          </div>
                          <span className="ml-2">{flow.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Symptoms */}
                  <div>
                    <p className="text-sm font-medium mb-3">Symptoms</p>
                    <div className="flex flex-wrap gap-2">
                      {symptoms.map((symptom) => (
                        <Button
                          key={symptom.id}
                          variant={selectedSymptoms.includes(symptom.id) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleSymptom(symptom.id)}
                          className={selectedSymptoms.includes(symptom.id) ? symptom.color : ""}
                        >
                          <symptom.icon className="h-4 w-4 mr-1" />
                          {symptom.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Mood */}
                  <div>
                    <p className="text-sm font-medium mb-3">Mood</p>
                    <div className="flex gap-3">
                      {moods.map((mood) => (
                        <Button
                          key={mood.id}
                          variant={selectedMood === mood.id ? "default" : "outline"}
                          className="flex-1"
                          onClick={() => setSelectedMood(mood.id)}
                        >
                          <mood.icon className={`h-5 w-5 mr-2 ${mood.color}`} />
                          {mood.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" disabled={incognitoMode}>
                    {incognitoMode ? "Privacy Mode - Not Saved" : "Save Today's Log"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Cycle Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Moon className="h-5 w-5 text-primary" />
                    Cycle Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current Phase</span>
                    <Badge className="bg-primary">{tips[currentPhase].title}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Cycle Length</span>
                    <span className="font-medium">28 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Days Until Period</span>
                    <span className="font-medium">12 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Average Period</span>
                    <span className="font-medium">5 days</span>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Tip */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{tips[currentPhase].emoji}</div>
                  <h3 className="font-bold mb-2">{tips[currentPhase].title}</h3>
                  <p className="text-sm text-muted-foreground">{tips[currentPhase].content}</p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sun className="h-5 w-5 text-accent-foreground" />
                    This Month
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Days Logged</span>
                    <span className="font-medium">{loggedDays.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Most Common Symptom</span>
                    <span className="font-medium">Cramps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Average Mood</span>
                    <Smile className="h-5 w-5 text-accent-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
