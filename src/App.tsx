import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ShopEasy from "./pages/ShopEasy";
import SchoolManagement from "./pages/SchoolManagement";
import HospitalManagement from "./pages/HospitalManagement";
import ManufacturingPortfolio from "./pages/ManufacturingPortfolio";
import PayrollManufacturingERP from "./pages/PayrollManufacturingERP";
import BillingSoftware from "./pages/BillingSoftware";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="light" storageKey="zechsoft-theme">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/shopeasy" element={<ShopEasy />} />
          <Route path="/school-erp" element={<SchoolManagement />} />
          <Route path="/hospital-hims" element={<HospitalManagement />} />
          <Route path="/manufacturing" element={<ManufacturingPortfolio />} />
          <Route path="/payroll-erp" element={<PayrollManufacturingERP />} />
          <Route path="/billing-software" element={<BillingSoftware />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
