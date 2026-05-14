import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import "./globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="pt-25">{children}</main>
        <Footer />
      </body>
    </html>
  )
}