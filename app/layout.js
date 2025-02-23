import "./globals.css";
import Nav from "./Components/nav";


export const metadata = {
  title: "Aqua",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
