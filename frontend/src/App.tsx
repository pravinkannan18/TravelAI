import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import PlanTrip from "./pages/PlanTrip";
import EnhancedTripView from "./pages/EnhancedTripView";
import Booking from "./pages/Booking";
import Features from "./pages/Features";
import LocalGuides from "./pages/LocalGuides";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { TravelNavbar } from "./components/TravelNavbar";
import { Hero1 } from "./components/ui/hero-1";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TravelNavbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/trip/:id/enhanced" element={<EnhancedTripView />} />
          <Route path="/trip/:id/booking" element={<Booking />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/features" element={<Features />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/local-guides" element={<LocalGuides />} />
          <Route path="/chat" element={<Hero1 />} />
          {/* Redirect old demo-chat route to chat */}
          <Route path="/demo-chat" element={<Navigate to="/chat" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
