import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/Hero/Hero"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}