import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { AuthProvider } from "@/contexts/AuthContext";

// Layouts
import Layout from "@/Layout/Layout";


// Blog Public Pages
import HomePage from "@/components/Blog/HomePage";
import BlogDetailPage from "@/components/Blog/BlogDetailPage"; 

// Static Content Pages (inside PublicLayout)
import Index from "@/pages/Index";
import ProductsContainer from "@/pages/ProductContainer";
import Services from "@/pages/Services";
import Resources from "@/pages/Resource";
import About from "@/pages/About";
import Privacy from "@/components/Privacy";
import Disclaimer from "@/components/Disclaimer";
import PopupBannerAds from "@/components/AddPopup"

// Utility
import NotFound from "@/pages/NotFound";
import Quiz from "./pages/Quiz";
import WhatsAppRedirect from "./components/Whatsapp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* ✅ Public routes with shared PublicLayout (navbar/footer) */}
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsContainer />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/blog" element={<HomePage />} />
              <Route path="blog/:id" element={<BlogDetailPage />} />
              <Route path="/quiz" element={<Quiz/>} />
              <Route path="/whatsapp" element={<WhatsAppRedirect link="https://api.whatsapp.com/send?phone=917710089939"/>} />
            </Route>

            {/* ❌ 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
      
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
