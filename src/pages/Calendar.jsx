import "../styles/Calendar.css";
import CircuitCard from "../components/CircuitCard";
import { sprintData, loadRaceSchedule } from "../data/circuits";
import { useEffect, useState, useRef } from "react";

function Calendar() {
  const activeCardRef = useRef(null);
  const activeTimelineRef = useRef(null);
  const circuitsScrollRef = useRef(null);
  const timelineScrollRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const minSeason = currentYear - 2;
  const maxSeason = currentYear + 1;

  const [currentSeason, setCurrentSeason] = useState(currentYear);
  const [races, setRaces] = useState([]);
  const [activeRaceIndex, setActiveRaceIndex] = useState(0);
  const [scheduleMessage, setScheduleMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    loadRaceSchedule(currentSeason)
      .then(({ races: nextRaces, currentRaceIndex: nextIndex }) => {
        if (isMounted) {
          setRaces(nextRaces);
          setActiveRaceIndex(nextIndex);
          setScheduleMessage(
            nextRaces.length
              ? ""
              : `🏁 The official Formula 1 ${currentSeason} calendar has not been released yet.`
          );
        }
      })
      .catch(() => {
        if (isMounted) {
          setRaces([]);
          setActiveRaceIndex(0);
          setScheduleMessage(`🏁 The official Formula 1 ${currentSeason} calendar has not been released yet.`);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [currentSeason]);

  useEffect(() => {
  const circuitsScroll = circuitsScrollRef.current;
  const activeCard = activeCardRef.current;

  if (!circuitsScroll || !activeCard || races.length === 0) return;

  // Start from the top
  circuitsScroll.scrollTop = 0;

  const timer = setTimeout(() => {

    const startPosition = 0;

    // Position of the current/green race card
    const targetPosition =
      activeCard.offsetTop -
      circuitsScroll.clientHeight / 2 +
      activeCard.clientHeight / 2;

    const distance = targetPosition - startPosition;

    // Same speed as timeline
    const duration = 1200;

    let startTime = null;

    const animateScroll = (currentTime) => {

      if (!startTime) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Smooth acceleration + slowdown
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      circuitsScroll.scrollTop =
        startPosition + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }

    };

    requestAnimationFrame(animateScroll);

  }, 500);

  return () => clearTimeout(timer);

}, [activeRaceIndex, races.length]);

/*==========================*/

  useEffect(() => {
  const timelineScroll = timelineScrollRef.current;
  const activeItem = activeTimelineRef.current;

  if (!timelineScroll || !activeItem || races.length === 0) return;

  // Always begin from the start of the timeline
  timelineScroll.scrollLeft = 0;

  const timer = setTimeout(() => {
    const startPosition = timelineScroll.scrollLeft;

    const targetPosition =
      activeItem.offsetLeft -
      timelineScroll.clientWidth / 2 +
      activeItem.clientWidth / 2;

    const distance = targetPosition - startPosition;

    // Animation duration in milliseconds
    const duration = 900;

    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-in-out animation
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      timelineScroll.scrollLeft =
        startPosition + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, 500);

  return () => clearTimeout(timer);

}, [activeRaceIndex, races.length]);

/*==========================*/

  const displayRaces = races;

  return (
    <div className="calendar-page">

      {/* Hero Section */}
      <section className="calendar-hero">

        <h1 className="calendar-title">
          Formula 1 Calendar
        </h1>

        <p className="calendar-subtitle">
          2026 FIA Formula One World Championship
        </p>

        <p className="calendar-description">
          Complete Race Schedule • Sprint Weekends • Circuit Details
        </p>

        <div className="calendar-divider"></div>

      </section>

      <section className="timeline-card">
        <h2 className="timeline-heading">Race Timeline</h2>

        <div className="season-navigation">
          <button
            className="season-arrow"
            disabled={currentSeason === minSeason}
            onClick={() => {
              if (currentSeason > minSeason) {
                setCurrentSeason(currentSeason - 1);
              }
            }}
          >
            &#10094;
          </button>

          <button className="current-season">{currentSeason}</button>

          <button
            className="season-arrow"
            disabled={currentSeason === maxSeason}
            onClick={() => {
              if (currentSeason < maxSeason) {
                setCurrentSeason(currentSeason + 1);
              }
            }}
          >
            &#10095;
          </button>
        </div>

        {scheduleMessage ? (
          <div className="calendar-description" style={{ textAlign: "center" }}>
            {scheduleMessage}
          </div>
        ) : null}

        {!scheduleMessage ? (
          <div className="timeline-scroll" ref={timelineScrollRef}>
            <div className="timeline-track">
              {displayRaces.map((race, index) => {
                const status = index < activeRaceIndex ? "completed" : index === activeRaceIndex ? "current" : "upcoming";
                const label = race.grandPrix.replace(" Grand Prix", "");
                const date = race.date
                  ? new Date(race.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short"
                    })
                  : "Date: To Be Announced";

                return (
                  <div
                    className={`timeline-item ${status}`}
                    key={race.round}
                    ref={index === activeRaceIndex ? activeTimelineRef : null}
                  >
                    <div className="timeline-dot"></div>
                    <h4>{label}</h4>
                    <p>{date}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </section>

<section className="circuits-section">
  {!scheduleMessage ? (
    <div className="circuits-scroll" ref={circuitsScrollRef}>
      <div className="circuits-wrapper">
        {displayRaces.map((race, index) => (
          <div
            key={race.round}
            ref={index === activeRaceIndex ? activeCardRef : null}
          >
            <CircuitCard
              race={race}
              sprintData={sprintData}
              active={index === activeRaceIndex}
            />
          </div>
        ))}
      </div>
    </div>
  ) : null}
</section>



    </div>
  );
}

export default Calendar;