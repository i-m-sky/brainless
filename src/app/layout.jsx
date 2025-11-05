import { ClientProviders } from "@/components/ClientProviders";
import "./globals.css";

export const metadata = {
  title: "BrainEdify - Premier Educational Platform",
  description: "Transform your academic journey with our comprehensive courses and expert instructors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Base smooth transitions */
            * {
              transition: opacity 0.2s ease, transform 0.2s ease;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }

            /* Custom fade animations */
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes slideInUp {
              from { 
                opacity: 0; 
                transform: translateY(50px); 
              }
              to { 
                opacity: 1; 
                transform: translateY(0); 
              }
            }

            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }

            /* Animation utility classes */
            .animate-fadeIn {
              animation: fadeIn 0.5s ease-out;
            }

            .animate-slideInUp {
              animation: slideInUp 0.6s ease-out;
            }

            .animate-shimmer {
              animation: shimmer 2s infinite;
            }

            /* Enhanced scrollbar for better UX */
            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #ff6b35, #f7931e);
              border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #f7931e, #ff6b35);
            }

            /* Enhanced focus states for accessibility */
            button:focus-visible,
            input:focus-visible,
            select:focus-visible {
              outline: 2px solid #ff6b35;
              outline-offset: 2px;
              box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.1);
            }

            /* Loading states */
            .loading-shimmer {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }

            /* Button hover enhancements */
            .hover-lift:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
          `
        }} />
      </head>
      <body className="antialiased">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}