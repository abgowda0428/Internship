import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { CustomCursor } from "./components/CustomCursor";
import { PageTransition } from "./components/PageTransition";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { WellnessPage } from "./pages/WellnessPage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Set favicon and title
  useEffect(() => {
    // Set page title
    document.title = "Healsphere - Next-Gen Healthcare Platform";

    // Create and set favicon
    const setFavicon = () => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll("link[rel*='icon']");
      existingFavicons.forEach(favicon => favicon.remove());

      // Create SVG favicon with Healsphere branding
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#00ff88;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#00ccff;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="20" fill="#000000"/>
          <circle cx="50" cy="35" r="15" fill="url(#grad)"/>
          <rect x="45" y="48" width="10" height="25" rx="2" fill="url(#grad)"/>
          <rect x="30" y="60" width="40" height="8" rx="2" fill="url(#grad)"/>
        </svg>
      `;

      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      favicon.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
      document.head.appendChild(favicon);

      // Add apple touch icon
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
      document.head.appendChild(appleTouchIcon);
    };

    setFavicon();

    // Set meta tags
    const setMetaTags = () => {
      // Theme color
      let metaTheme = document.querySelector('meta[name="theme-color"]');
      if (!metaTheme) {
        metaTheme = document.createElement('meta');
        metaTheme.setAttribute('name', 'theme-color');
        document.head.appendChild(metaTheme);
      }
      metaTheme.setAttribute('content', '#000000');

      // Description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', 'Experience the future of healthcare through Healsphere - A revolutionary platform that integrates cutting-edge technology with human-centered care.');
    };

    setMetaTags();
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "wellness":
        return <WellnessPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <PageTransition key={currentPage}>
          {renderPage()}
        </PageTransition>
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}