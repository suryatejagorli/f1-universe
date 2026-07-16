import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import StatCard from "../components/StatCard"
import {
  getCurrentDriverStats,
  getCareerDriverStats
} from "../services/driverApi"

function DriverProfile() {

  const { name } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [name])

  const driversData = {

    "max-verstappen": {
      name: "Max Verstappen",
      team: "Red Bull Racing",
      nationality: "Netherlands",
      dateOfBirth: "1997-09-30",
      number: 1,
      image: "/src/assets/drivers/max-verstappen.png"
    },

    "lewis-hamilton": {
      name: "Lewis Hamilton",
      team: "Ferrari",
      nationality: "United Kingdom",
      dateOfBirth: "1985-01-07",
      number: 44,
      image: "/src/assets/drivers/lewis-hamilton.png"
    },

    "charles-leclerc": {
      name: "Charles Leclerc",
      team: "Ferrari",
      nationality: "Monaco",
      dateOfBirth: "1997-10-16",
      number: 16,
      image: "/src/assets/drivers/charles-leclerc.png"
    },

    "george-russell": {
      name: "George Russell",
      team: "Mercedes",
      nationality: "United Kingdom",
      dateOfBirth: "1998-02-15",
      number: 63,
      image: "/src/assets/drivers/george-russell.png"
    },

    "kimi-antonelli": {
      name: "Kimi Antonelli",
      team: "Mercedes",
      nationality: "Italy",
      dateOfBirth: "2006-08-25",
      number: 12,
      image: "/src/assets/drivers/kimi-antonelli.png"
    },

    "lando-norris": {
      name: "Lando Norris",
      team: "McLaren",
      nationality: "United Kingdom",
      dateOfBirth: "1999-11-13",
      number: 4,
      image: "/src/assets/drivers/lando-norris.png"
    },

    "oscar-piastri": {
      name: "Oscar Piastri",
      team: "McLaren",
      nationality: "Australia",
      dateOfBirth: "2001-04-06",
      number: 81,
      image: "/src/assets/drivers/oscar-piastri.png"
    },

    "fernando-alonso": {
      name: "Fernando Alonso",
      team: "Aston Martin",
      nationality: "Spain",
      dateOfBirth: "1981-07-29",
      number: 14,
      image: "/src/assets/drivers/fernando-alonso.png"
    },

    "carlos-sainz": {
      name: "Carlos Sainz",
      team: "Williams",
      nationality: "Spain",
      dateOfBirth: "1994-09-01",
      number: 55,
      image: "/src/assets/drivers/carlos-sainz.png"
    },

    "alex-albon": {
      name: "Alex Albon",
      team: "Williams",
      nationality: "Thailand",
      dateOfBirth: "1996-03-23",
      number: 23,
      image: "/src/assets/drivers/alex-albon.png"
    },

    "yuki-tsunoda": {
      name: "Yuki Tsunoda",
      team: "Red Bull Racing",
      nationality: "Japan",
      dateOfBirth: "2000-05-11",
      number: 22,
      image: "/src/assets/drivers/yuki-tsunoda.png"
    },

    "pierre-gasly": {
      name: "Pierre Gasly",
      team: "Alpine",
      nationality: "France",
      dateOfBirth: "1996-02-07",
      number: 10,
      image: "/src/assets/drivers/pierre-gasly.png"
    },

    "esteban-ocon": {
      name: "Esteban Ocon",
      team: "Haas",
      nationality: "France",
      dateOfBirth: "1996-09-17",
      number: 31,
      image: "/src/assets/drivers/esteban-ocon.png"
    },

    "liam-lawson": {
      name: "Liam Lawson",
      team: "Racing Bulls",
      nationality: "New Zealand",
      dateOfBirth: "2002-02-11",
      number: 30,
      image: "/src/assets/drivers/liam-lawson.png"
    },

    "isack-hadjar": {
      name: "Isack Hadjar",
      team: "Racing Bulls",
      nationality: "France",
      dateOfBirth: "2004-09-28",
      number: 6,
      image: "/src/assets/drivers/isack-hadjar.png"
    },

    "lance-stroll": {
      name: "Lance Stroll",
      team: "Aston Martin",
      nationality: "Canada",
      dateOfBirth: "1998-10-29",
      number: 18,
      image: "/src/assets/drivers/lance-stroll.png"
    },

    "oliver-bearman": {
      name: "Oliver Bearman",
      team: "Haas",
      nationality: "United Kingdom",
      dateOfBirth: "2005-05-08",
      number: 87,
      image: "/src/assets/drivers/oliver-bearman.png"
    },

    "nico-hulkenberg": {
      name: "Nico Hulkenberg",
      team: "Audi",
      nationality: "Germany",
      dateOfBirth: "1987-08-19",
      number: 27,
      image: "/src/assets/drivers/nico-hulkenberg.png"
    },

    "gabriel-bortoleto": {
      name: "Gabriel Bortoleto",
      team: "Audi",
      nationality: "Brazil",
      dateOfBirth: "2004-10-14",
      number: 5,
      image: "/src/assets/drivers/gabriel-bortoleto.png"
    },

    "franco-colapinto": {
      name: "Franco Colapinto",
      team: "Alpine",
      nationality: "Argentina",
      dateOfBirth: "2003-05-27",
      number: 43,
      image: "/src/assets/drivers/franco-colapinto.png"
    },

    "sergio-perez": {
      name: "Sergio Perez",
      team: "Cadillac",
      nationality: "Mexico",
      dateOfBirth: "1990-01-26",
      number: 11,
      image: "/src/assets/drivers/sergio-perez.png"
    },

    "colton-herta": {
      name: "Colton Herta",
      team: "Cadillac",
      nationality: "United States",
      dateOfBirth: "2000-03-30",
      number: 26,
      image: "/src/assets/drivers/colton-herta.png"
    }

  }

