const BASE_URL = "https://api.jolpi.ca/ergast/f1";

const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

async function fetchJson(url, label) {
  const cacheKey = `f1_cache_${url}`;

  // Check if data already exists in cache
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    try {
      const parsed = JSON.parse(cached);

      // Use cached data if it is less than 30 minutes old
      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        console.log(`Using cached data: ${label}`);
        return parsed.data;
      }

      // Remove expired cache
      localStorage.removeItem(cacheKey);
    } catch {
      localStorage.removeItem(cacheKey);
    }
  }

  try {
    console.log(`Fetching API: ${label}`);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `${label} failed with status ${response.status}`
      );
    }

    const data = await response.json();

    // Store API response in browser cache
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

function normalizeName(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

async function getDriverId(driverNumber, driverName) {
  const driverIdMap = {
    "Max Verstappen": "max_verstappen",
    "Lewis Hamilton": "hamilton",
    "Charles Leclerc": "leclerc",
    "George Russell": "russell",
    "Kimi Antonelli": "antonelli",
    "Lando Norris": "norris",
    "Oscar Piastri": "piastri",
    "Fernando Alonso": "alonso",
    "Carlos Sainz": "sainz",
    "Alex Albon": "albon",
    "Yuki Tsunoda": "tsunoda",
    "Pierre Gasly": "gasly",
    "Esteban Ocon": "ocon",
    "Liam Lawson": "lawson",
    "Isack Hadjar": "hadjar",
    "Lance Stroll": "stroll",
    "Oliver Bearman": "bearman",
    "Nico Hulkenberg": "hulkenberg",
    "Gabriel Bortoleto": "bortoleto",
    "Franco Colapinto": "colapinto",
    "Sergio Perez": "perez"
  };

  // First check known driver IDs
  if (driverIdMap[driverName]) {
    const driverId = driverIdMap[driverName];

    console.log(`Resolved ${driverName} → ${driverId}`);

    return driverId;
  }

  // If driver is not in map, search automatically from Jolpica API
  try {
    console.log(`Searching Jolpica API for driver: ${driverName}`);

    const data = await fetchJson(
      `${BASE_URL}/drivers.json?limit=2000`,
      "driver list"
    );

    const drivers =
      data?.MRData?.DriverTable?.Drivers || [];

    const targetName = normalizeName(driverName);

    const matchedDriver = drivers.find((driver) => {
      const fullName = normalizeName(
        `${driver.givenName} ${driver.familyName}`
      );

      return fullName === targetName;
    });

    if (matchedDriver) {
      console.log(
        `Found ${driverName} in Jolpica → ${matchedDriver.driverId}`
      );

      return matchedDriver.driverId;
    }

    console.warn(
      `${driverName} is not currently available in Jolpica API`
    );

    return null;

  } catch (error) {
    console.error(
      `Failed to resolve Jolpica driver ID for ${driverName}:`,
      error
    );

    return null;
  }
}

async function fetchCareerRaceTable(driverId, suffix, label, limit = 1000) {
  const allEntries = [];
  let offset = 0;

  while (true) {
    const url = `${BASE_URL}/drivers/${driverId}/${suffix}.json?limit=${limit}&offset=${offset}`;
    const data = await fetchJson(url, label);
    const entries = data?.MRData?.RaceTable?.Races || [];

    if (!entries.length) {
      break;
    }

    allEntries.push(...entries);

    if (entries.length < limit) {
      break;
    }

    offset += limit;
  }

  return allEntries;
}

export async function getCurrentDriverStandings(driverNumber, driverName) {
  const driverId = await getDriverId(driverNumber, driverName);

  if (!driverId) {
    return null;
  }

  try {
    const data = await fetchJson(
      `${BASE_URL}/current/drivers/${driverId}/driverStandings.json`,
      "current standings"
    );

    const standings =
      data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings?.[0];

    if (!standings) {
      return null;
    }

    return {
      position: standings.position || "-",
      points: standings.points || "-",
      wins: standings.wins || "-"
    };
  } catch (error) {
    console.error("Failed to load current standings:", error);
    return null;
  }
}

// ===============================
// CURRENT SEASON STATISTICS
// ===============================

export async function getCurrentDriverStats(driverNumber, driverName) {
  const driverId = await getDriverId(driverNumber, driverName);

  if (!driverId) {
    return null;
  }

  let standings = null;
  let podiums = null;
  let fastestLaps = null;
  let poles = null;

  try {
    const standingsData = await fetchJson(
      `${BASE_URL}/current/drivers/${driverId}/driverStandings.json`,
      "current standings"
    );

    standings =
      standingsData?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings?.[0];
  } catch (error) {
    console.error("Failed to load current standings:", error);
  }

  try {
    const resultsData = await fetchJson(
      `${BASE_URL}/current/drivers/${driverId}/results.json?limit=100`,
      "season race results"
    );

    const races = resultsData?.MRData?.RaceTable?.Races || [];

    podiums = races.filter((race) => {
      const result = race.Results?.[0];
      return result && Number(result.position) <= 3;
    }).length;

    fastestLaps = races.filter((race) => {
      const result = race.Results?.[0];
      return result?.FastestLap?.rank === "1";
    }).length;
  } catch (error) {
    console.error("Failed to load season race results:", error);
  }

  try {
    const qualifyingData = await fetchJson(
      `${BASE_URL}/current/drivers/${driverId}/qualifying.json?limit=100`,
      "season qualifying results"
    );

    const qualifyingRaces = qualifyingData?.MRData?.RaceTable?.Races || [];

    poles = qualifyingRaces.filter((race) => {
      const result = race.QualifyingResults?.[0];
      return result && Number(result.position) === 1;
    }).length;
  } catch (error) {
    console.error("Failed to load season qualifying results:", error);
  }

  return {
    position: standings?.position ?? "-",
    points: standings?.points ?? "-",
    wins: standings?.wins ?? "-",
    podiums: podiums ?? "-",
    fastestLaps: fastestLaps ?? "-",
    poles: poles ?? "-"
  };
}

// ===============================
// CAREER STATISTICS
// ===============================

export async function getCareerDriverStats(driverNumber, driverName) {
  const driverId = await getDriverId(driverNumber, driverName);

  if (!driverId) {
    return null;
  }

  let championships = null;
  let wins = null;
  let podiums = null;
  let poles = null;
  let fastestLaps = null;
  let points = null;

  const championshipMap = {
  max_verstappen: 4,
  hamilton: 7,
  leclerc: 0,
  russell: 0,
  antonelli: 0,
  norris: 1,
  piastri: 0,
  alonso: 2,
  sainz: 0,
  albon: 0,
  tsunoda: 0,
  gasly: 0,
  ocon: 0,
  lawson: 0,
  hadjar: 0,
  stroll: 0,
  bearman: 0,
  hulkenberg: 0,
  bortoleto: 0,
  colapinto: 0,
  perez: 0
};

championships = championshipMap[driverId] ?? 0;

  try {
    const races = await fetchCareerRaceTable(
      driverId,
      "results",
      "career race results",
      1000
    );

    wins = races.filter((race) => {
      const result = race.Results?.[0];
      return result && Number(result.position) === 1;
    }).length;

    podiums = races.filter((race) => {
      const result = race.Results?.[0];
      return result && Number(result.position) <= 3;
    }).length;

    fastestLaps = races.filter((race) => {
      const result = race.Results?.[0];
      return result?.FastestLap?.rank === "1";
    }).length;

    points = races.reduce((total, race) => {
      const result = race.Results?.[0];
      return total + Number(result?.points || 0);
    }, 0);
  } catch (error) {
    console.error("Failed to load career race results:", error);
  }

  try {
    const qualifyingRaces = await fetchCareerRaceTable(
      driverId,
      "qualifying",
      "career qualifying results",
      1000
    );

    poles = qualifyingRaces.filter((race) => {
      const result = race.QualifyingResults?.[0];
      return result && Number(result.position) === 1;
    }).length;
  } catch (error) {
    console.error("Failed to load career qualifying results:", error);
  }

  return {
    championships: championships ?? "-",
    wins: wins ?? "-",
    podiums: podiums ?? "-",
    poles: poles ?? "-",
    fastestLaps: fastestLaps ?? "-",
    points: points === null ? "-" : Math.round(points * 100) / 100
  };
}