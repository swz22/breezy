import "./globals.css";

export const metadata = {
  title: "Breezy",
  description: "Premium Artisanal Air, Delivered Fresh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
