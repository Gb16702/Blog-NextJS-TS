import "../../styles/globals.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto relative bg-[#efefefe1]">
        <Container>
          <div className="h-28"></div>
          <Header />
          <Banner />
          {children}
        </Container>
      </body>
    </html>
  );
}
