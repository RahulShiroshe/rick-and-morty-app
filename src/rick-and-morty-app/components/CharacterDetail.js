import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterDetail } from "../api/rickAndMortyApi";

const CharacterDetail = () => {
    const { characterId } = useParams();
    const [character, setCharacter] = useState(null);
  
    useEffect(() => {
      const fetchDetail = async () => {
        const characterData = await fetchCharacterDetail(characterId);
        setCharacter(characterData);
      };
      fetchDetail();
    }, [characterId]);
  
    if (!character) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="character-detail">
        <img src={character.image} alt={character.name} />
        <div className="character-details">
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>
    );
  };
  
  export default CharacterDetail;