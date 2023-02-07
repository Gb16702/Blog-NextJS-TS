import "../../styles/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="w-screen h-screen">{children}</body>
    </html>
  );
}
