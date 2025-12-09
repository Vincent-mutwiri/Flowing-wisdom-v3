import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Menstrual Health Workshop",
    type: "Workshop",
    date: "2024-02-15",
    time: "10:00 AM - 2:00 PM",
    location: "Nairobi Community Center",
    attendees: 45,
    description: "Interactive workshop covering menstrual health basics, hygiene practices, and myth-busting.",
  },
  {
    id: 2,
    title: "Period Poverty Awareness Webinar",
    type: "Webinar",
    date: "2024-02-20",
    time: "3:00 PM - 4:30 PM",
    location: "Online (Zoom)",
    attendees: 120,
    description: "Join us for an engaging discussion on tackling period poverty in underserved communities.",
  },
  {
    id: 3,
    title: "Youth Ambassador Training",
    type: "Campaign",
    date: "2024-03-01",
    time: "9:00 AM - 5:00 PM",
    location: "Mombasa Youth Hub",
    attendees: 30,
    description: "Intensive training for aspiring youth ambassadors to lead menstrual health initiatives.",
  },
];

const pastEvents = [
  {
    id: 4,
    title: "World Menstrual Hygiene Day Rally",
    type: "Campaign",
    date: "2023-05-28",
    location: "Nairobi CBD",
    attendees: 500,
    image: "🎉",
  },
  {
    id: 5,
    title: "School Outreach Program",
    type: "Workshop",
    date: "2023-11-15",
    location: "Kisumu Secondary School",
    attendees: 200,
    image: "📚",
  },
  {
    id: 6,
    title: "Product Distribution Drive",
    type: "Campaign",
    date: "2023-12-10",
    location: "Rural Nakuru",
    attendees: 150,
    image: "🎁",
  },
];

const eventTypeColors: Record<string, string> = {
  Workshop: "bg-primary text-primary-foreground",
  Webinar: "bg-accent text-accent-foreground",
  Campaign: "bg-secondary text-secondary-foreground",
};

export default function Events() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents =
    filter === "all"
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.type === filter);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const eventDates = upcomingEvents.map((e) => new Date(e.date).getDate());

  return (
    <Layout>
      <section className="py-20 bg-primary/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at workshops, webinars, and community campaigns to learn, connect, and make an impact.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="upcoming" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-8">
              {/* Calendar View */}
              <Card className="max-w-md mx-auto">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <CardTitle className="text-lg">{monthName}</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="p-2 font-medium text-muted-foreground">{day}</div>
                    ))}
                    {Array.from({ length: firstDay }).map((_, i) => (
                      <div key={`empty-${i}`} className="p-2" />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const hasEvent = eventDates.includes(day);
                      return (
                        <div
                          key={day}
                          className={`p-2 rounded-full ${
                            hasEvent
                              ? "bg-primary text-primary-foreground font-bold"
                              : "hover:bg-muted"
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("all")}
                >
                  All Events
                </Button>
                {["Workshop", "Webinar", "Campaign"].map((type) => (
                  <Button
                    key={type}
                    variant={filter === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(type)}
                  >
                    {type}s
                  </Button>
                ))}
              </div>

              {/* Event Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${eventTypeColors[event.type]}`}>
                        {event.type}
                      </span>
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          {new Date(event.date).toLocaleDateString("en-US", { dateStyle: "long" })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          {event.attendees} registered
                        </div>
                      </div>
                      <Button className="w-full mt-6 group-hover:scale-105 transition-transform">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="grid md:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-5xl">{event.image}</span>
                    </div>
                    <CardContent className="p-4">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${eventTypeColors[event.type]}`}>
                        {event.type}
                      </span>
                      <h3 className="font-bold mb-2">{event.title}</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(event.date).toLocaleDateString("en-US", { dateStyle: "long" })}
                        </p>
                        <p className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {event.attendees} attended
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
