import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { enrollmentAPI } from "@/services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatsCardSkeleton } from "@/components/ui/skeleton";
import { BookOpen, TrendingUp, Award, Clock } from "lucide-react";

interface Stats {
  totalEnrolled: number;
  completed: number;
  inProgress: number;
  avgProgress: number;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { stats } = await enrollmentAPI.getStats();
        setStats(stats);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name}!</h1>
      
      {loading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <StatsCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Enrolled</CardTitle>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{stats?.totalEnrolled || 0}</div>
                <p className="text-xs text-muted-foreground mt-1">Total courses</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent-foreground">{stats?.inProgress || 0}</div>
                <p className="text-xs text-muted-foreground mt-1">Active courses</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">{stats?.completed || 0}</div>
                <p className="text-xs text-muted-foreground mt-1">Finished courses</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{stats?.avgProgress || 0}%</div>
                <p className="text-xs text-muted-foreground mt-1">Overall completion</p>
              </CardContent>
            </Card>
          </div>

          {stats?.totalEnrolled === 0 && (
            <Card className="text-center py-12 border-0 shadow-lg">
              <CardContent className="space-y-6 p-8">
                <div className="space-y-4">
                  <BookOpen className="h-16 w-16 mx-auto text-muted-foreground" />
                  <div className="space-y-2">
                    <CardTitle className="text-xl">Welcome to your learning journey!</CardTitle>
                    <CardDescription className="max-w-md mx-auto">
                      You haven't enrolled in any courses yet. Discover amazing courses and start learning today.
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link to="/courses">Browse Courses</Link>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="rounded-full px-8">
                    <Link to="/ai-assistant">Get AI Recommendations</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}