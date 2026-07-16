const BASE_URL = "https://api.jolpi.ca/ergast/f1";
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

// Map your team.name → Jolpica constructor ID
const constructorIdMap = {
  "Red Bull Racing": "red_bull",
  "Ferrari": "ferrari",
  "Mercedes": "mercedes",
  "McLaren": "mclaren",
  "Aston Martin": "aston_martin",
  "Alpine": "alpine",
  "Williams": "williams",
  "Haas": "haas",
  "Racing Bulls": "rb",
  "Audi": "audi",
  "Cadillac": "cadillac"
};

async function fetchJson(url, label) {
  const cacheKey = `f1_team_cache_${url}`;

  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    try {
      const parsed = JSON.parse(cached);

      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        console.log(`Using cached team data: ${label}`);
        return parsed.data;
      }

      localStorage.removeItem(cacheKey);
    } catch {
      localStorage.removeItem(cacheKey);
    }
  }

  try {
    console.log(`Fetching team API: ${label}`);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `${label} failed with status ${response.status}`
      );
    }

    const data = await response.json();

    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        timestamp: Date.now(),
        data
      })
    );

    return data;

  } catch (error) {
    console.error(`Failed to load ${label}:`, error);
    throw error;
  }
}

export async function getTeamCareerStats(teamName) {

  const constructorId = constructorIdMap[teamName];

  if (!constructorId) {
    console.warn(
      `No constructor ID found for team: ${teamName}`
    );

    return null;
  }

  console.log(
    `Loading career stats for ${teamName} → ${constructorId}`
  );

  let championships = "-";
  let wins = "-";
  let podiums = "-";
  let poles = "-";
  let fastestLaps = "-";

 // ==========================================
// 1. CONSTRUCTOR CHAMPIONSHIPS
// ==========================================

try {
  const currentYear = new Date().getFullYear();

  let championshipCount = 0;

  // Constructors' Championship started in 1958
  for (let year = 1958; year <= currentYear; year++) {
    try {
      const data = await fetchJson(
        `${BASE_URL}/${year}/constructorStandings.json`,
        `constructor standings ${year}`
      );

      const standings =
        data?.MRData?.StandingsTable?.StandingsLists?.[0]
          ?.ConstructorStandings || [];

      const champion = standings.find(
        (standing) => Number(standing.position) === 1
      );

      if (champion?.Constructor?.constructorId === constructorId) {
        championshipCount++;
      }
    } catch (error) {
      console.warn(`Could not load constructor standings for ${year}`);
    }
  }

  championships = championshipCount;

} catch (error) {
  console.error(
    "Failed to calculate constructor championships:",
    error
  );

  championships = "-";
}


  // ==========================================
  // 2. CAREER RACE RESULTS
  // Wins + Podiums + Fastest Laps
  // ==========================================

  try {

    const data = await fetchJson(
      `${BASE_URL}/constructors/${constructorId}/results.json?limit=2000`,
      "constructor race results"
    );

    const races =
      data?.MRData?.RaceTable?.Races || [];

    let winCount = 0;
    let podiumCount = 0;
    let fastestLapCount = 0;

    races.forEach((race) => {

      const results = race.Results || [];

      results.forEach((result) => {

        // Wins
        if (Number(result.position) === 1) {
          winCount++;
        }

        // Podiums
        if (
          Number(result.position) >= 1 &&
          Number(result.position) <= 3
        ) {
          podiumCount++;
        }

        // Fastest Laps
        if (
          result.FastestLap &&
          result.FastestLap.rank === "1"
        ) {
          fastestLapCount++;
        }

      });

    });

    wins = winCount;
    podiums = podiumCount;
    fastestLaps = fastestLapCount;

  } catch (error) {

    console.error(
      "Failed to load constructor race results:",
      error
    );

  }


  // ==========================================
  // 3. CAREER POLE POSITIONS
  // ==========================================

  try {

    const data = await fetchJson(
      `${BASE_URL}/constructors/${constructorId}/qualifying.json?limit=2000`,
      "constructor qualifying results"
    );

    const races =
      data?.MRData?.RaceTable?.Races || [];

    let poleCount = 0;

    races.forEach((race) => {

      const qualifyingResults =
        race.QualifyingResults || [];

      qualifyingResults.forEach((result) => {

        if (Number(result.position) === 1) {
          poleCount++;
        }

      });

    });

    poles = poleCount;

  } catch (error) {

    console.error(
      "Failed to load constructor qualifying results:",
      error
    );

  }


  // ==========================================
  // RETURN ALL STATISTICS
  // ==========================================

  const stats = {
    championships,
    wins,
    podiums,
    poles,
    fastestLaps
  };

  console.log(
    `${teamName} career stats:`,
    stats
  );

  return stats;
}