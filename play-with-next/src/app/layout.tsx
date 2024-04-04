import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container">
        <div className="display-1">Play with Next.js</div>
        <hr />
        <header>Header</header>
        <hr />
        <main>{children}</main>
        <hr />
        <footer>Footer</footer>
      </body>
    </html>
  );
}
