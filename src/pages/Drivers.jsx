import { Link } from "react-router-dom"

function Drivers() {

  const drivers = [

    {
      name: "Max Verstappen",
      team: "Red Bull Racing"
    },

    {
      name: "Lewis Hamilton",
      team: "Ferrari"
    },

    {
      name: "Charles Leclerc",
      team: "Ferrari"
    },

    {
      name: "George Russell",
      team: "Mercedes"
    },

    {
      name: "Kimi Antonelli",
      team: "Mercedes"
    },

    {
      name: "Lando Norris",
      team: "McLaren"
    },

    {
      name: "Oscar Piastri",
      team: "McLaren"
    },

    {
      name: "Fernando Alonso",
      team: "Aston Martin"
    },

    {
      name: "Carlos Sainz",
      team: "Williams"
    },

    {
      name: "Alex Albon",
      team: "Williams"
    },

    {
      name: "Yuki Tsunoda",
      team: "Red Bull Racing"
    },

    {
      name: "Pierre Gasly",
      team: "Alpine"
    },

    {
      name: "Esteban Ocon",
      team: "Haas"
    },

    {
      name: "Liam Lawson",
      team: "Racing Bulls"
    },

    {
      name: "Isack Hadjar",
      team: "Racing Bulls"
    },

    {
      name: "Lance Stroll",
      team: "Aston Martin"
    },

    {
      name: "Oliver Bearman",
      team: "Haas"
    },

    {
      name: "Nico Hulkenberg",
      team: "Audi"
    },

    {
      name: "Gabriel Bortoleto",
      team: "Audi"
    },

    {
      name: "Franco Colapinto",
      team: "Alpine"
    },

    {
      name: "Sergio Perez",
      team: "Cadillac"
    },

    {
      name: "Colton Herta",
      team: "Cadillac"
    }

  ]

  return (

    <div className="drivers-page">

      <h1>Formula 1 Drivers</h1>

      <div className="drivers-grid">

        {drivers.map((driver) => (

          <div
            className="driver-card"
            key={driver.name}
          >

            <div className="driver-photo-box">

              <img
                src={
                  new URL(
                    `../assets/drivers/${driver.name
                      .toLowerCase()
                      .replaceAll(" ", "-")}.png`,
                    import.meta.url
                  ).href
                }
                alt={driver.name}
                className="driver-photo"
              />

            </div>

            <h2 className="driver-name">
              {driver.name}
            </h2>

            <p className="driver-team">
              {driver.team}
            </p>

            <Link
              to={`/drivers/${driver.name
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >

              <button>
                View Profile
              </button>

            </Link>

          </div>

        ))}

      </div>

    </div>

  )

}

export default Drivers