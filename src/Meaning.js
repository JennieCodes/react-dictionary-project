import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            {definition.example}
            <p>{props.meaning.definitions[0].definition}</p>
            <p>{props.meaning.definitions[0].example}</p>
          </div>
        );
      })}
    </div>
  );
}
