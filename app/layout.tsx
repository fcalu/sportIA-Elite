import "./globals.css";

export const metadata = {
  title: "Sportia Analytics",
  description: "Plataforma avanzada de análisis predictivo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
