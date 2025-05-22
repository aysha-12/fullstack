
import Navber from "@/component/share/navber/Navber";
import "./globals.css";
import Footer from "@/component/share/Footer/Footer";

export const metadata = {
  title: "news-website",
  description: "this a bast news-website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="" >
        <Navber></Navber>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
