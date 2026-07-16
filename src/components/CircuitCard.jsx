function CircuitCard({ race, sprintData, active }) {

  const sprint = sprintData.find(
    item => item.round === race.round
  );

  console.log(race);
console.log("Image:", race.image);

  return (
    <div className={`circuit-card ${active ? "active-card" : ""}`}>

      <div className="circuit-image">
        <img
          src={race.image}
          alt={race.grandPrix}
        />
      </div>

      <div className="circuit-details">

        <p className="round">
          Round {race.round}
        </p>

        <h2>{race.grandPrix}</h2>

        <h3>{race.circuit}</h3>

        <p>
          📍 {race.location}, {race.country}
        </p>

        <p>
          🏎️ {race.length} • {race.laps} Laps • {race.turns} Turns
        </p>

        <div className={sprint?.sprint ? "sprint-badge" : "gp-badge"}>
          {sprint?.sprint
            ? "🏎 Sprint Weekend"
            : "🏁 Grand Prix Weekend"}
        </div>

      </div>

    </div>
  );
}

export default CircuitCard;