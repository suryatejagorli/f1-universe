const BASE_URL = "https://api.jolpi.ca/ergast/f1";

// Cache API responses for 10 minutes
const CACHE_DURATION = 10 * 60 * 1000;

/* =========================================================
   COMMON FETCH FUNCTION WITH CACHE
========================================================= */

async function fetchJson(url, label) {
  const cacheKey = `standings_cache_${url}`;

  // Check if data already exists in localStorage
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
      // Remove invalid cache
      localStorage.removeItem(cacheKey);
    }
  }

  // No valid cache → fetch from API
  console.log(`Fetching API: ${label}`);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `${label} failed with status ${response.status}`
    );
  }

  const data = await response.json();

  // Save API response in localStorage
  localStorage.setItem(
    cacheKey,
    JSON.stringify({
      timestamp: Date.now(),
      data: data
    })
  );

  return data;
}


/* =========================================================
   1. DRIVER STANDINGS
========================================================= */

export async function getDriverStandings(season = 2026) {
  try {
    const data = await fetchJson(
      `${BASE_URL}/${season}/driverStandings.json`,
      `driver standings ${season}`
    );

    return (
      data?.MRData?.StandingsTable?.StandingsLists?.[0]
        ?.DriverStandings ?? []
    );
  } catch (error) {
    console.error("Driver Standings Error:", error);
    return [];
  }
}


/* =========================================================
   2. CONSTRUCTOR STANDINGS
========================================================= */

export async function getConstructorStandings(season = 2026) {
  try {
    const data = await fetchJson(
      `${BASE_URL}/${season}/constructorStandings.json`,
      `constructor standings ${season}`
    );

    return (
      data?.MRData?.StandingsTable?.StandingsLists?.[0]
        ?.ConstructorStandings ?? []
    );
  } catch (error) {
    console.error("Constructor Standings Error:", error);
    return [];
  }
}


/* =========================================================
   3. RACE CALENDAR
========================================================= */

export async function getRaceCalendar(season = 2026) {
  try {
    const data = await fetchJson(
      `${BASE_URL}/${season}/races.json`,
      `race calendar ${season}`
    );

    return (
      data?.MRData?.RaceTable?.Races ?? []
    );
  } catch (error) {
    console.error("Race Calendar Error:", error);
    return [];
  }
}


/* =========================================================
   4. RACE SCHEDULE

   NOTE:
   getRaceCalendar() and getRaceSchedule() use the SAME API URL.
   Because fetchJson() caches by URL, both functions will share
   the same cached API response.
========================================================= */

export async function getRaceSchedule(season = 2026) {
  try {
    const data = await fetchJson(
      `${BASE_URL}/${season}/races.json`,
      `race schedule ${season}`
    );

    return (
      data?.MRData?.RaceTable?.Races ?? []
    );
  } catch (error) {
    console.error("Race Schedule Error:", error);
    return [];
  }
}


/* =========================================================
   5. ALL DRIVER RACE RESULTS FOR A SEASON
========================================================= */

export async function getDriverRaceResults(season = 2026) {
  try {
    const data = await fetchJson(
      `${BASE_URL}/${season}/results.json?limit=1000`,
      `driver race results ${season}`
    );

    return (
      data?.MRData?.RaceTable?.Races ?? []
    );
  } catch (error) {
    console.error("Driver Race Results Error:", error);
    return [];
  }
}


/* =========================================================
   6. DRIVER STANDINGS AFTER A SPECIFIC ROUND
========================================================= */

export async function getDriverStandingsByRound(
  season = 2026,
  round
) {
  try {
    const data = await fetchJson(
      `${BASE_URL}/${season}/${round}/driverStandings.json`,
      `driver standings ${season} round ${round}`
    );

    return (
      data?.MRData?.StandingsTable?.StandingsLists?.[0]
        ?.DriverStandings ?? []
    );
  } catch (error) {
    console.error(
      `Driver Standings Round ${round} Error:`,
      error
    );

    return [];
  }
}


/* =========================================================
   7. CONSTRUCTOR STANDINGS AFTER A SPECIFIC ROUND
========================================================= */

export async function getConstructorStandingsByRound(
  season = 2026,
  round
) {
  try {
    const data = await fetchJson(
      `${BASE_URL}/${season}/${round}/constructorStandings.json`,
      `constructor standings ${season} round ${round}`
    );

    return (
      data?.MRData?.StandingsTable?.StandingsLists?.[0]
        ?.ConstructorStandings ?? []
    );
  } catch (error) {
    console.error(
      `Constructor Standings Round ${round} Error:`,
      error
    );

    return [];
  }
}


/* =========================================================
   8. RACE RESULTS FOR A SPECIFIC ROUND
========================================================= */

export async function getRaceResults(season, round) {
  try {
    const data = await fetchJson(
      `${BASE_URL}/${season}/${round}/results.json`,
      `race results ${season} round ${round}`
    );

    return (
      data?.MRData?.RaceTable?.Races?.[0]?.Results ?? []
    );
  } catch (error) {
    console.error(
      `Race Results ${season} Round ${round} Error:`,
      error
    );

    return [];
  }
}