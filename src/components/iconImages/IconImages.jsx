import React from 'react';

import elite from '../../assets/unittypes/elite-removebg-preview.png';
import character from '../../assets/unittypes/character-removebg-preview.png';
import battleline from '../../assets/unittypes/battleline-modified.png';
import fast from '../../assets/unittypes/fast-removebg-preview.png';
import heavy from '../../assets/unittypes/heavy-removebg-preview.png';

const IconImages = () => {
    const images = {
        elite:elite,
        character:character,
        battleline:battleline,
        fast:fast,
        heavy:heavy,
    }

    // const imagesTypes = {
    //     // listedModel: "my-models__card-image",
    //     // unit: "unit-card__image",
    //     // selected: "modelCard__model-image",
    //     // index: "indexCard__model-image",
    //   };

  return (
    <img src={images[imgName]} alt={imgName} className={imagesTypes[type] || null} />
  )
}

export default IconImages;