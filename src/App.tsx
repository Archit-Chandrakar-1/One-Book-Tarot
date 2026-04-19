import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Page/Component Imports
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ServicesHighlight } from "./components/ServiceHighlight.tsx";
import TarotCardSpread from "./components/TarotCardSpread.tsx";
import Tarotdecks from "./components/Tarotdecks.tsx";
import ServicesGrid from "./components/services/ServicesGrid.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import BookingForm from "./components/booking-form.tsx";
import AboutMe from "./components/About.tsx";
import TarotSpread from "./components/TarotSpread.tsx";

const queryClient = new QueryClient();

/**
 * The Home component defines exactly what appears on your landing page.
 * TarotCardSpread is NOT included here so it won't show up on the home page.
 */
const Home = () => (
  <>
    <Index />
    <TarotSpread />
    <AboutMe />
    <ServicesGrid />
    <ServicesHighlight />
    <BookingForm />
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Navbar stays at the top for all pages */}
        <Navbar />

        <main>
          <Routes>
            {/* Landing Page: Shows Index, Services Grid, and Highlights only */}
            <Route path="/" element={<Home />} />

            {/* Decks Page: Dedicated route for Tarotdecks component */}
            <Route path="/decks" element={<Tarotdecks />} />

            {/* Spreads Page: Dedicated route for TarotCardSpread component */}
            <Route path="/spreads" element={<TarotCardSpread />} />

            <Route path="/about" element={<AboutMe />} />
            <Route path="/book" element={<BookingForm />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;