import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Impact from "./pages/Impact";
import LearningHub from "./pages/LearningHub";
import AskIris from "./pages/AskIris";
import FlowArcade from "./pages/FlowArcade";
import PeriodTracker from "./pages/PeriodTracker";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/learn" element={<LearningHub />} />
          <Route path="/ask-iris" element={<AskIris />} />
          <Route path="/arcade" element={<FlowArcade />} />
          <Route path="/tracker" element={<PeriodTracker />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
