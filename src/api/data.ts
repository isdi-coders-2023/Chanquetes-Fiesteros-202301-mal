import {
  CharactersInterface,
  CharacterInterface,
  PlanetsInterface,
  PlanetInterface,
} from "../types/appInterfaces";

export const getPlanetsData = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
  const planetsData: PlanetsInterface = await response.json();
  const planetsList: PlanetInterface[] = planetsData.results;
  return planetsList;
};

export const getCharactersData = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const charactersData: CharactersInterface = await response.json();
  const charactersList: CharacterInterface[] = charactersData.results;
  return charactersList;
};

export const getPlanetById = async (id: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/${id}`
  );
  const planetData: PlanetInterface = await response.json();
  return planetData;
};

export const getCharacterById = async (id: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const characterData: CharacterInterface = await response.json();
  return characterData;
};
