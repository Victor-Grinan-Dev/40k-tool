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
      core: ["Deep Strike", "Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Anvil of Endurance",
          rule: `While this model is leading a unit, each
              time a model in that unit makes an attack, add 1 to the Hit
              roll if that unit is below its Starting Strength, and add 1 to the
              Wound roll as well if that unit is Below Half-strength`,
        },
        {
          title: "Champion of the Kingsguard",
          rule: `You can target this model with
              the Epic Challenge Stratagem for 0CP. In addition, each time
              this model makes a melee attack that targets a Character
              unit, you can re-roll the Hit roll and you can re-roll the
              Wound roll`,
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
    second_leader: ["Captain", "Chapter Master"],
    third_leader: false,
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
        upholds the honour of the Chapter`,
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
          title: "Legendary Tenacity",
          rule: `Each time an attack is allocated to this
              model, halve the Damage characteristic of that attack`,
        },
        {
          title: "Ancient Tactician",
          rule: `Once per battle, after your opponent uses
              a Stratagem, this model can use this ability. If it does, until
              the end of the battle, increase that Stratagem’s cost to your
              opponent by 1CP`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Bjorn the Fell-Handed– Epic Hero"],
    equiped: ["assault cannon", "heavy flamer", "Trueclaw"],
    wargear_options: `■ This model’s assault cannon can be replaced with one of the following:
    ◦ heavy plasma cannon
    ◦ helfrost cannon
    ◦ multi-melta
    ◦ twin lascannon`,
    leader: [],
    second_leader: false,
    third_leader: false,
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
        as furiously as he did at Russ’ side`,
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
          this unit`,
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
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: `If a Character unit from your army with the Leader ability
    can be attached to an Assault Squad, it can instead be
    attached to this unit.`,

    keywords: ["Infantry", "Battleline", "Grenades", "Imperium", "Blood Claws"],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Young and fiery warriors full of belligerent enthusiasm, Blood
    Claws hunger to prove themselves in savage battle. With relentless
    exuberance they plunge headlong into the foe, straddling the line
    between sheer heroism and recklessness. Many great sagas start
    with the Blood Claws’ glory hunts`,
  },
  {
    name: "Canis Wolfborn ",
    image: "canis_wolfborn",
    point_cost: [
      {
        amount: 1,
        cost: 85,
      },
    ],
    stats: {
      movement: 10,
      toughness: 6,
      armor_save: 3,
      wounds: 6,
      leadership: 6,
      objective_control: 2,
      weapon_skill: 2,
      balistic_skill: 5,
    },

    abilities: {
      core: ["Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Born of Wolves",
          rule: `While this model is leading a unit, melee
          weapons equipped by models in that unit have the
          [SUSTAINED HITS 1] ability`,
        },
        {
          title: "Alpha Predator",
          rule: `Each time this model ends a Charge move,
          select one enemy unit within Engagement Range of it and roll
          one D6: on a 2-3, that enemy unit suffers D3 mortal wounds;
          on a 4-5, that enemy unit suffers 3 mortal wounds; on a 6,
          that enemy units suffers D3+3 mortal wounds`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Canis Wolfborn – Epic Hero"],
    equiped: ["crushing teeth and jaws 4+", "Wolf claws"],
    wargear_options: "",
    leader: ["Fenrisian Wolves", "Thunderwolf Cavalry"],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: "",

    keywords: [
      "Mounted",
      "Character",
      "Epic Hero",
      "Imperium",
      "Canis Wolfborn",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `The most feral of Harald Deathwolf’s veterans, Canis Wolfborn moves
    with animalistic assurance. Believed to have been raised by a
    she-wolf, Canis speaks to his brothers in snarls and growls, and on the
    battlefield his frenzied rages, slashing claws and Thunderwolf’s jaws
    are all the communication he needs`,
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
      weapon_skill: 4,
      balistic_skill: 0,
    },

    abilities: {
      core: ["Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Alpha Hunter",
          rule: `While this model is leading a unit, models in
          that unit have the Scouts 6" ability`,
        },
        {
          title: "Close In for the Kill",
          rule: `Each time this model makes an attack
          that targets an enemy unit that is Below Half-strength, add 1
          to the Hit roll and add 1 to the Wound roll`,
        },
      ],
    },

    invulnerable: 6,
    unit_composition: ["Fenrisian Wolves"],
    equiped: ["Teeth and claws"],
    wargear_options: "",
    leader: ["Fenrisian Wolves"],
    secondLeader: `You must attach this model to the above unit, even if Canis
    Wolfborn has been attached to it. If you do, and that
    Bodyguard unit is destroyed, the Leader units attached to it
    become separate units, with their original Starting Strengths.
    If it is not possible to attach this model to a unit, it does not
    take part in the battle and counts as having been destroyed`,
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: {
      title: "wolfkin",
      rule: `This model cannot be your Warlord and cannot be
            given Enhancements`,
    },
    attached_unit: "",

    keywords: ["Beast", "Character", "Imperium", "Cyberwolf"],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: ``,
  },
  {
    name: "Fenrisian Wolves",
    image: "fenrisianWolf",
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
      movement: 10,
      toughness: 4,
      armor_save: 6,
      wounds: 1,
      leadership: 8,
      objective_control: 0,
      weapon_skill: 4,
      balistic_skill: 0,
    },

    abilities: {
      core: [],
      faction: "Oath of Moment",
      other: [
        {
          title: "Swift Hunters",
          rule: `This unit is eligible to declare a charge in a turn
            in which it Advanced`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["5-10 Fenrisian Wolves"],
    equiped: ["Teeth and claws"],
    wargear_options: ``,
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: "",

    keywords: ["Beasts", "Imperium", "Fenrisian Wolves"],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Amongst the most vicious and intelligent predators in the galaxy,
    Fenrisian Wolves accompany the sons of Russ to battle, following
    them as the pack follows the alpha. Even the sleekest are as big
    as a Human, yet they prowl silently before pouncing in a swift and
    coordinated flurry of razor-sharp teeth and claws`,
  },
  {
    name: "Grey Hunters",
    image: "greyHunters",
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
          title: "Cunning Hunters",
          rule: `This unit is eligible to shoot in a turn in
          which it Fell Back or Advanced`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Grey Hunter Pack Leader", "4-9 Grey Hunters"],
    equiped: ["bolt pistol", "boltgun", "combat weapon"],
    wargear_options: `■ Any number of models can each be equipped with 1 Astartes chainsword.
    ■ The Grey Hunter Pack Leader’s close combat weapon can be replaced with one of the following:
    ◦ 1 power fist
    ◦ 1 power weapon
    ■ Up to 2 Grey Hunters can each have their boltgun replaced with one of the following:
    ◦ 1 flamer
    ◦ 1 grav-gun
    ◦ 1 meltagun
    ◦ 1 plasma gun`,
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: `If a Character unit from your army with the Leader ability
    can be attached to a Tactical Squad, it can instead be
    attached to this unit`,

    keywords: [
      "Infantry",
      "Battleline",
      "Grenades",
      "Imperium",
      "Grey Hunters",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `With their instinctive raw aggression tempered – but never quashed
    – by countless battlefield victories, Grey Hunters are patient, cunning
    and adaptable. Some packs take and hold ground, unleashing volleys
    of disciplined firepower, while others stalk the flanks. When the trap is
    set, Grey Hunters leap in for the kill`,
  },
  {
    name: "Harald Deathwolf",
    image: "haraldDeathwolf",
    point_cost: [
      {
        amount: 1,
        cost: 95,
      },
    ],
    stats: {
      movement: 10,
      toughness: 6,
      armor_save: 3,
      wounds: 7,
      leadership: 6,
      objective_control: 2,
      weapon_skill: 2,
      balistic_skill: 2,
    },

    abilities: {
      core: ["Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Lord of the Wolfkin",
          rule: `While this model is leading a unit, each
          time that unit makes a Charge move, until the end of the turn,
          crushing teeth and claws equipped by models in that unit
          have the [DEVASTATING WOUNDS] ability`,
        },
        {
          title: "Mantle of the Troll King",
          rule: `Once per phase, when resolving
          an attack made against this model, after you make a
          saving throw for this model, you can change the Damage
          characteristic of that attack to 0`,
        },
      ],
    },

    invulnerable: 4,
    unit_composition: ["1 Harald Deathwolf – Epic Hero"],
    equiped: ["bolt pistol", "crushing teeth and claws", "Glacius"],
    wargear_options: "",
    leader: ["Thunderwolf Cavalry"],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: "",

    keywords: [
      "Mounted",
      "Character",
      "Epic Hero",
      "Grenades",
      "Imperium",
      "Captain",
      "Harald Deathwolf",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Harald Deathwolf is attuned to the lupine beasts of Fenris as few
    others are. The lair of his Great Company resounds to their howls, and
    many of these wolves fight with his warriors. A peerless hunter, Harald
    tracks his prey with speed and stealth, launching his ferocious strikes
    from atop his giant Thunderwolf, Icetooth`,
  },
  {
    name: "Iron Priest",
    image: "ironPriest",
    point_cost: [
      {
        amount: 1,
        cost: 60,
      },
    ],
    stats: {
      movement: 6,
      toughness: 4,
      armor_save: 2,
      wounds: 4,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 3,
      balistic_skill: 2,
    },

    abilities: {
      core: ["Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Iron Priest",
          rule: `While this model is within 3" of one or more
          friendly Adeptus Astartes Vehicle units, this model has the
          Lone Operative ability`,
        },
        {
          title: "Blessing of the Omnissiah",
          rule: `In your Command phase, you can
          select one friendly Adeptus Astartes Vehicle model within
          3" of this model. That model regains up to D3 lost wounds and,
          until the start of your next Command phase, each time that
          Vehicle model makes an attack, add 1 to the Hit roll. Each
          model can only be selected for this ability once per turn`,
        },
        {
          title: "Vengeance of the Omnissiah",
          rule: `If a friendly Adeptus Astartes
          Vehicle model is destroyed within 12" of this model, until
          the end of the battle, this model’s tempest hammer has an
          Attacks characteristic of 6`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Iron Priest"],
    equiped: ["helfrost pistol", "servo-arm", "tempest hammer"],
    wargear_options: "",
    leader: ["Astartes Servitors", "Blood Claws", "Grey Hunters", "Long Fangs"],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: "",

    keywords: [
      "Infantry",
      "Character",
      "Grenades",
      "Imperium",
      "Techmarine",
      "Iron Priest",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Space Wolves Techmarines – the Iron Priests – are holders of arcane
    technological lore that they use to repair the Chapter’s damaged war
    engines and soothe their affronted machine spirits. Warriors of Fenris
    first and foremost, Iron Priests will not hesitate to bring their own
    esoteric weapons to bear on the foe if needed`,
  },
  {
    name: "Krom Dragongaze",
    image: "kromDragongaze",
    point_cost: [
      {
        amount: 1,
        cost: 80,
      },
    ],
    stats: {
      movement: 6,
      toughness: 4,
      armor_save: 3,
      wounds: 4,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 2,
      balistic_skill: 2,
    },

    abilities: {
      core: ["Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Refuse to Accept Defeat",
          rule: `While this model is leading a unit,
          each time a model in that unit makes an attack, add 1 to the
          Hit roll if that unit is below its Starting Strength, and add 1 to
          the Wound roll as well if that unit is Below Half-strength`,
        },
        {
          title: "The Fierce Eye",
          rule: `In your Shooting phase, you can select one
          enemy Infantry unit within 12" of and visible to this model.
          That enemy unit must take a Battle-shock test`,
        },
      ],
    },

    invulnerable: 4,
    unit_composition: ["1 Krom Dragongaze"],
    equiped: ["Wyrmclaw", "Bolt pistol"],
    wargear_options: "",
    leader: ["Blood Claws", "Grey Hunters", "Wolf Guard"],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: "",

    keywords: [
      "Infantry",
      "Character",
      "Epic Hero",
      "Grenades",
      "Imperium",
      "Captain",
      "Krom Dragongaze",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Belligerent, violent and seldom suffering anyone gainsaying his
    bloodthirsty tactics, Krom Dragongaze is notoriously short of temper.
    His fierce gaze is petrifying to lesser men, yet his critical eye seeks
    deeds of valour and his Great Company boasts many veteran Wolf
    Guard. Wildly competitive, Krom refuses to accept defeat`,
  },
  // {
  //   name: "Logan Grimnar",
  //   image: "loganGrimnar",
  //   point_cost: [
  //     {
  //       amount: 1,
  //       cost: 145,
  //     },
  //   ],
  //   stats: {
  //     movement: 5,
  //     toughness: 5,
  //     armor_save: 2,
  //     wounds: 6,
  //     leadership: 6,
  //     objective_control: 1,
  //     weapon_skill: 2,
  //     balistic_skill: 2,
  //   },

  //   abilities: {
  //     core: ["Deep Strike", "Leader"],
  //     faction: "Oath of Moment",
  //     other: [
  //       {
  //         title: "High King of Fenris",
  //         rule: `Once per battle, in your Charge phase,
  //         this model can use this ability. If it does, until the end of the
  //         turn, you can re-roll Charge rolls made for Adeptus Astartes
  //         units from your army and, until the end of the turn, each time
  //         an Adeptus Astartes model from your army makes a melee
  //         attack, you can re-roll the Hit roll`,
  //       },
  //       {
  //         title: "The Great Wolf",
  //         rule: `Each time this model destroys an enemy unit,
  //         you gain 1CP`,
  //       },
  //     ],
  //   },

  //   invulnerable: 4,
  //   unit_composition: ["Logan Grimnar – Epic Hero"],
  //   equiped: ["Storm bolter", "The Axe Morkai"],
  //   wargear_options: "",
  //   leader: [
  //     "Relic Terminator Squad",
  //     "Terminator Assault Squad",
  //     "Terminator Squad",
  //     "Wolf Guard Terminators",
  //   ],
  // second_leader: false,
  // third_leader: false,
  // wargear_hability: "",
  //   specific: {
  //     title: "Logan Grimnar",
  //     rule: `Your army cannot contain both Logan Grimnar and Logan
  //       Grimnar on Stormrider`,
  //   },
  //   attached_unit: "",

  //   keywords: [
  //     "Infantry",
  //     "Character",
  //     "Epic Hero",
  //     "Imperium",
  //     "Terminator",
  //     "Chapter Master",
  //     "Logan Grimnar",
  //   ],
  //   faction_keywords: ["Adeptus Astartes", "Space Wolves"],

  //   lore: `Logan Grimnar – Great Wolf and High King of Fenris – is one of the
  //   longest serving Chapter Masters. Waging war against any who
  //   threaten the Space Wolves or the Imperium, Grimnar’s charisma and
  //   centuries of heroic victories have immortalised him as one of the most
  //   lauded warriors in the galaxy`,
  // },
  // {
  //   name: "Grimnar on Stormrider",
  //   image: "loganStormrider",
  //   point_cost: [
  //     {
  //       amount: 1,
  //       cost: 235,
  //     },
  //   ],
  //   stats: {
  //     movement: 10,
  //     toughness: 6,
  //     armor_save: 2,
  //     wounds: 12,
  //     leadership: 6,
  //     objective_control: 4,
  //     weapon_skill: 2,
  //     balistic_skill: 2,
  //   },

  //   abilities: {
  //     core: ["Deadly Demise D3", "Leader"],
  //     faction: "Oath of Moment",
  //     other: [
  //       {
  //         title: "High King of Fenris",
  //         rule: `Once per battle, in your Charge phase,
  //           this model can use this ability. If it does, until the end of the
  //           turn, you can re-roll Charge rolls made for Adeptus Astartes
  //           units from your army and, until the end of the turn, each time
  //           an Adeptus Astartes model from your army makes a melee
  //           attack, you can re-roll the Hit roll`,
  //       },
  //       {
  //         title: "The Great Wolf",
  //         rule: `Each time this model destroys an enemy unit,
  //           you gain 1CP`,
  //       },
  //     ],
  //   },

  //   invulnerable: 4,
  //   unit_composition: ["1 Logan Grimnar on Stormrider – Epic Hero"],
  //   equiped: [
  //     "storm bolter",
  //     "the Axe of Morkai",
  //     "flurry of teeth and claws 4+",
  //   ],
  //   wargear_options: "",
  //   leader: ["Thunderwolf Cavalry"],
  //  second_leader: false,
  // third_leader: false,
  //  wargear_hability: "",
  //   specific: null,
  //   attached_unit: "",

  //   keywords: [
  //     "Mounted",
  //     "Character",
  //     "Epic Hero",
  //     "Imperium",
  //     "Terminator",
  //     "Logan Grimnar on Stormrider",
  //   ],
  //   faction_keywords: ["Adeptus Astartes", "Space Wolves"],

  //   lore: `When riding to battle upon his ornate anti-grav chariot, Stormrider,
  //   Logan Grimnar is a destructive and swift tempest of war. Drawn by a
  //   pair of giant and ferocious Thunderwolves, Stormrider’s saga-inscribed
  //   hull bears the grizzled leader into the heart of the enemy, there to reap
  //   a fell tally with the Axe Morkai`,
  // },
  {
    name: "Long Fangs",
    image: "longFangs",
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
      movement: 6,
      toughness: 4,
      armor_save: 3,
      wounds: 2,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 3,
      balistic_skill: 3,
    },

    abilities: {
      core: [],
      faction: "Oath of Moment",
      other: [
        {
          title: "Fire Discipline",
          rule: `Each time this unit Remains Stationary, if it
          includes a Long Fang Pack Leader, you can select one enemy
          unit that is visible to that model. Until the end of the turn, each
          time a model in this unit makes a ranged attack that targets
          that enemy unit, re-roll a Hit roll of 1`,
        },
        {
          title: "Armorium Cherub",
          rule: `Once per battle, after making a Hit roll
          for a model in this unit, you can change that roll to an
          unmodified 6`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Long Fang Pack Leader", "4-5 Long Fangs"],
    equiped: ["boltgun", "bolt pistol", "close combat weapon"],
    wargear_options: `■ Any number of Long Fangs can each have their
    boltgun replaced with one of the following:
    ◦ 1 grav-cannon
    ◦ 1 heavy bolter
    ◦ 1 heavy flamer*
    ◦ 1 lascannon
    ◦ 1 missile launcher
    ◦ 1 multi-melta
    ◦ 1 plasma cannon
    ■ The Long Fang Pack Leader’s close combat
    weapon can be replaced with one of
    the following:
    ◦ 1 Astartes chainsword
    ◦ 1 power fist
    ◦ 1 power weapon
    ■ The Long Fang Pack Leader’s boltgun can be
    replace with one of the following:*
    ◦ 1 flamer
    ◦ 1 grav-gun
    ◦ 1 meltagun
    ◦ 1 plasma gun
    ◦ 1 plasma pistol`,
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: `If a Character unit from your army with the Leader ability
    can be attached to a Devastator Squad, it can instead be
    attached to this unit`,

    keywords: ["Infantry", "Grenades", "Imperium", "Long Fangs"],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Dour and grizzled veterans, Long Fangs are steady of hand and
    temperament, hoary with wisdom and literally long of fang. To these
    patient warriors are granted some of the Great Company’s most
    devastating ranged weapons. Keen of eye, Long Fangs hunt the
    monstrous beasts and battle tanks of the foe`,
  },
  {
    name: "Lukas the Trickster",
    image: "lucas",
    point_cost: [
      {
        amount: 1,
        cost: 55,
      },
    ],
    stats: {
      movement: 4,
      toughness: 4,
      armor_save: 3,
      wounds: 4,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 2,
      balistic_skill: 3,
    },

    abilities: {
      core: ["Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Pelt of the Doppegangrel",
          rule: `While this model is leading a unit,
          each time an attack targets that unit, subtract 1 from the
          Hit roll`,
        },
        {
          title: "Last Laugh",
          rule: `If this model is destroyed by a melee attack, after
          the attacking unit has finished making its attacks, roll one
          D6: on a 4+, the attacking unit suffers D6 mortal wounds and
          is Battle-shocked`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Lukas the Trickster – Epic Hero"],
    equiped: ["plasma pistol", "Claw of the Jackalwolf"],
    wargear_options: "",
    leader: ["Blood Claws"],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: {
      title: "MASTER OF MISCHIEF",
      rule: "This model cannot be your Warlord",
    },
    attached_unit: "",

    keywords: [
      "Infantry",
      "Character",
      "Epic Hero",
      "Grenades",
      "Imperium",
      "Lukas the Trickster",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `A legend amongst impulsive warriors, Lukas – called the Trickster by
    his many detractors – is synonymous with the irreverence and spirit
    of youth. His inventive sabotages and murderous jests rank him as
    one of the most cunning in the Chapter. A dirty fighter, rebel and rogue,
    Lukas’ skills are as deadly as they are mischievous`,
  },
  {
    name: "Murderfang",
    image: "murderfang",
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
      objective_control: 0,
      weapon_skill: 3,
      balistic_skill: 2,
    },

    abilities: {
      core: ["Deadly Demise 1", "Feel No Pain 6+"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Murder-maker",
          rule: `Each time an enemy unit targets this
          model, after that unit has finished making its attacks, this
          model can either shoot as if it were your Shooting phase
          or fight as if it were the Fight phase`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["Murderfang – Epic Hero"],
    equiped: ["heavy flamer", "storm bolter", "the Murderclaws"],
    wargear_options: "",
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: {
      title: "FORCE OF UNTAMED DESTRUCTION",
      rule: `This model cannot be your Warlord`,
    },
    attached_unit: "",

    keywords: [
      "Vehicle",
      "Walker",
      "Character",
      "Epic Hero",
      "Imperium",
      "Dreadnought",
      "Murderfang",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `A stampeding mechanical beast is unleashed from beneath the Fang
    in times of need, its massively brutal claws tearing its foes limb from
    bloody limb. The Chapter names it Murderfang. Its true identity is
    unknown for its insensate snarling rages are bereft of speech; it is
    known now only as a force of untamed destruction`,
  },
  {
    name: "Njal Stormcaller",
    image: "njal",
    point_cost: [
      {
        amount: 1,
        cost: 95,
      },
    ],
    stats: {
      movement: 5,
      toughness: 5,
      armor_save: 2,
      wounds: 5,
      leadership: 6,
      objective_control: 3,
      weapon_skill: 2,
      balistic_skill: 2,
    },

    abilities: {
      core: ["Deep Strike", "Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Stormcaller (Psychic)",
          rule: `While this model is leading a unit,
          models in that unit have the Stealth ability`,
        },
        {
          title: "Runic Armour",
          rule: `Each time a Psychic Attack targets this model’s
          unit, subtract 1 from the Wound roll`,
        },
      ],
    },

    invulnerable: 4,
    unit_composition: ["1 Njal Stormcaller – Epic Hero"],
    equiped: ["bolt pistol", "Living Lightning", "Staff of the Stormcaller"],
    wargear_options: "",
    leader: [
      "Relic Terminator Squad",
      "Terminator Assault Squad",
      "Terminator Squad",
      "Wolf Guard Terminators",
    ],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: "",

    keywords: [
      "Infantry",
      "Character",
      "Epic Hero",
      "Psyker",
      "Imperium",
      "Terminator",
      "Njal Stormcaller",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Summoning ice-toothed blizzards to scatter his foes, Njal Stormcaller
    is an elemental focus of psychic fury. He is High Rune Priest of the
    Space Wolves and wields a crackling staff by which he nullifies
    enemy sorceries`,
  },
  {
    name: "Ragnar Blackmane",
    image: "ragnar",
    point_cost: [
      {
        amount: 1,
        cost: 105,
      },
    ],
    stats: {
      movement: 6,
      toughness: 4,
      armor_save: 3,
      wounds: 5,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 2,
      balistic_skill: 2,
    },

    abilities: {
      core: ["Leader"],
      faction: "Oath of Moment",
      other: [
        {
          title: "War Howl",
          rule: `While this model is leading a unit, that unit is
          eligible to declare a charge in a turn in which it Advanced`,
        },
        {
          title: "Battle-lust",
          rule: `Each time this model ends a Charge move,
          until the end of the turn, add 2 to the Attacks and Strength
          characteristics of this model’s Frostfang`,
        },
      ],
    },

    invulnerable: 4,
    unit_composition: ["1 Ragnar Blackmane – Epic Hero"],
    equiped: ["bolt pistol", "Frostfang"],
    wargear_options: "",
    leader: [
      "Wolf Guard",
      "Blood Claws",
      "Grey Hunters",
      "Assault Intercessor Squad",
      "Bladeguard Veteran Squad",
      "Intercessor Squad",
    ],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: "",

    keywords: [
      "Infantry",
      "Character",
      "Epic Hero",
      "Imperium",
      "Grenades",
      "Tacticus",
      "Captain",
      "Ragnar Blackmane",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Supremely confident and eager always to be first into the fray,
    Wolf Lord Ragnar Blackmane regularly leads his Great Company in
    devastating planetary invasions. No longer as headstrong as in his
    youth, Ragnar’s berserk rages are still furious hurricanes of violence,
    and his terrifying howls freeze the blood of his foes`,
  },
  {
    name: "Skyclaws",
    image: "skyclaws",
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
      movement: 12,
      toughness: 4,
      armor_save: 3,
      wounds: 2,
      leadership: 6,
      objective_control: 1,
      weapon_skill: 3,
      balistic_skill: 3,
    },

    abilities: {
      core: ["Deep Strike"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Headstrong",
          rule: `You can re-roll Charge rolls made for this unit.
          Each time this unit makes a Charge move, until the end of the
          turn, each time a model in this unit makes a melee attack, add
          1 to the Hit roll`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Skyclaw Pack Leader", "4-14 Skyclaws"],
    equiped: ["bolt pistol", "Astartes chainsword"],
    wargear_options: `■ The Skyclaw Pack Leader’s bolt pistol can be replaced with 1 plasma pistol.
    ■ The Skyclaw Pack Leader’s Astartes chainsword can be replaced with one of the following:
    ◦ 1 power fist
    ◦ 1 power weapon
    ■ Up to 2 Skyclaws can each have their bolt pistol and Astartes chainsword replaced with one of
    the following:
    ◦ 1 plasma pistol and 1 Astartes chainsword
    ◦ 1 flamer and 1 close combat weapon
    ◦ 1 grav-gun and 1 close combat weapon
    ◦ 1 meltagun and 1 close combat weapon
    ◦ 1 plasma gun and 1 close combat weapon`,
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: "",
    specific: null,
    attached_unit: `If a Character unit from your army with the Leader ability
    can be attached to an Assault Squad with Jump Packs, it
    can instead be attached to this unit`,

    keywords: [
      "Infantry",
      "Jump Pack",
      "Fly",
      "Grenades",
      "Imperium",
      "Skyclaws",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Especially headstrong Blood Claws are reassigned to jump pack
    wearing Skyclaw packs. Rebellious and free-spirited, Skyclaws seize
    any opportunity to push their luck. They rocket forward fearlessly in
    great loping bounds, chainswords roaring as they slay, plunging into
    the enemy’s heart with reckless fury`,
  },

  {
    name: "Venerable Dreadnought",
    image: "vendread",
    point_cost: [
      {
        amount: 1,
        cost: 170,
      },
    ],
    stats: {
      movement: 6,
      toughness: 9,
      armor_save: 2,
      wounds: 8,
      leadership: 6,
      objective_control: 3,
      weapon_skill: 3,
      balistic_skill: 3,
    },

    abilities: {
      core: ["Deadly Demise 1"],
      faction: "Oath of Moment",
      other: [
        {
          title: "Wisdom of the Ancients (Aura)",
          rule: `While a friendly Adeptus
          Astartes Infantry unit is within 6" of this model, each time
          a model in that unit makes an attack, re-roll a Hit roll of 1 and
          re-roll a Wound roll of 1`,
        },
      ],
    },

    invulnerable: null,
    unit_composition: ["1 Space Wolves Venerable Dreadnought"],
    equiped: ["assault cannon", "storm bolter", "Dreadnought combat weapon"],
    wargear_options: "",
    leader: [],
    second_leader: false,
    third_leader: false,
    wargear_hability: {
      title: "Blizzard Shield",
      rule: `The bearer has a 4+ invulnerable save`,
    },
    specific: null,
    attached_unit: "",

    keywords: [
      "Vehicle",
      "Walker Smoke",
      "Imperium",
      "Dreadnought",
      "Venerable Dreadnought",
    ],
    faction_keywords: ["Adeptus Astartes", "Space Wolves"],

    lore: `Venerable Dreadnoughts are priceless relics steeped in centuries of
    battle. The ancient warriors at the heart of each are living legends of
    the Space Wolves, with wisdom as deep as the ocean and intuition as
    sharp as krakens’ teeth. Awoken from dormancy, they fight as lords of
    battle, seemingly stepping from the sagas to kill in the name of Russ`,
  },
];

/**
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
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
        second_leader: false,
        third_leader: false,
        wargear_hability: "",
        specific: null,
        attached_unit: "",
    
        keywords: [],
        faction_keywords: ["Adeptus Astartes", "Space Wolves"],
        lore: ``,
      },
    
 */
