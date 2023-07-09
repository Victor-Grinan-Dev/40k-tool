import React from "react";
import Header from "./subcomponents/_Header";
import image from "../../assets/space_wolves/ArjacRockfist.png";
const IndexCard = (props) => {
  const { melee, name } = props;
  return (
    <div className="indexCard">
      <Header name="The model's name" image={image} />

      <div className="indexCard__content">
        <div className="indexCard__content-left">
          <div className="indexCard__content-left--small">
            <div className="indexCard__content-table">
              {/* weapon type */}
              <div className="indexCard__content-heading">
                <div className="indexCard__content-heading-data-icon">XX</div>
                <div className="indexCard__content-heading-data-name">
                  ranged weapon
                </div>
                <div className="indexCard__content-heading-data">range</div>
                <div className="indexCard__content-heading-data">a</div>
                <div className="indexCard__content-heading-data">
                  {melee ? "ws" : "bs"}
                </div>
                <div className="indexCard__content-heading-data">s</div>
                <div className="indexCard__content-heading-data">ap</div>
                <div className="indexCard__content-heading-data">d</div>
              </div>

              {/* weapon entry */}
              <div className="indexCard__content-item">
                <div className="indexCard__content-item-data-icon"></div>
                <div className="indexCard__content-item-data-name">
                  strom bolter
                </div>
                <div className="indexCard__content-item-data">24"</div>
                <div className="indexCard__content-item-data">10</div>
                <div className="indexCard__content-item-data">2+</div>
                <div className="indexCard__content-item-data">8</div>
                <div className="indexCard__content-item-data">-2</div>
                <div className="indexCard__content-item-data">3</div>
              </div>
              <div className="indexCard__divisor"></div>
            </div>

            {/* wargear options */}
            <div className="indexCard__content-wargear font-rules">
              <div className="indexCard__wargear-options">wargear options</div>

              <ul className="list">
                <li className="list-item">
                  The Sergeant’s bolt rifle can be replaced with one of the
                  following:
                  <ul className="sublist">
                    <li className="sublist-item">1 Astartes chainsword</li>
                    <li className="sublist-item">1 hand flamer</li>
                    <li className="sublist-item">1 plasma pisto</li>
                    <li className="sublist-item">1 power weapon</li>
                  </ul>
                </li>
                <li className="list-item">
                  The Intercessor Sergeant’s close combat weapon can be replaced
                  with one of the following
                </li>
                <li className="list-item">
                  For every 5 models in this unit, 1 model equipped with a bolt
                  rifle can be equipped with 1 Astartes grenade launcher
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="indexCard__content-right">
          {/* core & faction */}
          <div className="indexCard__habilities">habilities</div>
          <p className="font-rules">
            CORE:
            <span className="font-negrita"> Leader</span>
          </p>
          <div className="indexCard__divisor"></div>
          <span className="font-rules">
            FACTION: <span className="font-negrita">Oath of Moment</span>
          </span>
          <div className="indexCard__divisor"></div>
          {/* unique */}
          <p className="font-rules">
            <span className="font-negrita">Pelt of the Doppegangrel:</span>
            While this model is leading a unit, each time an attack targets that
            unit, subtract 1 from the Hit roll.
          </p>
          <p className="font-rules">
            <span className="font-negrita">Lord of the Wolfkin:</span>
            While this model is leading a unit, each time that unit makes a
            Charge move, until the end of the turn, crushing teeth and claws
            equipped by models in that unit have the{" "}
            <span className="general-rule">[DEVASTATING WOUNDS]</span> ability.
          </p>
          <div className="indexCard__divisor"></div>
          {/* invulnerable */}
          <div className="indexCard__invulnerable">
            invulnerable{" "}
            <div className="indexCard__invulnerable-shield">4+</div>
          </div>
          {/* unit-composition */}
          <div className="indexCard__unit-composition">unit composition</div>
          <ul className="indexCard__unit-composition-list">
            <li className="font-negrita font-rules">1 Intercessor Sergeant</li>
            <li className="font-negrita font-rules">4-9 Intercessors</li>
          </ul>
          <p className="font-rules">
            <span className="font-negrita">Every model is equipped with:</span>
            bolt pistol; bolt rifle; close combat weapon.
          </p>
          <div className="indexCard__divisor"></div>
          {/*  */}
          <div className="indexCard__leader">leader</div>
          <p className="font-rules">
            This model can be attached to the following units:
          </p>
          <ul>
            <li className="font-rules font-negrita margin-10">Blood Claws</li>
            <li className="font-rules font-negrita margin-10">Grey Hunters</li>
            <li className="font-rules font-negrita margin-10">Long Fangs</li>
            <li className="font-rules font-negrita margin-10">Wolf Guard</li>
          </ul>
          <div className="indexCard__leader">wargear hability</div>
          <p className="font-rules">
            <span className="font-negrita">Relic Shield:</span> The bearer has a
            Wounds characteristic of 6.
          </p>
          <div className="indexCard__unique">{name || "Model's name"}</div>
          <p className="font-rules">
            Your army cannot contain both{" "}
            <span className="font-negrita"> Logan Grimnar</span> and{" "}
            <span className="font-negrita">Logan Grimnar on Stormrider</span>
          </p>
          <div className="indexCard__attached-unit">Attached unit</div>
          <p className="font-rules">
            If a <span className="font-negrita">Character</span> unit from your
            army with the Leader ability can be attached to a{" "}
            <span className="font-negrita">Devastator Squad</span>, it can instead be
            attached to this unit
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="indexCard__footer">
        <div className="indexCard__footer-left">
          keywords: Infantry, Character, Epic Hero, Imperium, Terminator, Arjac
          Rockfist
        </div>
        <div className="indexCard__footer-image-container">
          <img src="#" alt="faction" className="indexCard__footer-image" />
        </div>
        <div className="indexCard__footer-right">
          faction keywords: Adeptus Astartes, Space Wolves
        </div>
      </div>
    </div>
  );
};

export default IndexCard;
