import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
   title: "Dat Nguyen",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <head />
         <body className="bg-white dark:bg-slate-800 dark:text-white">
            <div className="min-h-screen container mx-auto  flex flex-col">
               <Navbar />
               {children}

               <Footer />
            </div>
         </body>
      </html>
   );
}
