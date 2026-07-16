import { Link } from "react-router-dom"

import redbull from "../assets/team-logos/redbull.png"
import mclaren from "../assets/team-logos/mclaren.png"
import ferrari from "../assets/team-logos/ferrari.png"
import mercedes from "../assets/team-logos/mercedes.png"
import astonmartin from "../assets/team-logos/astonmartin.png"
import alpine from "../assets/team-logos/alpine.png"
import williams from "../assets/team-logos/williams.png"
import haas from "../assets/team-logos/haas.png"
import rb from "../assets/team-logos/rb.png"
import audi from "../assets/team-logos/audi.png"
import cadillac from "../assets/team-logos/cadillac.png"

function Teams() {

  const teams = [

    {
      id: "red-bull",
      name: "Red Bull Racing",
      logo: redbull,
      drivers: "Max Verstappen, Yuki Tsunoda"
    },

    {
      id: "mclaren",
      name: "McLaren",
      logo: mclaren,
      drivers: "Lando Norris, Oscar Piastri"
    },

    {
      id: "ferrari",
      name: "Ferrari",
      logo: ferrari,
      drivers: "Charles Leclerc, Lewis Hamilton"
    },

    {
      id: "mercedes",
      name: "Mercedes",
      logo: mercedes,
      drivers: "George Russell, Kimi Antonelli"
    },

    {
      id: "aston-martin",
      name: "Aston Martin",
      logo: astonmartin,
      drivers: "Fernando Alonso, Lance Stroll"
    },

    {
      id: "alpine",
      name: "Alpine",
      logo: alpine,
      drivers: "Pierre Gasly, Franco Colapinto"
    },

    {
      id: "williams",
      name: "Williams",
      logo: williams,
      drivers: "Alex Albon, Carlos Sainz"
    },

    {
      id: "haas",
      name: "Haas",
      logo: haas,
      drivers: "Esteban Ocon, Oliver Bearman"
    },

    {
      id: "racing-bulls",
      name: "Racing Bulls",
      logo: rb,
      drivers: "Liam Lawson, Isack Hadjar"
    },

    {
      id: "audi",
      name: "Audi",
      logo: audi,
      drivers: "Nico Hulkenberg, Gabriel Bortoleto"
    },

    {
      id: "cadillac",
      name: "Cadillac",
      logo: cadillac,
      drivers: "Sergio Perez, Colton Herta"
    }

  ]

  return (
    <div className="teams-page">

      <h1>Formula 1 Teams</h1>

      <div className="teams-grid">

        {teams.map((team) => (

          <div
            className="team-card"
            key={team.name}
          >

            <div className="team-logo-box">

              <img
                src={team.logo}
                alt={team.name}
                className="team-logo"
              />

            </div>

            <h2 className="team-name">
              {team.name}
            </h2>

            <p className="team-drivers">
              {team.drivers}
            </p>

            <Link to={`/teams/${team.id}`}>
              <button>
                View Team
              </button>
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Teams