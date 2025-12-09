import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Flame, Star, CheckCircle, X, Medal, Crown, Sparkles } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "PeriodQueen", points: 2450, streak: 21, badge: "👑" },
  { rank: 2, name: "CycleWise", points: 2280, streak: 15, badge: "🥈" },
  { rank: 3, name: "FlowMaster", points: 2150, streak: 12, badge: "🥉" },
  { rank: 4, name: "MythBuster99", points: 1980, streak: 8, badge: "⭐" },
  { rank: 5, name: "WellnessWin", points: 1820, streak: 10, badge: "💪" },
  { rank: 6, name: "You", points: 1650, streak: 7, badge: "🌟", isUser: true },
  { rank: 7, name: "HealthHero", points: 1540, streak: 5, badge: "💫" },
  { rank: 8, name: "LearnQueen", points: 1420, streak: 6, badge: "📚" },
];

const factOrMythCards = [
  { statement: "You shouldn't exercise during your period", answer: "myth", explanation: "Light exercise can actually help reduce cramps!" },
  { statement: "Periods typically last 3-7 days", answer: "fact", explanation: "The average period lasts 3-7 days, though this varies." },
  { statement: "You can't get pregnant on your period", answer: "myth", explanation: "It's less likely but still possible to get pregnant." },
  { statement: "PMS is a real medical condition", answer: "fact", explanation: "PMS affects up to 75% of menstruating people." },
];

const jeopardyCategories = [
  { name: "Cycle Science", emoji: "🔬", questions: 5 },
  { name: "Myth Busters", emoji: "❌", questions: 5 },
  { name: "Body Basics", emoji: "🧬", questions: 5 },
  { name: "Self-Care", emoji: "💆", questions: 5 },
  { name: "Products 101", emoji: "📦", questions: 5 },
];

const badges = [
  { name: "Cycle Warrior", emoji: "⚔️", description: "Complete 10 quizzes", earned: true },
  { name: "Streak Master", emoji: "🔥", description: "7-day streak", earned: true },
  { name: "Myth Slayer", emoji: "🗡️", description: "Bust 20 myths", earned: false, progress: 75 },
  { name: "Jeopardy Champ", emoji: "🏆", description: "Win 5 Jeopardy games", earned: false, progress: 40 },
  { name: "Perfect Score", emoji: "💯", description: "Get 100% on any quiz", earned: true },
  { name: "Social Star", emoji: "⭐", description: "Share 3 facts", earned: false, progress: 33 },
];

export default function FlowArcade() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const handleSwipe = (answer: "fact" | "myth") => {
    const isCorrect = factOrMythCards[currentCard].answer === answer;
    setScore({
      correct: score.correct + (isCorrect ? 1 : 0),
      total: score.total + 1,
    });
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      if (currentCard < factOrMythCards.length - 1) {
        setCurrentCard(currentCard + 1);
      }
    }, 1500);
  };

  return (
    <Layout>
      <section className="py-12 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🎮 Flow Arcade</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn while you play! Test your knowledge, earn badges, and climb the leaderboard.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="games" className="space-y-8">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3">
              <TabsTrigger value="games">🎯 Games</TabsTrigger>
              <TabsTrigger value="leaderboard">🏆 Leaderboard</TabsTrigger>
              <TabsTrigger value="badges">🎖️ Badges</TabsTrigger>
            </TabsList>

            {/* Games Tab */}
            <TabsContent value="games" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Fact or Myth */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Fact or Myth?
                    </CardTitle>
                    <p className="text-white/80 text-sm">Swipe to test your knowledge</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Badge variant="outline">
                        Score: {score.correct}/{score.total}
                      </Badge>
                    </div>
                    
                    <div className="relative h-48 flex items-center justify-center">
                      <Card className={`w-full transition-all duration-300 ${showAnswer ? (factOrMythCards[currentCard].answer === "fact" ? "bg-accent/20" : "bg-secondary/20") : ""}`}>
                        <CardContent className="p-6 text-center">
                          <p className="text-lg font-medium mb-4">
                            "{factOrMythCards[currentCard].statement}"
                          </p>
                          {showAnswer && (
                            <div className="animate-fade-in">
                              <Badge className={factOrMythCards[currentCard].answer === "fact" ? "bg-accent" : "bg-secondary"}>
                                {factOrMythCards[currentCard].answer.toUpperCase()}!
                              </Badge>
                              <p className="text-sm text-muted-foreground mt-2">
                                {factOrMythCards[currentCard].explanation}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 max-w-32 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                        onClick={() => handleSwipe("myth")}
                        disabled={showAnswer}
                      >
                        <X className="mr-2 h-5 w-5" /> Myth
                      </Button>
                      <Button
                        size="lg"
                        className="flex-1 max-w-32 bg-accent hover:bg-accent/90"
                        onClick={() => handleSwipe("fact")}
                        disabled={showAnswer}
                      >
                        <CheckCircle className="mr-2 h-5 w-5" /> Fact
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Period Jeopardy */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-secondary to-primary text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      Period Jeopardy
                    </CardTitle>
                    <p className="text-white/80 text-sm">Choose a category, answer questions!</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-5 gap-2">
                      {jeopardyCategories.map((cat) => (
                        <div key={cat.name} className="text-center">
                          <div className="text-2xl mb-1">{cat.emoji}</div>
                          <p className="text-xs font-medium">{cat.name}</p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-5 gap-2 mt-4">
                      {[100, 200, 300, 400, 500].map((points) =>
                        jeopardyCategories.map((cat, idx) => (
                          <Button
                            key={`${cat.name}-${points}`}
                            variant="outline"
                            size="sm"
                            className="h-10 text-xs font-bold hover:bg-primary hover:text-primary-foreground"
                          >
                            {points}
                          </Button>
                        ))
                      )}
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Click a point value to start!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Leaderboard Tab */}
            <TabsContent value="leaderboard">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="h-6 w-6 text-primary" />
                      Weekly Leaderboard
                    </CardTitle>
                    <Badge variant="outline">Resets Monday</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {leaderboard.map((player) => (
                      <div
                        key={player.rank}
                        className={`flex items-center gap-4 p-3 rounded-lg ${
                          player.isUser
                            ? "bg-primary/10 border-2 border-primary"
                            : player.rank <= 3
                            ? "bg-muted/50"
                            : ""
                        }`}
                      >
                        <div className="w-8 text-center font-bold text-lg">
                          {player.rank <= 3 ? player.badge : `#${player.rank}`}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {player.name} {player.isUser && <Badge className="ml-2">You</Badge>}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Flame className="h-3 w-3 text-secondary" />
                            {player.streak} day streak
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{player.points.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Badges Tab */}
            <TabsContent value="badges">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold">Your Badge Collection</h2>
                  <p className="text-muted-foreground">Earn badges by completing challenges!</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {badges.map((badge) => (
                    <Card
                      key={badge.name}
                      className={`${!badge.earned ? "opacity-70" : ""}`}
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl ${
                            badge.earned ? "bg-primary/20" : "bg-muted"
                          }`}
                        >
                          {badge.emoji}
                        </div>
                        <h3 className="font-bold mb-1">{badge.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                        {badge.earned ? (
                          <Badge className="bg-accent">
                            <CheckCircle className="h-3 w-3 mr-1" /> Earned!
                          </Badge>
                        ) : (
                          <div className="space-y-2">
                            <Progress value={badge.progress} className="h-2" />
                            <p className="text-xs text-muted-foreground">{badge.progress}% complete</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
