type Resource = "Fuel" | "Material" | "Weapons" | "Relic" | "Psionic";

type Player = {
  isActive: boolean;
  fate: number;
  cards: Array<string>;
  resources: Array<Resource>;
  score: number;
  allegiance: "outlaw" | "regent";
};

type Players = {
  red: Player;
  yellow: Player;
  blue: Player;
  white: Player;
};

type Act = {
  players: Players;
};

type Gamestate = {
  currentAct: 1 | 2 | 3;
  act1: Act;
  act2: Act | null;
  act3: Act | null;
};

const exampleGamestate: Gamestate = {
  currentAct: 1,
  act1: {
    players: {
      red: {
        isActive: true,
        fate: 1,
        cards: [],
        resources: [],
        score: 0,
      },
      yellow: {
        isActive: false,
        fate: 2,
        cards: [],
        resources: [],
        score: 0,
      },
      blue: {
        isActive: true,
        fate: 3,
        cards: [],
        resources: [],
        score: 0,
      },
      white: {
        isActive: true,
        fate: 5,
        cards: [],
        resources: [],
        score: 0,
      },
    },
  },
};
