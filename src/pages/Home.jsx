import { useEffect, useState } from "react";
import f1Car from "../assets/f1-car.png";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

import {
  FaCalendarAlt,
  FaClock,
  FaGlobeEurope,
  FaFlagCheckered
} from "react-icons/fa";

import { GiPathDistance } from "react-icons/gi";
import { loadRaceSchedule } from "../data/circuits";

function Home() {
  const [mergedRaces, setMergedRaces] = useState([]);
  const [activeRaceIndex, setActiveRaceIndex] = useState(0);
  const [countdown, setCountdown] = useState({
  days: "--",
  hours: "--",
  minutes: "--",
  seconds: "--"
});

  useEffect(() => {
    let isMounted = true;

    loadRaceSchedule(new Date().getFullYear())
      .then(({ races: nextRaces, currentRaceIndex: nextIndex }) => {
        if (isMounted) {
          setMergedRaces(nextRaces);
          setActiveRaceIndex(nextIndex);
        }
      })
      .catch(() => {
        if (isMounted) {
          setMergedRaces([]);
          setActiveRaceIndex(0);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const activeRace = mergedRaces[activeRaceIndex] || null;

  const formattedDate = activeRace?.date
    ? new Date(activeRace.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })
    : "TBD";

  useEffect(() => {
  if (!activeRace?.date) return;

  const updateCountdown = () => {
    const target = new Date(activeRace.date).getTime();
    const now = Date.now();

    const diff = Math.max(target - now, 0);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setCountdown({
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0")
    });
  };

  updateCountdown();

  const timer = setInterval(updateCountdown, 1000);

  return () => clearInterval(timer);

}, [activeRace]);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">🏁 NEXT RACE</span>

          <h1>{activeRace?.grandPrix || "Upcoming Race"}</h1>

          <p className="circuit-location">
            📍 {activeRace?.circuit || "TBD"}, {activeRace?.location || "TBD"}
          </p>

          <div className="race-details">
            <p>
              <FaCalendarAlt className="detail-icon" />
              {formattedDate}
            </p>

            <p>
              <FaClock className="detail-icon" />
{activeRace?.date && activeRace?.time
  ? `${new Date(
      `${activeRace.date}T${activeRace.time}`
    ).toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    })} IST`
  : "TBD"}
            </p>

            <p>
              <FaGlobeEurope className="detail-icon" />
              {activeRace?.country || "TBD"}
            </p>

            <p>
              <GiPathDistance className="detail-icon" />
              <span>{activeRace?.length || "TBD"}</span>
            </p>

            <p>
              <FaFlagCheckered className="detail-icon" />
              Laps: {activeRace?.laps || "TBD"}
            </p>
          </div>

          <div className="track-card">
            <h3>CIRCUIT LAYOUT</h3>

            <img
  src={activeRace?.image}
  alt={activeRace?.circuit || "Circuit"}
  className="track-image"
/>

          </div>

         
        </div>

       <div className="hero-image">
    <img
        src={f1Car}
        alt="Formula 1 Car"
        className="hero-car"
    />

    <div className="hero-countdown">

        <div className="hero-time days">
            <span>{countdown.days}</span>
            <span>DAYS</span>
        </div>

        <div className="hero-time hours">
            <span>{countdown.hours}</span>
            <span>HOURS</span>
        </div>

        <div className="hero-time minutes">
            <span>{countdown.minutes}</span>
            <span>MINUTES</span>
        </div>

        <div className="hero-time seconds">
            <span>{countdown.seconds}</span>
            <span>SECONDS</span>
        </div>

    </div>
</div>

<section className="hero">
</section>
</section>
<section className="creator-section">
    <div className="creator-btn-wrapper">
        <Link to="/about" className="creator-btn">
            <FaUserTie className="creator-icon"/>
            <span>Meet The Creator</span>
        </Link>
    </div>
</section>

  
    </div>
  );
}

export default Home