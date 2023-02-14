import { CharactersInterface, PlanetInterface } from "../types/app-interfaces";

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
  for (let residents of planetsList) {
    getResidentsFromPlanets(residents.residents);
  }
  return planetsList;
};

export const getResidentsFromPlanets = async (residents: string[]) => {
  const residentsList: CharactersInterface[] = [];
  for (let resident of residents) {
    const response = await fetch(resident);
    const residentsData = await response.json();
    residentsList.push(residentsData);
    residentsList.sort((a, b) => a.id - b.id);
  }
};
