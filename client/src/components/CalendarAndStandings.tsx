import RealGameCalendar from "./RealGameCalendar";
import BrazilianStandings from "./BrazilianStandings";

export default function CalendarAndStandings() {
  return (
    <section className="w-full bg-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <RealGameCalendar />
          </div>

          {/* Standings - Takes 1 column on large screens */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BrazilianStandings />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
