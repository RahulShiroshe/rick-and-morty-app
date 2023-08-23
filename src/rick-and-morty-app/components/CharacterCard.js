import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="character-card-left">
      <img src={character.image} alt={character.name} />
      <Link Link to={`/character/${character.id}`}><button className="character-profile">Check Profile</button></Link></div>
      <div className="character-details">
        <h3>{character.name}</h3>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Location: {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;