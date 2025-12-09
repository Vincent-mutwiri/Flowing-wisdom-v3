import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, Gamepad2, Search, Clock, Star, Lock, CheckCircle, Flame, Award } from "lucide-react";

const videoLessons = [
  { id: 1, title: "Understanding Your Cycle", duration: "5 min", thumbnail: "🌸", completed: true, category: "Basics" },
  { id: 2, title: "Busting Period Myths", duration: "4 min", thumbnail: "💡", completed: true, category: "Myths" },
  { id: 3, title: "Hygiene Best Practices", duration: "6 min", thumbnail: "✨", completed: false, category: "Hygiene" },
  { id: 4, title: "Managing Cramps Naturally", duration: "5 min", thumbnail: "🌿", completed: false, category: "Self-Care" },
  { id: 5, title: "Nutrition During Your Period", duration: "4 min", thumbnail: "🥗", completed: false, category: "Nutrition" },
  { id: 6, title: "Talking About Periods", duration: "3 min", thumbnail: "💬", completed: false, category: "Communication" },
];

const articles = [
  { id: 1, title: "The Science of Menstruation", category: "Puberty", readTime: "5 min", emoji: "🔬" },
  { id: 2, title: "Period Products: A Complete Guide", category: "Hygiene", readTime: "8 min", emoji: "📦" },
  { id: 3, title: "10 Common Myths Debunked", category: "Myths", readTime: "6 min", emoji: "🚫" },
  { id: 4, title: "Foods That Help With Cramps", category: "Nutrition", readTime: "4 min", emoji: "🍌" },
  { id: 5, title: "Understanding PMS", category: "Self-Care", readTime: "7 min", emoji: "💭" },
  { id: 6, title: "When to See a Doctor", category: "Health", readTime: "5 min", emoji: "👩‍⚕️" },
];

const modules = [
  { 
    id: 1, 
    title: "Period Basics 101", 
    lessons: 5, 
    completed: 5, 
    badge: "Cycle Scholar", 
    unlocked: true,
    color: "bg-primary"
  },
  { 
    id: 2, 
    title: "Myth Busters", 
    lessons: 4, 
    completed: 2, 
    badge: "Myth Slayer", 
    unlocked: true,
    color: "bg-accent"
  },
  { 
    id: 3, 
    title: "Hygiene Heroes", 
    lessons: 6, 
    completed: 0, 
    badge: "Hygiene Champion", 
    unlocked: true,
    color: "bg-secondary"
  },
  { 
    id: 4, 
    title: "Self-Care Master", 
    lessons: 5, 
    completed: 0, 
    badge: "Wellness Warrior", 
    unlocked: false,
    color: "bg-primary"
  },
];

const badges = [
  { name: "First Lesson", emoji: "🌟", earned: true },
  { name: "7 Day Streak", emoji: "🔥", earned: true },
  { name: "Myth Buster", emoji: "💪", earned: true },
  { name: "Quiz Master", emoji: "🧠", earned: false },
  { name: "Share Star", emoji: "⭐", earned: false },
];

export default function LearningHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const streak = 7;
  const totalProgress = 35;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Hub</h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Your interactive journey to menstrual health mastery. Watch, read, play, and earn badges!
              </p>
            </div>
            
            {/* Progress Card */}
            <Card className="w-full lg:w-80">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Flame className="h-6 w-6 text-secondary" />
                    <span className="font-bold text-lg">{streak} day streak!</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="h-5 w-5 fill-primary" />
                    <span className="font-bold">350 XP</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>{totalProgress}%</span>
                  </div>
                  <Progress value={totalProgress} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 border-b">
        <div className="container">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search lessons, articles, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="modules" className="space-y-8">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-4">
              <TabsTrigger value="modules"><Gamepad2 className="h-4 w-4 mr-1" /> Modules</TabsTrigger>
              <TabsTrigger value="videos"><Play className="h-4 w-4 mr-1" /> Videos</TabsTrigger>
              <TabsTrigger value="articles"><BookOpen className="h-4 w-4 mr-1" /> Articles</TabsTrigger>
              <TabsTrigger value="badges"><Award className="h-4 w-4 mr-1" /> Badges</TabsTrigger>
            </TabsList>

            {/* Interactive Modules */}
            <TabsContent value="modules">
              <div className="grid md:grid-cols-2 gap-6">
                {modules.map((module) => (
                  <Card key={module.id} className={`relative overflow-hidden ${!module.unlocked ? "opacity-60" : ""}`}>
                    {!module.unlocked && (
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
                        <div className="text-center">
                          <Lock className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Complete previous modules to unlock</p>
                        </div>
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 ${module.color} rounded-xl flex items-center justify-center text-white font-bold`}>
                          {module.id}
                        </div>
                        {module.completed === module.lessons && (
                          <Badge className="bg-accent text-accent-foreground">
                            <CheckCircle className="h-3 w-3 mr-1" /> Complete
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="mt-4">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{module.completed}/{module.lessons} lessons</span>
                          <span>🏆 {module.badge}</span>
                        </div>
                        <Progress value={(module.completed / module.lessons) * 100} className="h-2" />
                        <Button className="w-full" disabled={!module.unlocked}>
                          {module.completed === 0 ? "Start Module" : module.completed === module.lessons ? "Review" : "Continue"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Video Lessons */}
            <TabsContent value="videos">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoLessons.map((video) => (
                  <Card key={video.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-36 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                      <span className="text-5xl">{video.thumbnail}</span>
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-6 w-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      {video.completed && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-accent-foreground" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2">{video.category}</Badge>
                      <h3 className="font-semibold mb-2">{video.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {video.duration}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Articles */}
            <TabsContent value="articles">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card key={article.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-2xl">{article.emoji}</span>
                      </div>
                      <Badge variant="outline" className="mb-3">{article.category}</Badge>
                      <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime} read
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Badges */}
            <TabsContent value="badges">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">Your Achievements</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {badges.map((badge) => (
                    <div
                      key={badge.name}
                      className={`text-center p-4 rounded-2xl border-2 transition-all ${
                        badge.earned
                          ? "border-primary bg-primary/5"
                          : "border-muted bg-muted/50 opacity-50"
                      }`}
                    >
                      <div className="text-4xl mb-2">{badge.emoji}</div>
                      <p className="text-sm font-medium">{badge.name}</p>
                      {badge.earned ? (
                        <CheckCircle className="h-4 w-4 text-primary mx-auto mt-2" />
                      ) : (
                        <Lock className="h-4 w-4 text-muted-foreground mx-auto mt-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="py-12 bg-foreground text-background">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Recommended For You</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {videoLessons.filter((v) => !v.completed).slice(0, 3).map((video) => (
              <Card key={video.id} className="flex-shrink-0 w-64 bg-background/10 border-background/20">
                <CardContent className="p-4">
                  <div className="h-24 rounded-lg bg-background/10 flex items-center justify-center mb-3">
                    <span className="text-3xl">{video.thumbnail}</span>
                  </div>
                  <h3 className="font-medium text-background">{video.title}</h3>
                  <p className="text-sm text-background/70">{video.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
