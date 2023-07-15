import React from "react";
import arjac from "../../assets/space_wolves/ArjacRockfist.png";
import bjorn from "../../assets/space_wolves/BjornFellhanded.png";

const images = {
  arjac: arjac,
  bjorn: bjorn,
};
const ModelImg = (imgName) => {
  return (
    <img
      src={images[imgName]}
      alt={imgName}
      className="modelCard__model-image"
    />
  );
};

export default ModelImg;
