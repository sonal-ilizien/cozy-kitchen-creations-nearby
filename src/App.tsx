
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BrowseMeals from "./pages/BrowseMeals";
import BecomeSeller from "./pages/BecomeSeller";
import HowItWorks from "./pages/HowItWorks";
import OurCooks from "./pages/OurCooks";
import Login from "./pages/Login";
import ApplyNow from "./pages/ApplyNow";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse-meals" element={<BrowseMeals />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/our-cooks" element={<OurCooks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
