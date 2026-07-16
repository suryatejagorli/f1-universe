import { useEffect, useState } from "react";
import "../styles/Standings.css";

import ferrariLogo from "../assets/team-logos/ferrari.png";
import mercedesLogo from "../assets/team-logos/mercedes.png";
import redbullLogo from "../assets/team-logos/redbull.png";
import mclarenLogo from "../assets/team-logos/mclaren.png";
import astonLogo from "../assets/team-logos/astonmartin.png";
import alpineLogo from "../assets/team-logos/alpine.png";
import williamsLogo from "../assets/team-logos/williams.png";
import haasLogo from "../assets/team-logos/haas.png";
import rbLogo from "../assets/team-logos/rb.png";
import audiLogo from "../assets/team-logos/audi.png";
import cadillacLogo from "../assets/team-logos/cadillac.png";

const raceAbbreviations = {
  "Australian Grand Prix": "AUS",
  "Chinese Grand Prix": "CHN",
  "Japanese Grand Prix": "JPN",
  "Bahrain Grand Prix": "BRN",
  "Saudi Arabian Grand Prix": "SAU",
  "Miami Grand Prix": "MIA",
  "Canadian Grand Prix": "CAN",
  "Monaco Grand Prix": "MON",
  "Spanish Grand Prix": "ESP",
  "Austrian Grand Prix": "AUT",
  "British Grand Prix": "GBR",
  "Belgian Grand Prix": "BEL",
  "Hungarian Grand Prix": "HUN",
  "Dutch Grand Prix": "NED",
  "Italian Grand Prix": "ITA",
  "Azerbaijan Grand Prix": "AZB",
  "Singapore Grand Prix": "SIN",
  "United States Grand Prix": "USA",
  "Mexico City Grand Prix": "MEX",
  "Brazilian Grand Prix": "BRA",
  "Las Vegas Grand Prix": "LAS",
  "Qatar Grand Prix": "QAT",
  "Abu Dhabi Grand Prix": "ABU",
};


const teamLogos = {
  Ferrari: ferrariLogo,
  Mercedes: mercedesLogo,
  McLaren: mclarenLogo,

  "Red Bull": redbullLogo,
  "Red Bull Racing": redbullLogo,

  "Aston Martin": astonLogo,
  "Aston Martin Aramco": astonLogo,

  Alpine: alpineLogo,
  "Alpine F1 Team": alpineLogo,

  Williams: williamsLogo,

  Haas: haasLogo,
  "Haas F1 Team": haasLogo,

  "RB F1 Team": rbLogo,
  "Racing Bulls": rbLogo,

  Audi: audiLogo,

  Cadillac: cadillacLogo,
  "Cadillac F1 Team": cadillacLogo,
};

import {
  getDriverStandings,
  getConstructorStandings,
  getRaceSchedule,
  getDriverStandingsByRound,
  getConstructorStandingsByRound,
  getRaceResults,
} from "../services/standingsApi";

