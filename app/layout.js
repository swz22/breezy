import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Breezy",
  description: "Premium Artisanal Air, Delivered Fresh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="pt-36">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
