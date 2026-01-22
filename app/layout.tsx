import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import "./globals.css";
import defaultTheme from "tailwindcss/defaultTheme";

export const metadata = {
  title: "Dat Nguyen",
  verification: {
    google: "Zr0gom2JXEgWZu3IFSKVXYDqC885w4kSH7cHdQZyaqA",
  },
  description:
    "Hi!, I'm Nguyen Huu Dat, a fresher developer and I'm seeking an job opportunity.",
};

const _font = localFont({
  src: "./SpaceGrotesk-VariableFont.ttf",
  weight: "400 700",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          const theme = localStorage.getItem('theme') || 'light';
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          }

          console.log('run')
        })()
      `,
          }}
        />
      </head>
      <body
        style={{
          fontFamily:
            _font.style.fontFamily +
            "," +
            defaultTheme.fontFamily.sans.join(","),
        }}
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
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
