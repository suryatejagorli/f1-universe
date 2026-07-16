import australia from "../assets/circuits/australia.jpg";
import china from "../assets/circuits/china.jpg";
import japan from "../assets/circuits/japan.jpg";
import bahrain from "../assets/circuits/bahrain.jpg";
import saudi from "../assets/circuits/saudi.jpg";
import miami from "../assets/circuits/miami.jpg";
import imola from "../assets/circuits/imola.jpg";
import monaco from "../assets/circuits/monaco.jpg";
import spain from "../assets/circuits/spain.jpg";
import canada from "../assets/circuits/canada.jpg";
import austria from "../assets/circuits/austria.jpg";
import britain from "../assets/circuits/britain.jpg";
import belgium from "../assets/circuits/belgium.jpg";
import hungary from "../assets/circuits/hungary.jpg";
import netherlands from "../assets/circuits/netherlands.jpg";
import italy from "../assets/circuits/italy.jpg";
import azerbaijan from "../assets/circuits/azerbaijan.jpg";
import singapore from "../assets/circuits/singapore.jpg";
import usa from "../assets/circuits/usa.jpg";
import mexico from "../assets/circuits/mexico.jpg";
import brazil from "../assets/circuits/brazil.jpg";
import lasvegas from "../assets/circuits/lasvegas.jpg";
import qatar from "../assets/circuits/qatar.jpg";
import abudhabi from "../assets/circuits/abudhabi.jpg";

