import { Unit } from "../classes/unit";

export const unitsObjs = [];
const unitsNames = [
  {
    name: "Arjac Rockfist",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 105,
      },
    ],
    stats: {
      movement: 5,
      toughness: 5,
      armor_save: 2,
      wounds: 6,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 2,
      balistic_skill: 2,
    },
    abilities: {
      core: ["Deep Strike,", "Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Anvil of Endurance:",
          rule: `While this model is leading a unit, each
          time a model in that unit makes an attack, add 1 to the Hit
          roll if that unit is below its Starting Strength, and add 1 to the
          Wound roll as well if that unit is Below Half-strength.`,
        },
        {
          title: "Champion of the Kingsguard:",
          rule: `You can target this model with
          the Epic Challenge Stratagem for 0CP. In addition, each time
          this model makes a melee attack that targets a Character
          unit, you can re-roll the Hit roll and you can re-roll the
          Wound roll.`,
        },
      ],
    },
    invulnerable: 4,
    wargear_options: null,
    unit_composition: ["1 Arjac Rockfist – Epic Hero"],
    equiped: ["Foehammer"],
    leader: [
      "Relic Terminator Squad",
      "Terminator Assault Squad",
      "Terminator Squad",
      "Wolf Guard Terminators",
    ],
    second_leader: true,
    /** second_leader: You can attach this model to one of the above units even if
        one Captain or Chapter Master model has already been
        attached to it. If you do, and that Bodyguard unit is destroyed,
        the Leader units attached to it become separate units, with
        their original Starting Strengths. */
    wargear_hability: null,
    specific: null,
    attached_unit: null,
    keywords: [
      "Infantry",
      "Character",
      "Epic Hero",
      "Imperium",
      "Terminator",
      "Arjac Rockfist",
    ],

    faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    lore: `Arjac Rockfist is a towering mass of muscle and a taciturn anvil
    of endurance. Wielding the enormous Foehammer – recalling his
    former role as an Iron Priest of the forge – Arjac crushes his foes with
    pulverising strength. As personal champion of the Great Wolf, Arjac
    upholds the honour of the Chapter.`,
  },
  {
    name: "Bjorn the Fell-Handed",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 220,
      },
    ],
    stats: {
      movement: 8,
      toughness: 9,
      armor_save: 2,
      wounds: 8,
      leadership: 6,
      objective_control: 3,
      weapon_skill: 2,
      balistic_skill: 2,
    },

    abilities: {
      core: ["Deadly Demise 1", "Feel No Pain 5+"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Legendary Tenacity:",
          rule: `Each time an attack is allocated to this
          model, halve the Damage characteristic of that attack.`,
        },
        {
          title: "Ancient Tactician:",
          rule: `Once per battle, after your opponent uses
          a Stratagem, this model can use this ability. If it does, until
          the end of the battle, increase that Stratagem’s cost to your
          opponent by 1CP.`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Bjorn the Fell-Handed– Epic Hero"],
    equiped: ["assault cannon", "heavy flamer", "Trueclaw."],
    wargear_options: "",
    leader: [],
    wargear_hability: "",
    specific: null,
    attached_unit: "",

    keywords: [
      "Vehicle",
      "Walker",
      "Character",
      "Epic Hero",
      "Smoke",
      "Imperium",
      "Dreadnought",
      "Bjorn the Fell-Handed",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Most ancient of all Space Marines and last of the Company of Russ,
    Bjorn the Fell-Handed has fought for millennia within a Dreadnought’s
    sarcophagus. The Space Wolves revere Bjorn as a living link to their
    deepest past, waking him only in times of dire need, and he still fights
    as furiously as he did at Russ’ side.`,
  },
  {
    name: "Blood Claws",
    imgName: "",
    point_cost: [
      {
        amount: 10,
        cost: 140,
      },
      {
        amount: 15,
        cost: 210,
      },
    ],
    stats: {
      movement: 6,
      toughness: 4,
      armor_save: 3,
      wounds: 2,
      leadership: 6,
      objective_control: 2,
      weapon_skill: 3,
      balistic_skill: 3,
    },

    abilities: {
      core: [],
      faction: "Oath of Moment",
      other: [
        {
          title: "Berserk Charge",
          rule: `Each time this unit makes a Charge move,
          until the end of the turn, add 1 to the Attacks and Strength
          characteristics of melee weapons equipped by models in
          this unit.`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Blood Claw Pack Leader", "9-14 Blood Claws"],
    equiped: ["bolt pistol", "Astartes chainsword"],
    wargear_options: `■ The Blood Claw Pack Leader’s bolt pistol can be replaced with 1 plasma pistol.
    ■ The Blood Claw Pack Leader’s Astartes chainsword can be replaced with one of the following:
    ◦ 1 power fist
    ◦ 1 power weapon
    ■ Up to 2 Blood Claws can each have their Astartes chainsword replaced with one of the following:
    ◦ 1 flamer and 1 close combat weapon
    ◦ 1 grav-gun and 1 close combat weapon
    ◦ 1 meltagun and 1 close combat weapon
    ◦ 1 plasma gun and 1 close combat weapon`,
    leader: [],
    wargear_hability: "",
    specific: null,
    attached_unit: `If a Character unit from your army with the Leader ability
    can be attached to an Assault Squad, it can instead be
    attached to this unit.`,

    keywords: ["Infantry", "Battleline", "Grenades", "Imperium", "Blood Claws"],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Most ancient of all Space Marines and last of the Company of Russ,
    Bjorn the Fell-Handed has fought for millennia within a Dreadnought’s
    sarcophagus. The Space Wolves revere Bjorn as a living link to their
    deepest past, waking him only in times of dire need, and he still fights
    as furiously as he did at Russ’ side.`,
  },
  {
    name: "Canis Wolfborn ",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 85,
      },
    ],
  },
  {
    name: "Cyberwolf",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 20,
      },
    ],
  },
  {
    name: "Fenrisian Wolves",
    imgName: "",
    point_cost: [
      {
        amount: 5,
        cost: 30,
      },
      {
        amount: 10,
        cost: 60,
      },
    ],
  },
  {
    name: "Grey Hunters",
    imgName: "",
    point_cost: [
      {
        amount: 5,
        cost: 90,
      },
      {
        amount: 10,
        cost: 180,
      },
    ],
  },
  {
    name: "Harald Deathwolf",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 95,
      },
    ],
  },
  {
    name: "Hounds of Morkai",
    imgName: "",
    point_cost: [
      {
        amount: 5,
        cost: 95,
      },
      {
        amount: 10,
        cost: 190,
      },
    ],
  },
  {
    name: "Iron Priest",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 60,
      },
    ],
  },
  {
    name: "Krom Dragongaze",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 80,
      },
    ],
  },
  {
    name: "Logan Grimnar",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 145,
      },
    ],
  },
  {
    name: "Logan Grimnar on Stormrider",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 235,
      },
    ],
  },
  {
    name: "Long Fangs",
    imgName: "",
    point_cost: [
      {
        amount: 5,
        cost: 150,
      },
      {
        amount: 6,
        cost: 180,
      },
    ],
  },
  {
    name: "Lukas the Trickster",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 55,
      },
    ],
  },
  {
    name: "Murderfang",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 190,
      },
    ],
  },
  {
    name: "Njal Stormcaller",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 95,
      },
    ],
  },
  {
    name: "Ragnar Blackmane",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 105,
      },
    ],
  },
  {
    name: "Skyclaws",
    imgName: "",
    point_cost: [
      {
        amount: 5,
        cost: 95,
      },
      {
        amount: 10,
        cost: 190,
      },
      {
        amount: 15,
        cost: 285,
      },
    ],
  },
  {
    name: "Venerable Dreadnought",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 170,
      },
    ],
  },
  {
    name: "Stormfang",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 300,
      },
    ],
  },
  {
    name: "Stormwolf",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 250,
      },
    ],
  },
  {
    name: "Thunderwolf Cavalry",
    imgName: "",
    point_cost: [
      {
        amount: 3,
        cost: 100,
      },
      {
        amount: 6,
        cost: 200,
      },
    ],
  },
  {
    name: "Ulrik the Slayer",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 85,
      },
    ],
  },
  {
    name: "Wolf Guards",
    imgName: "",
    point_cost: [
      {
        amount: 5,
        cost: 95,
      },
      {
        amount: 10,
        cost: 190,
      },
    ],
  },
  {
    name: "Wolf Guard Battle Leader in Terminator Armour",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 80,
      },
    ],
  },
  {
    name: "Wolf Guard Battle Leader on Thunderwolf",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 95,
      },
    ],
  },
  {
    name: "Wolf Guard Pack Leader",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 30,
      },
    ],
  },
  {
    name: "Wolf Guard Pack Leader in Terminator Armour",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 45,
      },
    ],
  },
  {
    name: "Wolf Guard Pack Leader with Jump Pack",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 40,
      },
    ],
  },
  {
    name: "Wolf Guard Terminators",
    imgName: "",
    point_cost: [
      {
        amount: 5,
        cost: 200,
      },
      {
        amount: 10,
        cost: 400,
      },
    ],
  },
  {
    name: "Wolf Lord on Thunderwolf",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 100,
      },
    ],
  },
  {
    name: "Wolf Scouts",
    imgName: "",
    point_cost: [
      {
        amount: 5,
        cost: 80,
      },
      {
        amount: 10,
        cost: 160,
      },
    ],
  },
  {
    name: "Wulfen",
    imgName: "",
    point_cost: [
      {
        amount: 5,
        cost: 100,
      },
      {
        amount: 10,
        cost: 200,
      },
    ],
  },
  {
    name: "Wulfen Dreadnought",
    imgName: "",
    point_cost: [
      {
        amount: 1,
        cost: 155,
      },
    ],
  },
];

for (let item of unitsNames) {
  const newUnit = new Unit(item.name);

  newUnit.point_cost = item.point_cost;
  unitsObjs.push(newUnit);
}

// console.log(unitsObjs);
