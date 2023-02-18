import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppContext from "../../store/contexts/app.context";
import AppProvider from "../../store/contexts/app.provider";
import CharacterDetailsPage from "./CharacterDetailsPage";

const mockContext = {
  state: {
    planets: [],
    characters: [],
    planetDetails: {
      id: 0,
      name: "",
      type: "",
      dimension: "",
      created: "",
      residents: [""],
    },
    characterDetails: {
      id: 1,
      name: "Rick Sanchez",
      status: "",
      species: "",
      gender: "",
      created: "",
      image: "",
      url: "",
    },
    currentPagePlanets: 1,
    currentPageCharacters: 1,
  },
  dispatch: jest.fn(),
};

describe("Given a character details page", () => {
  test("When the page is called, it should render with the proper id details", async () => {
    render(
      <MemoryRouter
        initialEntries={[
          `/characters/${mockContext.state.characterDetails.id}`,
        ]}
      >
        <AppContext.Provider value={mockContext}>
          <AppProvider>
            <CharacterDetailsPage />
          </AppProvider>
        </AppContext.Provider>
      </MemoryRouter>
    );

    const characterDetails = await screen.findByTestId("character-id");
    expect(characterDetails).toBeInTheDocument();
  });
});
