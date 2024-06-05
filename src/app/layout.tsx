import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

// Root Layout Component wraps around all route files inside the application
// it ensures a consistent layout for all routes within the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-default-bg text-default-text">
        {/* main container */}
        <div className="m-auto flex min-h-screen w-[1536px] flex-col justify-between px-[50px]">
          <Navbar />

          {/* components passed to the Root Layout */}
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
