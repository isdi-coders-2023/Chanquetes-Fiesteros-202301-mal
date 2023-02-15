import { server } from "../mocks/server";
import { CharactersInterface, PlanetInterface } from "../types/appInterfaces";
import { getPlanetsData, getCharactersData } from "./data";

describe("Given an API call", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test("When the server respond with a 200, then the expected array should have planets data", async () => {
    const planetsList: PlanetInterface[] = await getPlanetsData([1]);
    expect(planetsList).toHaveLength(1);
    expect(planetsList[0].id).toBe(1);
  });

  test("When the server respond with a 200, then the expected array should have characters data", async () => {
    const charactersList: CharactersInterface[] = await getCharactersData([1]);
    expect(charactersList).toHaveLength(1);
    expect(charactersList[0].id).toBe(1);
  });
});
