import {useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "../api/rickAndMortyApi";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
  
    useEffect(() => {
      const fetchCharacterData = async () => {
        const characterData = await fetchCharacters();
        setCharacters(characterData);
      };
      fetchCharacterData();
    }, []);
  
    // Filter characters based on conditions
    const filteredCharacters = characters.filter((character) => {
      return (
        character.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        (statusFilter === "" || character.status === statusFilter) &&
        (genderFilter === "" || character.gender === genderFilter)
      );
    });
  
    return (
      <div>
        <div className="filters">
          <input
            type="text"
            placeholder="Filter by name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  };
  
  export default CharacterList;