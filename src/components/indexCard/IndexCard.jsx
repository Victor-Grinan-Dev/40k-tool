import React from "react";
import Header from "./subcomponents/_Header";
import image from "../../assets/space_wolves/ArjacRockfist.png";
import WeaponsRanged from "./subcomponents/WeaponsRanged";
import WeaponsMelee from "./subcomponents/WeaponsMelee";
import WargearOptions from "./subcomponents/WargearOptions";

import Invulnerable from "./subcomponents/Invulnerable";
import UnitComposition from "./subcomponents/UnitComposition";
import Leader from "./subcomponents/Leader";
import WargearHability from "./subcomponents/WargearHability";
import UniqueCharacter from "./subcomponents/UniqueCharacter";
import AttachedUnit from "./subcomponents/AttachedUnit";
import Habilities from "./subcomponents/Habilities";
import FooterLeft from "./subcomponents/FooterLeft";
import FooterRight from "./subcomponents/FooterRight";
import FooterImage from "./subcomponents/FooterImage";
const IndexCard = (props) => {
  // const { name } = props;
  return (
    <div className="indexCard">
      <Header name="The model's name" image={image} points={100} movement={6} />

      <div className="indexCard__content">
        <div className="indexCard__content-left">
          <div className="indexCard__content-left--small">
            {/* table */}
            <div className="indexCard__content-table">
              <WeaponsRanged />
              <WeaponsMelee />
            </div>

            <WargearOptions />

            {/* display in phones */}
            <div className="indexCard__content-bottom">
              {/* Habilities: core, faction & unique */}
              <Habilities />
              {/* invulnerable */}
              <Invulnerable />
              {/* unit-composition */}
              <UnitComposition />
              {/* leader */}
              <Leader />
              {/* wargear hability */}
              <WargearHability />
              {/* unique character rules */}
              <UniqueCharacter name={""} />
              {/* attached unit */}
              <AttachedUnit />
            </div>
          </div>
        </div>

        <div className="indexCard__content-right">
          {/* Habilities: core, faction & unique */}
          <Habilities />
          {/* invulnerable */}
          <Invulnerable />
          {/* unit-composition */}
          <UnitComposition />
          {/* leader */}
          <Leader />
          {/* wargear hability */}
          <WargearHability />
          {/* unique character rules */}
          <UniqueCharacter name={""} />
          {/* attached unit */}
          <AttachedUnit />
        </div>
      </div>

      {/* Footer */}
      <div className="indexCard__footer font-negrita font-rules">
        <FooterLeft />
        <FooterImage />
        <FooterRight />
      </div>
    </div>
  );
};

export default IndexCard;
