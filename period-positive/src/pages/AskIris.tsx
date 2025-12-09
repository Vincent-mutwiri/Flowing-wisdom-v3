import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Shield, ExternalLink, MessageCircle, Sparkles } from "lucide-react";

const topics = [
  { id: "puberty", label: "Puberty", emoji: "🌱" },
  { id: "cramps", label: "Cramps", emoji: "💆" },
  { id: "myths", label: "Myths", emoji: "❌" },
  { id: "hygiene", label: "Hygiene", emoji: "✨" },
  { id: "products", label: "Products", emoji: "📦" },
  { id: "emotions", label: "Emotions", emoji: "💭" },
];

const sampleConversation = [
  {
    role: "assistant",
    content: "Hey there! 👋 I'm Iris, your friendly period guide. Think of me as a big sister who's here to answer any questions you have about periods, puberty, or your body. No question is too silly or embarrassing—I've heard it all! What's on your mind today? 💜",
  },
  {
    role: "user",
    content: "Is it true that you can't exercise during your period?",
  },
  {
    role: "assistant",
    content: "Great question! That's actually a common myth. 🏃‍♀️ The truth is, light exercise during your period can actually help reduce cramps and improve your mood!\n\nHere's why:\n• Exercise releases endorphins (happy chemicals) that can ease pain\n• Gentle movement helps reduce bloating\n• Stretching can relax tense muscles\n\nTry activities like:\n- Light yoga or stretching 🧘‍♀️\n- Walking 🚶‍♀️\n- Swimming (yes, it's safe!)\n\nOf course, listen to your body. If you feel tired, rest is okay too! Everyone's different. 💪",
  },
];

export default function AskIris() {
  const [incognitoMode, setIncognitoMode] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState(sampleConversation);

  const handleQuickExit = () => {
    window.location.replace("https://www.google.com");
  };

  const handleSend = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: "user", content: inputMessage }]);
    setInputMessage("");
    
    // Simulate response (in real app, this would call AI API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "That's a wonderful question! 💜 This is a mockup of the Ask Iris feature. In the full version, I'd give you a detailed, caring response. For now, explore the Learning Hub or check out the Flow Arcade to learn more!",
        },
      ]);
    }, 1000);
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 bg-card border-b lg:border-b-0 lg:border-r p-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold">Ask Iris</h2>
              <p className="text-sm text-muted-foreground">Your Period Guide</p>
            </div>
          </div>

          {/* Privacy Controls */}
          <Card className="mb-6 bg-accent/10 border-accent/30">
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-accent-foreground" />
                  <span className="text-sm font-medium">Incognito Mode</span>
                </div>
                <Switch checked={incognitoMode} onCheckedChange={setIncognitoMode} />
              </div>
              <Button
                variant="destructive"
                size="sm"
                className="w-full"
                onClick={handleQuickExit}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Quick Exit
              </Button>
              {incognitoMode && (
                <p className="text-xs text-muted-foreground">
                  🔒 Your chat won't be saved in history
                </p>
              )}
            </CardContent>
          </Card>

          {/* Topic Shortcuts */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground mb-2">Quick Topics</p>
            {topics.map((topic) => (
              <Button
                key={topic.id}
                variant={selectedTopic === topic.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setSelectedTopic(topic.id)}
              >
                <span className="mr-2">{topic.emoji}</span>
                {topic.label}
              </Button>
            ))}
          </div>
        </aside>

        {/* Chat Area */}
        <main className="flex-1 flex flex-col">
          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="max-w-2xl mx-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-card border rounded-bl-none"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-medium">Iris</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t bg-card">
            <div className="max-w-2xl mx-auto flex gap-2">
              <Input
                placeholder="Type your question... (This is a mockup)"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2">
              ⚠️ This is a UI mockup. Full AI responses coming soon!
            </p>
          </div>
        </main>
      </div>
    </Layout>
  );
}
