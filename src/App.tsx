import { Route, Routes } from "react-router-dom";
import { Toaster } from 'sonner';
import Layout from "./components/shared/Layout";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProfilePage from "./pages/ProfilePage";
import AIAssistantPage from "./pages/AIAssistantPage";
import QuizDemoPage from "./pages/QuizDemoPage";
import AdminPage from "./pages/AdminPage";
import CourseBuilderPage from "./pages/admin/CourseBuilderPage";
import { AdminLayout } from "./components/layouts/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import CourseAnalytics from "./pages/admin/CourseAnalytics";
import PageBuilder from "./pages/admin/PageBuilder";
import PageEditorPage from "./pages/admin/PageEditorPage";
import AIUsageDashboard from "./pages/admin/AIUsageDashboard";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import AdminRoute from "./components/shared/AdminRoute";
import ModuleContent from "./pages/ModuleContent";
import DebugAIGenerator from "./pages/DebugAIGenerator";
import HelpPage from "./pages/HelpPage";
import { ErrorBoundary } from "./components/shared/ErrorBoundary";

// Flowing Wisdom Pages
import FlowingWisdomLayout from "./components/FlowingWisdom/FlowingWisdomLayout";
import FWHomePage from "./pages/FlowingWisdom/HomePage";
import AboutPage from "./pages/FlowingWisdom/AboutPage";
import EventsPage from "./pages/FlowingWisdom/EventsPage";
import OurImpactPage from "./pages/FlowingWisdom/OurImpactPage";
import LearningHubPage from "./pages/FlowingWisdom/LearningHubPage";
import FlowArcadePage from "./pages/FlowingWisdom/FlowArcadePage";
import PeriodTrackerPage from "./pages/FlowingWisdom/PeriodTrackerPage";
import GetInvolvedPage from "./pages/FlowingWisdom/GetInvolvedPage";

function App() {

  return (
    <>
      <Toaster
        position="top-right"
        richColors
        expand={true}
        visibleToasts={4}
        closeButton
        toastOptions={{
          style: {
            background: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--foreground))',
          },
          className: 'my-toast',
          duration: 4000,
        }}
      />
      <Routes>
        {/* Flowing Wisdom Routes */}
        <Route element={<FlowingWisdomLayout />}>
          <Route path="/" element={<FWHomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/our-impact" element={<OurImpactPage />} />
          <Route path="/learning-hub" element={<LearningHubPage />} />
          <Route path="/ask-iris" element={<AIAssistantPage />} />
          <Route path="/ai-assistant" element={<AIAssistantPage />} />
          <Route path="/flow-arcade" element={<FlowArcadePage />} />
          <Route path="/period-tracker" element={<PeriodTrackerPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:courseId/module/:moduleId"
            element={
              <ProtectedRoute>
                <ModuleContent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Admin Routes */}
        <Route element={<Layout />}>
          <Route path="/demo/quiz" element={<QuizDemoPage />} />
          <Route path="/quiz-demo" element={<QuizDemoPage />} />
          <Route path="/debug-ai" element={<DebugAIGenerator />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="courses" element={<CourseAnalytics />} />
            <Route path="ai-usage" element={<AIUsageDashboard />} />
            <Route path="pages" element={<PageBuilder />} />
            <Route path="pages/new" element={<ErrorBoundary><PageEditorPage /></ErrorBoundary>} />
            <Route path="pages/:id/edit" element={<ErrorBoundary><PageEditorPage /></ErrorBoundary>} />
            <Route path="courses/:id/builder" element={<ErrorBoundary><CourseBuilderPage /></ErrorBoundary>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
