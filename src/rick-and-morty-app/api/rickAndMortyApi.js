const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async () => {
  const response = await fetch(`${BASE_URL}/character`);
  const data = await response.json();
  return data.results;
};

export const fetchCharacterDetail = async (characterId) => {
  const response = await fetch(`${BASE_URL}/character/${characterId}`);
  const data = await response.json();
  return data;
};