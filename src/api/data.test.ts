import { server } from "../mocks/server";
import { CharacterInterface, PlanetInterface } from "../types/appInterfaces";
import {
  getPlanetsData,
  getCharactersData,
  getPlanetById,
  getCharacterById,
} from "./data";

describe("Given an API call", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test("When the server respond with a 200, then the expected array should have planets data", async () => {
    const planetsList: PlanetInterface[] = await getPlanetsData(1);
    expect(planetsList[0].id).toBe(1);
  });

  test("When the server respond with a 200, then the expected array should have characters data", async () => {
    const charactersList: CharacterInterface[] = await getCharactersData(1);
    expect(charactersList[0].id).toBe(1);
  });

  test("When the server respond with a 200, then the expected array should have the specified planet data", async () => {
    const planetData: PlanetInterface = await getPlanetById(1);
    expect(planetData.id).toBe(1);
  });

  test("When the server respond with a 200, then the expected array should have the specified character data", async () => {
    const characterData: CharacterInterface = await getCharacterById(1);
    expect(characterData.id).toBe(1);
  });
});
