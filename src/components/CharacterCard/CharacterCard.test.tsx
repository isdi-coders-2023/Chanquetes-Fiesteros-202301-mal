import { render, screen } from "@testing-library/react";
import { CharacterInterface } from "../../types/appInterfaces";
import CharacterCard from "./CharacterCard";
import { MemoryRouter } from "react-router-dom";

describe("Given a character card component", () => {
  const mockCharacter: CharacterInterface = {
    id: 1,
    name: "Rick Sanchez",
    created: "",
    gender: "",
    image: "",
    species: "",
    status: "",
    url: "",
  };

  test("When the Card render, then it must be a paragraph in the document", () => {
    render(<CharacterCard character={mockCharacter} />, {
      wrapper: MemoryRouter,
    });
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
});
export {};
