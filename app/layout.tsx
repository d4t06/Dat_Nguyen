import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Dat Nguyen",
  verification: {
    google: "Zr0gom2JXEgWZu3IFSKVXYDqC885w4kSH7cHdQZyaqA",
  },
  description:
    "I'm Nguyen Huu Dat - a final-year Software Engineering student at Can Tho University with a strong passion for web technologies seeking an job opportunity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="transition-colors bg-white dark:bg-slate-800 dark:text-white">
        <div className="md:min-h-screen pt-[60px] container px-3 mx-auto md:flex md:flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>

        <div id="portal"></div>
      </body>
    </html>
  );
}
