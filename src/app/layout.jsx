import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "D:/Project/my-dashboard-app/src/components/sidebar/sidebar";
import { Topbar } from "D:/Project/my-dashboard-app/src/components/topbar.jsx";
import { ThemeProvider } from "D:/Project/my-dashboard-app/src/components/theme-provider.jsx"; // Make sure this path is correct
import { TooltipProvider } from '@radix-ui/react-tooltip';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Dashboard",
  description: "Modern dashboard application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Topbar />
              <main className="flex-1 p-4 md:p-8 overflow-auto">
                <div className="mx-auto max-w-7xl">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}