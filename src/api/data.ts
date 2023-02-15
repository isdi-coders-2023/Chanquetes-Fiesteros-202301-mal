import { CharactersInterface, PlanetInterface } from "../types/appInterfaces";

export const getPlanetsData = async (planets: number[]) => {
  const planetsList: PlanetInterface[] = [];
  for (let planet of planets) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/${planet}`
    );
    const planetData: PlanetInterface = await response.json();
    planetsList.push(planetData);
    planetsList.sort((a, b) => a.id - b.id);
  }
  return planetsList;
};

export const getCharactersData = async (residents: string[]) => {
  const residentsList: CharactersInterface[] = [];
  for (let resident of residents) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/${resident}`
    );
    const residentsData = await response.json();
    residentsList.push(residentsData);
    residentsList.sort((a, b) => a.id - b.id);
  }
  return residentsList;
};