const circuits = [
  {
    circuitId: "albert_park",
    round: 1,
    grandPrix: "Australian Grand Prix",
    circuit: "Albert Park Circuit",
    country: "Australia",
    location: "Melbourne",
    image: australia,
    length: "5.278 km",
    laps: 58,
    turns: 14,
    type: "Street Circuit",
    date: "2026-03-08"
  },
  {
    circuitId: "shanghai",
    round: 2,
    grandPrix: "Chinese Grand Prix",
    circuit: "Shanghai International Circuit",
    country: "China",
    location: "Shanghai",
    image: china,
    length: "5.451 km",
    laps: 56,
    turns: 16,
    type: "Permanent Circuit",
    date: "2026-03-15"
  },
  {
    circuitId: "suzuka",
    round: 3,
    grandPrix: "Japanese Grand Prix",
    circuit: "Suzuka Circuit",
    country: "Japan",
    location: "Suzuka",
    image: japan,
    length: "5.807 km",
    laps: 53,
    turns: 18,
    type: "Permanent Circuit",
    date: "2026-03-22"
  },
  {
    circuitId: "bahrain",
    round: 4,
    grandPrix: "Bahrain Grand Prix",
    circuit: "Bahrain International Circuit",
    country: "Bahrain",
    location: "Sakhir",
    image: bahrain,
    length: "5.412 km",
    laps: 57,
    turns: 15,
    type: "Permanent Circuit",
    date: "2026-04-05"
  },
  {
    circuitId: "jeddah",
    round: 5,
    grandPrix: "Saudi Arabian Grand Prix",
    circuit: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    location: "Jeddah",
    image: saudi,
    length: "6.174 km",
    laps: 50,
    turns: 27,
    type: "Street Circuit",
    date: "2026-04-19"
  },
  {
    circuitId: "miami",
    round: 6,
    grandPrix: "Miami Grand Prix",
    circuit: "Miami International Autodrome",
    country: "United States",
    location: "Miami",
    image: miami,
    length: "5.412 km",
    laps: 57,
    turns: 19,
    type: "Street Circuit",
    date: "2026-05-03"
  },
  {
    circuitId: "imola",
    round: 7,
    grandPrix: "Emilia Romagna Grand Prix",
    circuit: "Imola Circuit",
    country: "Italy",
    location: "Imola",
    image: imola,
    length: "4.909 km",
    laps: 63,
    turns: 19,
    type: "Permanent Circuit",
    date: "2026-05-17"
  },
  {
    circuitId: "monaco",
    round: 8,
    grandPrix: "Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    country: "Monaco",
    location: "Monte Carlo",
    image: monaco,
    length: "3.337 km",
    laps: 78,
    turns: 19,
    type: "Street Circuit",
    date: "2026-05-24"
  },
  {
    circuitId: "catalunya",
    round: 9,
    grandPrix: "Spanish Grand Prix",
    circuit: "Circuit de Barcelona-Catalunya",
    country: "Spain",
    location: "Barcelona",
    image: spain,
    length: "4.657 km",
    laps: 66,
    turns: 14,
    type: "Permanent Circuit",
    date: "2026-06-07"
  },
  {
    circuitId: "villeneuve",
    round: 10,
    grandPrix: "Canadian Grand Prix",
    circuit: "Circuit Gilles Villeneuve",
    country: "Canada",
    location: "Montreal",
    image: canada,
    length: "4.361 km",
    laps: 70,
    turns: 14,
    type: "Semi-Street Circuit",
    date: "2026-06-14"
  },
  {
    circuitId: "red_bull_ring",
    round: 11,
    grandPrix: "Austrian Grand Prix",
    circuit: "Red Bull Ring",
    country: "Austria",
    location: "Spielberg",
    image: austria,
    length: "4.318 km",
    laps: 71,
    turns: 10,
    type: "Permanent Circuit",
    date: "2026-06-28"
  },
  {
    circuitId: "silverstone",
    round: 12,
    grandPrix: "British Grand Prix",
    circuit: "Silverstone Circuit",
    country: "United Kingdom",
    location: "Silverstone",
    image: britain,
    length: "5.891 km",
    laps: 52,
    turns: 18,
    type: "Permanent Circuit",
    date: "2026-07-05"
  },
  {
    circuitId: "spa",
    round: 13,
    grandPrix: "Belgian Grand Prix",
    circuit: "Circuit de Spa-Francorchamps",
    country: "Belgium",
    location: "Stavelot",
    image: belgium,
    length: "7.004 km",
    laps: 44,
    turns: 19,
    type: "Permanent Circuit",
    date: "2026-07-19"
  },
  {
    circuitId: "hungaroring",
    round: 14,
    grandPrix: "Hungarian Grand Prix",
    circuit: "Hungaroring",
    country: "Hungary",
    location: "Budapest",
    image: hungary,
    length: "4.381 km",
    laps: 70,
    turns: 14,
    type: "Permanent Circuit",
    date: "2026-08-02"
  },
  {
    circuitId: "zandvoort",
    round: 15,
    grandPrix: "Dutch Grand Prix",
    circuit: "Circuit Zandvoort",
    country: "Netherlands",
    location: "Zandvoort",
    image: netherlands,
    length: "4.259 km",
    laps: 72,
    turns: 14,
    type: "Permanent Circuit",
    date: "2026-08-16"
  },
  {
    circuitId: "monza",
    round: 16,
    grandPrix: "Italian Grand Prix",
    circuit: "Monza Circuit",
    country: "Italy",
    location: "Monza",
    image: italy,
    length: "5.793 km",
    laps: 53,
    turns: 11,
    type: "Permanent Circuit",
    date: "2026-08-30"
  },
  {
    circuitId: "baku",
    round: 17,
    grandPrix: "Azerbaijan Grand Prix",
    circuit: "Baku City Circuit",
    country: "Azerbaijan",
    location: "Baku",
    image: azerbaijan,
    length: "6.003 km",
    laps: 51,
    turns: 20,
    type: "Street Circuit",
    date: "2026-09-13"
  },
  {
    circuitId: "marina_bay",
    round: 18,
    grandPrix: "Singapore Grand Prix",
    circuit: "Marina Bay Street Circuit",
    country: "Singapore",
    location: "Singapore",
    image: singapore,
    length: "4.940 km",
    laps: 62,
    turns: 19,
    type: "Street Circuit",
    date: "2026-09-20"
  },
  {
    circuitId: "americas",
    round: 19,
    grandPrix: "United States Grand Prix",
    circuit: "Circuit of the Americas",
    country: "United States",
    location: "Austin",
    image: usa,
    length: "5.513 km",
    laps: 56,
    turns: 20,
    type: "Permanent Circuit",
    date: "2026-10-04"
  },
  {
    circuitId: "rodriguez",
    round: 20,
    grandPrix: "Mexico City Grand Prix",
    circuit: "Autódromo Hermanos Rodríguez",
    country: "Mexico",
    location: "Mexico City",
    image: mexico,
    length: "4.304 km",
    laps: 71,
    turns: 17,
    type: "Permanent Circuit",
    date: "2026-10-18"
  },
  {
    circuitId: "interlagos",
    round: 21,
    grandPrix: "São Paulo Grand Prix",
    circuit: "Interlagos",
    country: "Brazil",
    location: "São Paulo",
    image: brazil,
    length: "4.309 km",
    laps: 71,
    turns: 15,
    type: "Permanent Circuit",
    date: "2026-11-01"
  },
  {
    circuitId: "vegas",
    round: 22,
    grandPrix: "Las Vegas Grand Prix",
    circuit: "Las Vegas Strip Circuit",
    country: "United States",
    location: "Las Vegas",
    image: lasvegas,
    length: "6.201 km",
    laps: 50,
    turns: 17,
    type: "Street Circuit",
    date: "2026-11-15"
  },
  {
    circuitId: "losail",
    round: 23,
    grandPrix: "Qatar Grand Prix",
    circuit: "Lusail International Circuit",
    country: "Qatar",
    location: "Lusail",
    image: qatar,
    length: "5.419 km",
    laps: 57,
    turns: 16,
    type: "Permanent Circuit",
    date: "2026-11-29"
  },
  {
    circuitId: "yas_marina",
    round: 24,
    grandPrix: "Abu Dhabi Grand Prix",
    circuit: "Yas Marina Circuit",
    country: "United Arab Emirates",
    location: "Abu Dhabi",
    image: abudhabi,
    length: "5.281 km",
    laps: 58,
    turns: 16,
    type: "Permanent Circuit",
    date: "2026-12-06"
  }
];

