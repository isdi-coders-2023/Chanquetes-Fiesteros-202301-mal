import { server } from "../mocks/server.js";
import {
  CharactersInterface,
  PlanetInterface,
} from "../types/appInterfaces.js";
import { getPlanetsData, getCharactersData } from "./data";

describe("Given an API call", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test("When the server respond with a 200, then the expected array should have planets data", async () => {
    const planetsList: PlanetInterface[] = await getPlanetsData([1, 2, 3]);
    expect(planetsList).toHaveLength(3);
    expect(planetsList[0].id).toBe(1);
  });

  test("When the server respond with a 200, then the expected array should have characters data", async () => {
    const charactersList: CharactersInterface[] = await getCharactersData([
      1, 2, 3,
    ]);
    expect(charactersList).toHaveLength(3);
    expect(charactersList[1].id).toBe(2);
  });
});
