import { circuits } from "../data/circuits";

export function getCurrentRace() {
  const today = new Date();

  const currentRaceIndex = circuits.findIndex((race, index) => {
    const raceDate = new Date(race.date);

    const nextRace =
      index < circuits.length - 1
        ? new Date(circuits[index + 1].date)
        : null;

    return today >= raceDate && (!nextRace || today < nextRace);
  });

  return {
    currentRaceIndex:
      currentRaceIndex === -1 ? 0 : currentRaceIndex,
    currentRace:
      circuits[currentRaceIndex === -1 ? 0 : currentRaceIndex],
  };
}