function Standings() {
  const [season, setSeason] = useState(2026);
  const [view, setView] = useState("drivers");
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [races, setRaces] = useState([]);
  const [racePoints, setRacePoints] = useState({});
  const [constructorRacePoints, setConstructorRacePoints] = useState({});

  useEffect(() => {
    loadStandings();
  }, [season, view]);

  useEffect(() => {
  loadRaceSchedule();
  loadRacePoints();
  loadConstructorRacePoints();
}, [season]);

async function loadRaceSchedule() {
  const data = await getRaceSchedule(season);
  setRaces(data);
}

async function loadRacePoints() {

  const races = await getRaceSchedule(season);

  const allPoints = {};

  for (const race of races) {

    const results = await getRaceResults(
      season,
      race.round
    );

    results.forEach(driver => {

      const id = driver.Driver.driverId;

      if (!allPoints[id]) {
        allPoints[id] = {};
      }

      allPoints[id][race.round] = driver.points;

    });

  }

  setRacePoints(allPoints);

}

async function loadConstructorRacePoints() {

  const races = await getRaceSchedule(season);

  const allPoints = {};

  for (const race of races) {

    const results = await getRaceResults(
      season,
      race.round
    );

    results.forEach(result => {

      const team = result.Constructor.name;

      if (!allPoints[team]) {
        allPoints[team] = {};
      }

      if (!allPoints[team][race.round]) {
        allPoints[team][race.round] = 0;
      }

      allPoints[team][race.round] += Number(result.points);

    });

  }

  setConstructorRacePoints(allPoints);

}

async function loadStandings() {
  setLoading(true);

  let data = [];

  if (view === "drivers") {
    data = await getDriverStandings(season);
  } else {
    data = await getConstructorStandings(season);
  }

  setStandings(data);
  setLoading(false);
}

  return (
    <div className="standings-page">
      {/* Header */}

      <div className="standings-header">
        <h1>Formula 1 Championship Standings</h1>
        <p>Official FIA World Championship Standings</p>
      </div>

      {/* Controls */}

      <div className="standings-controls">

  <div className="toggle-buttons">

    <button
      className={view === "drivers" ? "active" : ""}
      onClick={() => setView("drivers")}
    >
      Driver Standings
    </button>

    <button
      className={view === "constructors" ? "active" : ""}
      onClick={() => setView("constructors")}
    >
      Constructor Standings
    </button>

  </div>

  <div className="selectors">

    <select
      value={season}
      onChange={(e) => setSeason(Number(e.target.value))}
    >
      <option value={2026}>2026</option>
      <option value={2025}>2025</option>
      <option value={2024}>2024</option>
      <option value={2023}>2023</option>
    </select>

  </div>

</div>

      {/* Table */}

      <div className="standings-table-container">
        {loading ? (
          <div className="loading">
            Loading Championship Standings...
          </div>
        ) : (
          <table className="standings-table">

            <thead>

             {view === "drivers" ? (

<tr>
  <th>POS</th>
  <th>DRIVER</th>
  <th>PTS</th>

  {races.map((race) => (
    <th key={race.round}>
      {raceAbbreviations[race.raceName]}
    </th>
  ))}
</tr>

) : (

<tr>

<th>POS</th>

<th>TEAM</th>

<th>PTS</th>

{races.map((race) => (

<th key={race.round}>

{raceAbbreviations[race.raceName]}

</th>

))}

</tr>

)}
            </thead>

            <tbody>

              {view === "drivers" ? (

                standings.map((driver) => {

  if (!driver?.Driver) {
    console.log(driver);
    return null;
  }

  const position = Number(driver.position);

  return (

                    <tr key={driver.Driver.driverId}>

                      <td className="position">

                        {position === 1 && "🥇"}

                        {position === 2 && "🥈"}

                        {position === 3 && "🥉"}

                        {position > 3 && position}

                      </td>

<td>

  <div className="driver-info">

    <div className="driver-name">
      {driver.Driver.givenName} {driver.Driver.familyName}
    </div>

    <div className="driver-nationality">
      {driver.Driver.nationality}
    </div>

    <div className="driver-team">

      <img
        src={teamLogos[driver.Constructors[0].name]}
        alt={driver.Constructors[0].name}
        className="driver-team-logo"
      />

      <span>{driver.Constructors[0].name}</span>

    </div>

  </div>

</td>

<td className="points">
{driver.points}
</td>

{races.map((race) => (
  <td key={race.round}>
    {racePoints[driver.Driver.driverId]?.[race.round] ?? "-"}
  </td>
))}



                    </tr>

                  );

                })

              ) : (

  standings.map((team) => {
  console.log(team);

  return (

                  <tr key={team?.Constructor?.constructorId || team.position}>

                    <td className="position">

                      {team.position}

                    </td>

                    <td>
  <div className="team-cell">
    <img
      src={teamLogos[team?.Constructor?.name]}
      alt=""
    />

    <span>
      {team?.Constructor?.name}
    </span>
  </div>
</td>
                
  <td className="points">
  {team.points}
</td>

{races.map((race) => (

<td key={race.round}>

{
constructorRacePoints[
team?.Constructor?.name
]?.[race.round] ?? "-"
}

</td>

))}

                  </tr>

                );
})

              )}

            </tbody>

          </table>
        )}
      </div>
    </div>
  );
}

export default Standings;