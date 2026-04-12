import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StreamPlayer from "@/components/StreamPlayer";
import CalendarAndStandings from "@/components/CalendarAndStandings";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StreamPlayer />
        <CalendarAndStandings />
      </main>
      <Footer />
    </div>
  );
}
