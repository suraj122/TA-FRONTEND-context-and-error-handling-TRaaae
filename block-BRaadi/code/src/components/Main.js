import ErrorBoundary from "./errorBoundary/ErrorBoundary";
import ErrorBoundary2 from "./errorBoundary/ErrorBoundary2";
import ErrorBoundary3 from "./errorBoundary/ErrorBoundary3";
import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <ErrorBoundary>
          <SectionOne />
        </ErrorBoundary>
        <ErrorBoundary2>
          <SectionTwo />
        </ErrorBoundary2>
        <ErrorBoundary3>
          <Location />
        </ErrorBoundary3>
      </div>
    </section>
  );
}

export default Main;