const driver = driversData[name]
console.log(driver)
const [seasonStatsData, setSeasonStatsData] = useState(null)
const [careerStatsData, setCareerStatsData] = useState(null)

useEffect(() => {
  if (!driver) return;

  setSeasonStatsData(null);
  setCareerStatsData(null);

  async function loadStats() {
    try {
      console.log("Loading API stats for:", driver.name);

      const [seasonData, careerData] = await Promise.all([
        getCurrentDriverStats(
          driver.number,
          driver.name
        ),

        getCareerDriverStats(
          driver.number,
          driver.name
        )
      ]);

      console.log("Season Stats:", seasonData);
      console.log("Career Stats:", careerData);

      setSeasonStatsData(seasonData);
      setCareerStatsData(careerData);

    } catch (error) {
      console.error(
        "Failed to load driver statistics:",
        error
      );
    }
  }

  loadStats();

}, [name]);

  const seasonStats = seasonStatsData || {
  position: "-",
  points: "-",
  wins: "-",
  podiums: "-",
  fastestLaps: "-",
  poles: "-"
}

const careerStats = careerStatsData || {
  championships: "-",
  wins: "-",
  podiums: "-",
  poles: "-",
  fastestLaps: "-",
  points: "-"
}

  if (!driver) {
    return (
      <div className="profile-page">
        <h1>Driver Not Found</h1>
      </div>
    )
  }

  const birthDate = new Date(driver.dateOfBirth);
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

const hasBirthdayPassed =
  today.getMonth() > birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() &&
    today.getDate() >= birthDate.getDate());

if (!hasBirthdayPassed) {
  age--;
}

  return (
    <div className="profile-page">

      <div className="profile-card">

        <img
          src={driver.image}
          alt={driver.name}
          className="profile-image"
        />

        <h1>{driver.name}</h1>

        <h3>{driver.team}</h3>

        <div className="profile-details">

  <p><strong>Driver Number:</strong> #{driver.number}</p>

  <p><strong>Nationality:</strong> {driver.nationality}</p>

  <p>
  <strong>Date of Birth:</strong>{" "}
  {new Date(driver.dateOfBirth).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })}
</p>

  <p><strong>Age:</strong> {age}</p>

</div>

<h2 className="stats-heading">
  Season Statistics
</h2>

<div className="stats-grid">

  <StatCard
    title="🏆 Championship Position"
    value={seasonStats.position}
  />

  <StatCard
    title="📊 Points"
    value={seasonStats.points}
  />

  <StatCard
    title="🏁 Wins"
    value={seasonStats.wins}
  />

  <StatCard
    title="🥈 Podiums"
    value={seasonStats.podiums}
  />

  <StatCard
    title="⚡ Fastest Laps"
    value={seasonStats.fastestLaps}
  />

  <StatCard
    title="⭐ Pole Positions"
    value={seasonStats.poles}
  />

</div>

<h2 className="stats-heading">
  Career Statistics
</h2>

<div className="stats-grid">

  <StatCard
    title="🏆 World Championships"
    value={careerStats.championships}
  />

  <StatCard
    title="🏁 Career Wins"
    value={careerStats.wins}
  />

  <StatCard
    title="🥈 Career Podiums"
    value={careerStats.podiums}
  />

  <StatCard
    title="⭐ Career Pole Positions"
    value={careerStats.poles}
  />

  <StatCard
    title="⚡ Career Fastest Laps"
    value={careerStats.fastestLaps}
  />

  <StatCard
    title="📊 Career Points"
    value={careerStats.points}
  />

</div>


      </div>

    </div>
  )
}

export default DriverProfile