export const armoury = {
  foehammer: {
    name: "Foehammer",
    profiles: {
      ranged: {
        profile: "ranged",
        rules: ["ANTI-MONSTER 2+", "ASSAULT"],
        range: 6,
        attacks: "1", //add to models attack value
        weapons_skill: "0",
        s: "8",
        armour_penetration: "2",
        damage: "3",
      },
      melee: {
        profile: "melee",
        rules: ["anti-monster 2+"],
        range: "melee",
        attacks: "5", //add to models attack value
        weapons_skill: "0",
        strength: "8",
        armour_penetration: "2",
        damage: "3",
      },
    },
  },
  assault_cannon: {
    name: "Assault cannon",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["DEVASTATING WOUNDS"],
        range: 24,
        attacks: 6, //add to models attack value
        weapons_skill: "0",
        s: "6",
        armour_penetration: "0",
        damage: "1",
      },
    },
  },
  heavy_flamer: {
    name: "Heavy flamer",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["IGNORES COVER", "TORRENT"],
        range: 12,
        attacks: "d6", //add to models attack value
        weapons_skill: "n/a",
        s: "5",
        armour_penetration: "1",
        damage: "1",
      },
    },
  },
  twin_lascannon: {
    name: "Twin lascannon",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["MELTA 2"],
        range: 48,
        attacks: "1", //add to models attack value
        weapons_skill: "0",
        s: "12",
        armour_penetration: "3",
        damage: "d6 + 1",
      },
    },
  },
  heavy_plasma_cannon: {
    name: "Heavy plasma cannon",
    profiles: {
      standard: {
        profile: "ranged",
        rules: ["BLAST"],
        range: 36,
        attacks: "d3", //add to models attack value
        weapons_skill: "0",
        s: "7",
        armour_penetration: "2",
        damage: "2",
      },
      supercharge: {
        profile: "melee",
        rules: ["BLAST", "HAZARDOUS"],
        range: 36,
        attacks: "d3", //add to models attack value
        weapons_skill: "2",
        strength: "8",
        armour_penetration: "3",
        damage: "3",
      },
    },
  },
  hellfrost_cannon: {
    name: "Heavy plasma cannon",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT]"],
        range: 12,
        attacks: "d3", //add to models attack value
        weapons_skill: "n/a",
        s: "6",
        armour_penetration: "1",
        damage: "2",
      },
      focused: {
        profile: "focused",
        rules: ["BLAST", "HAZARDOUS"],
        range: 36,
        attacks: "1", //add to models attack value
        weapons_skill: "0",
        s: "9",
        armour_penetration: "3",
        damage: "5",
      },
    },
  },
  combi_weapon: {
    name: "Combi weapon",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["ANTI-INFANTRY 4+", "DEVASTATING WOUNDS", "RAPID FIRE 1"],
        range: 24,
        attacks: "1", //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    },
  },
  flamer: {
    name: "Flamer",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["IGNORES COVER", "TORRENT"],
        range: 12,
        attacks: "D6", //add to models attack value
        weapons_skill: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    },
  },
  grav_gun: {
    name: "Grav-gun",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["ANTI-VEHICLE 2+"],
        range: 18,
        attacks: "2", //add to models attack value
        weapons_skill: "3", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "5",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
    },
  },
  grav_pistol: {
    name: "Grav-pistol",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["ANTI-VEHICLE 2+", "PISTOL"],
        range: 18,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
    },
  },
  hand_flamer: {
    name: "Hand flamer",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["IGNORES COVER", "TORRENT", "PISTOL"],
        range: 12,
        attacks: "D6", //add to models attack value
        weapons_skill: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "3",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    },
  },
  inferno_pistol: {
    name: "Inferno pistol",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["MELTA 2", "PISTOL"],
        range: 6,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        armour_penetration: "4", //always positive
        damage: "D3", // always string type
      },
    },
  },
  meltagun: {
    name: "Meltagun",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["MELTA 2"],
        range: 12,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        armour_penetration: "4", //always positive
        damage: "D6", // always string type
      },
    },
  },
  plasma_gun: {
    name: "Plasma gun",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["RAPID FIRE 1"],
        range: 24,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
      supercharge: {
        profile: "supercharge",
        rules: ["RAPID FIRE 1", "HAZARDOUS"],
        range: 24,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        armour_penetration: "3", //always positive
        damage: "2", // always string type
      },
    },
  },
  plasma_pistol: {
    name: "Plasma pistol",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["PISTOL"],
        range: 12,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
      supercharge: {
        profile: "supercharge",
        rules: ["PISTOL", "HAZARDOUS"],
        range: 12,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        armour_penetration: "3", //always positive
        damage: "2", // always string type
      },
    },
  },
  plasma_cannon: {
    name: "Plasma cannon",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["BLAST"],
        range: 36,
        attacks: "D3", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
      supercharge: {
        profile: "supercharge",
        rules: ["BLAST", "HAZARDOUS"],
        range: 36,
        attacks: "D3", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        armour_penetration: "3", //always positive
        damage: "3", // always string type
      },
    },
  },
  helfrost_destructor: {
    name: "Helfrost destructor",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT"],
        range: 12,
        attacks: "D6+6", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
      focused: {
        profile: "focused",
        rules: ["SUSTAINED HITS D3"],
        range: 36,
        attacks: "D3", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "11",
        armour_penetration: "3", //always positive
        damage: "7", // always string type
      },
    },
  },
  helfrost_cannon: {
    name: "Helfrost cannon",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT"],
        range: 12,
        attacks: "D3", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
      focused: {
        profile: "focused",
        rules: [],
        range: 36,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        armour_penetration: "3", //always positive
        damage: "5", // always string type
      },
    },
  },
  twin_helfrost_cannon: {
    name: "Twin helfrost cannon",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT", "TWIN-LINKED"],
        range: 12,
        attacks: "D3", //add to models attack value
        weapons_skill: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        armour_penetration: "1", //always positive
        damage: "2", // always string type
      },
      focused: {
        profile: "focused",
        rules: ["TWIN-LINKED"],
        range: 36,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        armour_penetration: "3", //always positive
        damage: "5", // always string type
      },
    },
  },
  helfrost_pistol: {
    name: "Helfrost pistol",
    profiles: {
      dispersed: {
        profile: "dispersed",
        rules: ["TORRENT", "PISTOL"],
        range: 12,
        attacks: "D3", //add to models attack value
        weapons_skill: "N/A", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "3",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
      focused: {
        profile: "focused",
        rules: ["PISTOL"],
        range: 36,
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        armour_penetration: "3", //always positive
        damage: "3", // always string type
      },
    },
  },
  missile_launcher: {
    name: "Missile launcher",
    profiles: {
      frag: {
        profile: "frag",
        rules: ["BLAST", "HEAVY"],
        range: 48,
        attacks: "D6", //add to models attack value
        weapons_skill: "1", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
      krak: {
        profile: "krak",
        rules: ["HEAVY"],
        range: 48,
        attacks: "1", //add to models attack value
        weapons_skill: "1", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        armour_penetration: "2", //always positive
        damage: "D6", // always string type
      },
    },
  },
  cyclone_missile_launcher: {
    name: "Cyclone missile launcher",
    profiles: {
      frag: {
        profile: "frag",
        rules: ["BLAST", "HEAVY"],
        range: 48,
        attacks: "2D6", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
      krak: {
        profile: "krak",
        rules: ["HEAVY"],
        range: 48,
        attacks: "2", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "9",
        armour_penetration: "2", //always positive
        damage: "D6", // always string type
      },
    },
  },
  fenrisian_great_axe: {
    name: "Fenrisian great axe",
    profiles: {
      strike: {
        profile: "strike",
        rules: [],
        range: "melee",
        attacks: "5", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "10",
        armour_penetration: "2", //always positive
        damage: "D6+1", // always string type
      },
      sweep: {
        profile: "sweep",
        rules: [],
        range: "melee",
        attacks: "10", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    },
  },
  the_axe_morkai: {
    name: "The Axe Morkai",
    profiles: {
      one_handed: {
        profile: "one-handed",
        rules: [],
        range: "melee",
        attacks: "10", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "6",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
      two_handed: {
        profile: "two-handed",
        rules: [],
        range: "melee",
        attacks: "6", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "8",
        armour_penetration: "2", //always positive
        damage: "3", // always string type
      },
    },
  },
  living_lightning: {
    name: "Living Lightning",
    profiles: {
      witchfire: {
        profile: "witchfire",
        rules: ["PSYCHIC", "SUSTAINED HITS 2"],
        range: "24",
        attacks: "D6", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
      focused_witchfire: {
        profile: "focused witchfire",
        rules: ["PSYCHIC", "SUSTAINED HITS 2", "HAZARDOUS"],
        range: "24",
        attacks: "2D6", //add to models attack value
        weapons_skill: "0", //how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        s: "7",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    },
  },
  storm_bolter: {
    name: "Storm bolter",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["RAPID FIRE 2"],
        range: 24,
        attacks: 2, //add to models attack value
        weapons_skill: "1",
        s: "4",
        armour_penetration: "0",
        damage: "1",
      },
    },
  },
  skyhammer_missile_launcher: {
    name: "Skyhammer missile launcher",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["ANTI-FLY 2+"],
        range: 48,
        attacks: 3, //add to models attack value
        weapons_skill: "0",
        s: "8",
        armour_penetration: "1",
        damage: "D3",
      },
    },
  },
  twin_stormstrike_missile_launcher: {
    name: "Twin stormstrike missile launcher",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["ANTI-FLY 2+"],
        range: 48,
        attacks: "1", //add to models attack value
        weapons_skill: "0",
        s: "10",
        armour_penetration: "2",
        damage: "3",
      },
    },
  },
  grav_cannon: {
    name: "Grav-cannon",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["[ANTI-VEHICLE 2+", "HEAVY]"],
        range: 24,
        attacks: 3, //add to models attack value
        weapons_skill: "1",
        s: "6",
        armour_penetration: "1",
        damage: "3",
      },
    },
  },
  heavy_bolter: {
    name: "Heavy bolter",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["HEAVY", "SUSTAINED HITS 1"],
        range: 36,
        attacks: 3, //add to models attack value
        weapons_skill: "1",
        s: "5",
        armour_penetration: "1",
        damage: "2",
      },
    },
  },
  twin_heavy_bolter: {
    name: "Twin heavy bolter",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["HEAVY", "SUSTAINED HITS 1", "TWIN-LINKED"],
        range: 36,
        attacks: 3, //add to models attack value
        weapons_skill: "1",
        s: "5",
        armour_penetration: "1",
        damage: "2",
      },
    },
  },
  lascannon: {
    name: "Lascannon",
    profiles: {
      standard: {
        profile: "standard",
        type: "range",
        rules: ["HEAVY"],
        range: 48,
        attacks: "1", //add to models attack value
        weapons_skill: "1",
        s: "12",
        armour_penetration: "3",
        damage: "D6+1",
      },
    },
  },
  multi_melta: {
    //add to models attack value
    name: "Mueapons_skillti-melta",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["MELTA 2", "HEAVY"],
        range: "18",
        attacks: 2, //add to models attack value
        weapons_skill: "0",
        s: "9",
        armour_penetration: "4",
        damage: "d6",
      },
    },
  },
  twin_multi_melt: {
    //add to models attack value
    name: "Twin mueapons_skillti-melta",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["MELTA 2", "HEAVY", "TWIN-LINKED"],
        range: "18",
        attacks: 2, //add to models attack value
        weapons_skill: "0",
        s: "9",
        armour_penetration: "4",
        damage: "d6",
      },
    },
  },

  stormfrag_auto_launcher: {
    name: "Stormfrag auto-launcher",
    profiles: {
      standard: {
        profile: "ranged",
        type: "range",
        rules: ["ASSAULT", "BLAST"],
        range: "12",
        attacks: "D6", //add to models attack value
        weapons_skill: "0",
        s: "4",
        armour_penetration: "0",
        damage: "1",
      },
    },
  },
  close_combat_weapon: {
    name: "Close combat weapon",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "0/1", //add to models attack value (normal models / characters)
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    },
  },
  dreadnought_combat_weapon: {
    name: "Dreadnought combat weapon",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "5", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "12",
        armour_penetration: "2", //always positive
        damage: "3", // always string type
      },
    },
  },
  great_wolf_claw: {
    name: "Great wolf claw",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "5", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "10",
        armour_penetration: "3", //always positive
        damage: "3", // always string type
      },
    },
  },
  armoured_hull: {
    name: "Armoured hull",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "6", //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    },
  },
  chainfist: {
    name: "Chainfist",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["ANTI-VEHICLE 3+"],
        range: "melee",
        attacks: "0", //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    },
  },
  teeth_and_claws: {
    name: "Teeth and claws",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "2", //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "0", //always positive
        damage: "1", // always string type
      },
    },
  },
  crushing_teeth_and_claws: {
    name: "Crushing teeth and claws",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["EXTRA ATTACKS"], //add to models attack value
        range: "melee",
        attacks: "3", //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    },
  },
  flurry_of_teeth_and_claws: {
    name: "Flurry of teeth and claws",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["EXTRA ATTACKS"], //add to models attack value
        range: "melee",
        attacks: "6", //add to models attack value
        weapons_skill: "2", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    },
  },
  heirloom_weapon: {
    name: "Heirloom weapon",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "4", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    },
  },
  wulfen_claws_and_melee_weapons: {
    name: "Wulfen claws and melee weapons",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "2", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    },
  },
  wulfen_hammer: {
    name: "Wulfen claws and melee weapons",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "0", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    },
  },
  astartes_chainsword: {
    name: "Astartes chainsword",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "1", //always positive
        damage: "1", // always string type
      },
    },
  },
  power_fist: {
    name: "Power fist",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "0", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    },
  },
  power_weapon: {
    name: "Power weapon",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    },
  },
  relic_weapon: {
    name: "Relic weapon",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "1", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    },
  },
  thunder_hammer: {
    name: "Thunder hammer",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["DEVASTATING WOUNDS"],
        range: "melee",
        attacks: "0", //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "8",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    },
  },
  Twin_lightning_claws: {
    name: "Twin lightning claws",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["TWIN-LINKED"],
        range: "melee",
        attacks: "2", //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "4",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    },
  },
  wolf_claws: {
    name: "Twin lightning claws",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["TWIN-LINKED"],
        range: "melee",
        attacks: "8", //add to models attack value
        weapons_skill: "1", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    },
  },
  claw_of_the_Jackalwolf: {
    name: "Claw of the Jackalwolf",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "6", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "5",
        armour_penetration: "2", //always positive
        damage: "1", // always string type
      },
    },
  },
  glacius: {
    name: "Glacius",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "6", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    },
  },
  wyrmclaw: {
    name: "Wyrmclaw",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["LETHAL HITS"],
        range: "melee",
        attacks: "6", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "7",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    },
  },
  frostfang: {
    name: "Frostfang",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["SUSTAINED HITS 1"],
        range: "melee",
        attacks: "8", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "3", //always positive
        damage: "2", // always string type
      },
    },
  },
  artificer_crozius: {
    name: "Artificer crozius",
    profiles: {
      standard: {
        profile: "standard",
        rules: [],
        range: "melee",
        attacks: "5", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "6",
        armour_penetration: "2", //always positive
        damage: "2", // always string type
      },
    },
  },
  trueclaw: {
    name: "Trueclaw",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["LETHAL HITS"],
        range: "melee",
        attacks: "6", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "12",
        armour_penetration: "2", //always positive
        damage: "3", // always string type
      },
    },
  },
  Murderclaws: {
    name: "Murderclaws",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["TWIN-LINKED"],
        range: "melee",
        attacks: "8", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "14",
        armour_penetration: "2", //always positive
        damage: "3", // always string type
      },
    },
  },
  Staff_of_the_Stormcaller: {
    name: "Murderclaws",
    profiles: {
      standard: {
        profile: "standard",
        rules: ["PSYCHIC", "SUSTAINED HITS 2"],
        range: "melee",
        attacks: "4", //add to models attack value
        weapons_skill: "0", //how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
        strength: "7",
        armour_penetration: "1", //always positive
        damage: "D3", // always string type
      },
    },
  },
};
/**
     weapon_name: {
      name: "Weapon Name",
      profiles: {
        profile_name1: {
          profile: "profile name 1",
          rules: ["ANTI-MONSTER 2+", "ASSAULT"],
          range: 6,
          attacks: "1", //add to models attack value
          weapons_skill: "0",//how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
          s:"8",
          armour_penetration: "2",//always positive
          damage: "3", // always string type
        },
        profile_name2: {
          profile: "profile name 2",
          rules: ["anti-monster 2+"],
          range: "melee",
          attacks: 5, //add to models attack value
          weapons_skill: "0",//how much adds from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
          strength:"8",
          armour_penetration: "2",//always positive
          damage: "3", // always string type
        },
      },
  },
 */
/*

    close_combat_weapon: {
      name: "Close combat weapon",
      profiles: {
        standard: {
          profile: "profile name 1",
          rules: ["ANTI-MONSTER 2+", "ASSAULT"],
          range: "melee",
          attacks: "5", //add to models attack value
          weapons_skill: "0",//how much adss from users hit roll. eg user bs=3, weapon bs=1: roll to hit becomes 4
          strength:"4",
          armour_penetration: "0",//always positive
          damage: "1", // always string type
        },
      },

  */

/**


Staff of the Stormcaller [PSYCHIC, SUSTAINED HITS 2] Melee 4 3+ 7 -1 D3


 */