const sprintData = [
  { round: 1, grandPrix: "Australian Grand Prix", sprint: false },
  { round: 2, grandPrix: "Chinese Grand Prix", sprint: true },
  { round: 3, grandPrix: "Japanese Grand Prix", sprint: false },
  { round: 4, grandPrix: "Bahrain Grand Prix", sprint: false },
  { round: 5, grandPrix: "Saudi Arabian Grand Prix", sprint: false },
  { round: 6, grandPrix: "Miami Grand Prix", sprint: true },
  { round: 7, grandPrix: "Emilia Romagna Grand Prix", sprint: false },
  { round: 8, grandPrix: "Monaco Grand Prix", sprint: false },
  { round: 9, grandPrix: "Spanish Grand Prix", sprint: true },
  { round: 10, grandPrix: "Canadian Grand Prix", sprint: false },
  { round: 11, grandPrix: "Austrian Grand Prix", sprint: true },
  { round: 12, grandPrix: "British Grand Prix", sprint: false },
  { round: 13, grandPrix: "Belgian Grand Prix", sprint: true },
  { round: 14, grandPrix: "Hungarian Grand Prix", sprint: false },
  { round: 15, grandPrix: "Dutch Grand Prix", sprint: false },
  { round: 16, grandPrix: "Italian Grand Prix", sprint: false },
  { round: 17, grandPrix: "Azerbaijan Grand Prix", sprint: true },
  { round: 18, grandPrix: "Singapore Grand Prix", sprint: false },
  { round: 19, grandPrix: "United States Grand Prix", sprint: true },
  { round: 20, grandPrix: "Mexico City Grand Prix", sprint: false },
  { round: 21, grandPrix: "São Paulo Grand Prix", sprint: true },
  { round: 22, grandPrix: "Las Vegas Grand Prix", sprint: false },
  { round: 23, grandPrix: "Qatar Grand Prix", sprint: true },
  { round: 24, grandPrix: "Abu Dhabi Grand Prix", sprint: false }
];

export function mergeRaceData(apiRaces = []) {
  return (apiRaces || []).map((apiRace) => {
    const circuitId = apiRace.Circuit?.circuitId;

    // Match API race with manual circuit data using circuitId,
    // NOT the round number.
    const manualCircuit = circuits.find(
      (circuit) => circuit.circuitId === circuitId
    );

    return {
      // Manual static data:
      // image, length, laps, turns and type
      ...(manualCircuit || {}),

      // Dynamic API data:
      round: Number(apiRace.round),

      grandPrix:
        apiRace.raceName ||
        manualCircuit?.grandPrix ||
        "Unknown Grand Prix",

      circuit:
        apiRace.Circuit?.circuitName ||
        manualCircuit?.circuit ||
        "Unknown Circuit",

      location:
        apiRace.Circuit?.Location?.locality ||
        manualCircuit?.location ||
        "",

      country:
        apiRace.Circuit?.Location?.country ||
        manualCircuit?.country ||
        "",

      date: apiRace.date || null,
      time: apiRace.time || null,

      // Keep the API circuit ID in final merged data
      circuitId
    };
  });
}

export function getCurrentRaceIndex(mergedRaces = []) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingRaceIndex = mergedRaces.findIndex((race) => {
    if (!race.date) {
      return false;
    }

    const raceDate = new Date(race.date);

    if (Number.isNaN(raceDate.getTime())) {
      return false;
    }

    raceDate.setHours(0, 0, 0, 0);

    return raceDate >= today;
  });

  return upcomingRaceIndex === -1
    ? Math.max(mergedRaces.length - 1, 0)
    : upcomingRaceIndex;
}

export async function loadRaceSchedule(
  year = new Date().getFullYear()
) {
  try {
    const response = await fetch(
      `https://api.jolpi.ca/ergast/f1/${year}/races.json`
    );

    if (!response.ok) {
      throw new Error("Race schedule unavailable");
    }

    const data = await response.json();

    const races =
      data?.MRData?.RaceTable?.Races || [];

    const mergedRaces = mergeRaceData(races);

    return {
      races: mergedRaces,
      currentRaceIndex:
        getCurrentRaceIndex(mergedRaces)
    };

  } catch (error) {
    console.error(
      "Failed to load race schedule:",
      error
    );

    return {
      races: [],
      currentRaceIndex: 0
    };
  }
}

export { circuits, sprintData };