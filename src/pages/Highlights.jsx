import { useEffect, useState } from "react";
import "../styles/Highlights.css";

import { getRaceSchedule } from "../services/standingsApi";

function Highlights() {
  const [races, setRaces] = useState([]);
  const [latestRace, setLatestRace] = useState(null);
  const [nextRace, setNextRace] = useState(null);

  useEffect(() => {
    loadRaces();
  }, []);

  async function loadRaces() {
    const schedule = await getRaceSchedule(2026);

    setRaces(schedule);

    const today = new Date();

    let latest = null;
    let next = null;

    schedule.forEach((race) => {
      const raceDate = new Date(race.date);

      if (raceDate <= today) {
        latest = race;
      }

      if (!next && raceDate > today) {
        next = race;
      }
    });

    setLatestRace(latest);
    setNextRace(next);
  }

  function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

  return (
    <div className="highlights-page">

      {/* Hero */}

      <section className="highlights-hero">

        <h1>Formula 1 Race Highlights</h1>

        <p>
          Watch official Formula 1 race highlights from every Grand Prix of
          the season. Catch up on the latest race or revisit your favourite
          moments.
        </p>

      </section>

      {/* Featured */}

      <section className="featured-highlights">

        <div className="highlight-box latest">

          <h2>🏁 Latest Race</h2>

          <h3>
            {latestRace ? latestRace.raceName : "Loading..."}
          </h3>

          <p>Official Formula 1 Highlights</p>

          {latestRace && (
            <a
              href={`https://www.youtube.com/results?search_query=Formula+1+${encodeURIComponent(
                latestRace.raceName
              )}+2026+Highlights`}
              target="_blank"
              rel="noreferrer"
              className="watch-btn"
            >
              ▶ Watch Highlight
            </a>
          )}

        </div>

        <div className="highlight-box next">

          <h2>⏳ Next Race</h2>

          <h3>
            {nextRace ? nextRace.raceName : "Season Completed"}
          </h3>

          <p>
  {nextRace
    ? `Race Date: ${formatDate(nextRace.date)}`
    : "No more races this season."}
</p>

        </div>

      </section>

      {/* Season Highlights */}

      <section className="season-highlights">

        <h2>2026 Season Highlights</h2>

        <div className="highlights-list">

          {races.map((race) => {

            const completed =
              new Date(race.date) <= new Date();

            return (

              <div
                className="highlight-item"
                key={race.round}
              >

                <div>

                  <h3>{race.raceName}</h3>

                  <p>{formatDate(race.date)}</p>

                </div>

                {completed ? (

                  <a
                    href={`https://www.youtube.com/results?search_query=Formula+1+${encodeURIComponent(
                      race.raceName
                    )}+2026+Highlights`}
                    target="_blank"
                    rel="noreferrer"
                    className="watch-btn"
                  >
                    ▶ Watch Highlight
                  </a>

                ) : (

                  <span className="upcoming">
                    ⏳ Not yet happened
                  </span>

                )}

              </div>

            );

          })}

        </div>

      </section>

    </div>
  );
}

export default Highlights;