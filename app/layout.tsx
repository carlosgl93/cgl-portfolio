import Link from "next/link";
import AppBar from "./components/AppBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Projects",
      link: "/projects",
    },
  ];

  return (
    <html>
      <head />
      <body>
        <header>
          <nav>
            <AppBar />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
