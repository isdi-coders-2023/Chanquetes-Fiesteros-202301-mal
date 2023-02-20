import { Character, FavCharacter } from "../types/appInterfaces";

interface favCharacNameProp {
  name: string;
}
interface favCharacRatingProp {
  rating: number;
}

export const getFavoriteCharacters = async () => {
  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters`
  );
  const favoriteCharactersList: FavCharacter[] = await response.json();
  return favoriteCharactersList;
};

export const addFavoriteCharacter = async (character: Character) => {
  const newJsonData = { rating: 0, location: { name: "", url: "" } };
  const mergedData = { ...character, ...newJsonData };

  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(mergedData),
    }
  );
  const newfavoriteCharacters: FavCharacter[] = await response.json();
  return newfavoriteCharacters;
};

export const changeFavoriteCharacterName = async (
  characterId: number,
  characterName: favCharacNameProp
) => {
  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters/${characterId}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(characterName),
    }
  );
  return response.status;
};

export const setFavoriteCharacterRating = async (
  characterId: number,
  characterRating: favCharacRatingProp
) => {
  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters/${characterId}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(characterRating),
    }
  );
  return response.status;
};

export const removeFavoriteCharacter = async (characterId: number) => {
  const response = await fetch(
    `https://private-api-adzv.onrender.com/characters/${characterId}`,
    {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }
  );
  return response.status;
};
