import React from "react";

const UniqueCharacter = ({ name }) => {
  return (
    <div>
      <div className="indexCard__unique">{name || "Model's name"}</div>
      <p className="font-rules">
        Your army cannot contain both{" "}
        <span className="font-negrita"> Logan Grimnar</span> and{" "}
        <span className="font-negrita">Logan Grimnar on Stormrider</span>
      </p>
    </div>
  );
};

export default UniqueCharacter;
