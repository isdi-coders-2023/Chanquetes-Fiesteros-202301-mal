import { render, screen } from "@testing-library/react";
import { CharactersInterface } from "../../types/appInterfaces";
import CharacterCard from "./CharacterCard";

describe("Given a Card component", () => {
  const mockCharacter: CharactersInterface = {
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
    render(<CharacterCard characters={mockCharacter} />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
  });
});
export {};
