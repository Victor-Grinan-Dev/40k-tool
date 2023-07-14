export const units = [
  {
    id: 0,
    name: "the models name",
    stats: {
      movement: 6,
      toughness: 4,
      armor_save: 2,
      wounds: 5,
      leadership: 6,
      objective_control: 1,
      point_cost: 100,
      weapon_skill: 3,
      balistic_skill: 3,
    },
    rules: {
      core: "Leader",
      faction: "Oath of Moment",
      other: [
        {
          title: "test rule title",
          rule: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti quasi aliquid impedit doloribus neque voluptas quod soluta non architecto deleniti necessitatibus.",
        },
        {
          title: "rule includes global rules",
          rule: "While this model is leading a unit, each time that unit makes a Charge move, until the end of the turn, crushing teeth and claws equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
        },
      ],
    },
    invulnerable: null,
    unit_composition: ["1 Intercessor Sergeant", "4-9 Intercessors"],
    equiped: "",
    wargear_options: "???",
    leader: ["Blood Claws", "Grey Hunters", "Long Fangs", "Wolf Guard"],
    wargear_hability: "",
    specific:
      "Your army cannot contain both <Logan Grimnar> and <Logan Grimnar on Stormrider>",
    attached_unit:
      "If a <Character> unit from your army with the Leader ability can be attached to a <Devastator Squad>, it can instead be attached to this unit",
    keywords: [
      "Infantry",
      "Character",
      "Epic Hero",
      "Imperium",
      "Terminator",
      "Arjac Rockfist",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],
  },
];

export const example = {
  name: "",

  point_cost: [
    {
      models: 5,
      cost: 100,
    },
    {
      models: 10,
      cost: 200,
    },
    {
      models: 15,
      cost: 300,
    },
  ],
  /* **** */

  id: 0,

  stats: {
    movement: 6,
    toughness: 4,
    armor_save: 2,
    wounds: 5,
    leadership: 6,
    objective_control: 1,
    weapon_skill: 2,
    balistic_skill: 2,
  },

  abilities: {
    core: "",
    faction: "Oath of Moment",
    other: [
      {
        title: "",
        rule: ``,
      },
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
};
