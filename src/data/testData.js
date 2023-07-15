export const testData = [
  {
    name: "Arjac Rockfist",
    image: "arjac",
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
    image: "bjorn",
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
    image: "bloodClaws",
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
    wargear_options: "",
    leader: [],
    wargear_hability: "",
    specific: null,
    attached_unit: "",

    keywords: ["Infantry", "Battleline", "Grenades", "Imperium", "Blood Claws"],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Young and fiery warriors full of belligerent enthusiasm, Blood
    Claws hunger to prove themselves in savage battle. With relentless
    exuberance they plunge headlong into the foe, straddling the line
    between sheer heroism and recklessness. Many great sagas start
    with the Blood Claws’ glory hunts.`,
  },
  {
    name: "Cyberwolf",
    image: "cyberwolf",
    point_cost: [
      {
        amount: 1,
        cost: 20,
      },
    ],
    stats: {
      movement: 10,
      toughness: 4,
      armor_save: 6,
      wounds: 2,
      leadership: 7,
      objective_control: 0,
      weapon_skill: 0,
      balistic_skill: 0,
    },

    abilities: {
      core: [],
      faction: "Oath of Moment",
      other: [
        {
          title: "Alpha Hunter:",
          rule: `While this model is leading a unit, models in
          that unit have the Scouts 6" ability`,
        },
        {
          title: "Close In for the Kill",
          rule: `Each time this model makes an attack
          that targets an enemy unit that is Below Half-strength, add 1
          to the Hit roll and add 1 to the Wound roll.`,
        },
      ],
    },

    invulnerable: 6,
    unit_composition: ["■ Fenrisian Wolves"],
    equiped: ["Teeth and claws"],
    wargear_options: "",
    leader: ["Fenrisian Wolves"],
    secondLeader: `You must attach this model to the above unit, even if Canis
    Wolfborn has been attached to it. If you do, and that
    Bodyguard unit is destroyed, the Leader units attached to it
    become separate units, with their original Starting Strengths.
    If it is not possible to attach this model to a unit, it does not
    take part in the battle and counts as having been destroyed.`,
    wargear_hability: "",
    specific: {
      title: "wolfkin",
      rule: `This model cannot be your Warlord and cannot be
            given Enhancements.`,
    },
    attached_unit: "",

    keywords: ["Beast", "Character", "Imperium", "Cyberwolf"],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: ``,
  },
];

/**

      {
        name: "Canis Wolfborn ",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 85,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      
      {
        name: "Fenrisian Wolves",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Grey Hunters",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Harald Deathwolf",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 95,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Hounds of Morkai",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Iron Priest",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 60,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Krom Dragongaze",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 80,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Logan Grimnar",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 145,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Logan Grimnar on Stormrider",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 235,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Long Fangs",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Lukas the Trickster",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 55,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Murderfang",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 190,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Njal Stormcaller",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 95,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Ragnar Blackmane",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 105,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Skyclaws",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Venerable Dreadnought",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 170,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Stormfang",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 300,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Stormwolf",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 250,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Thunderwolf Cavalry",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Ulrik the Slayer",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 85,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wolf Guards",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wolf Guard Battle Leader in Terminator Armour",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 80,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wolf Guard Battle Leader on Thunderwolf",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 95,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wolf Guard Pack Leader",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 30,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wolf Guard Pack Leader in Terminator Armour",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 45,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wolf Guard Pack Leader with Jump Pack",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 40,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wolf Guard Terminators",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wolf Lord on Thunderwolf",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 100,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wolf Scouts",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wulfen",
        image: "",
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
    
        lore: ``,
      },
      {
        name: "Wulfen Dreadnought",
        image: "",
        point_cost: [
          {
            amount: 1,
            cost: 155,
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
          core: [],
          faction: "Oath of Moment",
          other: [
            {
              title: "",
              rule: ``,
            },
          ],
        },
    
        invulnerable: null,
        unit_composition: [],
        equiped: [],
        wargear_options: "",
        leader: [],
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
        lore: ``,
      },
    
 */
