import { FateId } from "./fates/fates";
import { ValueOf } from "./types";

const DECK_IDS = {
  campaignCourt: "CC",
  lore: "L",
  starting: "Starting",
  action: "Action",
} as const;

type NonFateDeckIds = ValueOf<typeof DECK_IDS>;

type DeckId = NonFateDeckIds | FateId;

export const CARD_TYPES = {
  lore: "Lore",
  guild: "Guild",
  vox: "Vox",
  imperialCouncil: "Imperial Council",
  edict: "Edict",
  law: "Law",
  summit: "Summit",
  resolution: "Resolution",
  title: "Title",
  ability: "Ability",
  action: "Action",
  setup: "Setup",
} as const;

type CardTypes = ValueOf<typeof CARD_TYPES>;

export const RESOURCES = {
  material: "Material",
  fuel: "Fuel",
  weapon: "Weapon",
  relic: "Relic",
  psionic: "Psionic",
} as const;

const SUITS = {
  mobilization: "Mobilization",
  construction: "Construction",
  aggression: "Aggression",
  administration: "Administration",
  believer: "Believer",
  event: "Event",
};

export type Suit = ValueOf<typeof SUITS>;

type StandardCard = {
  cardId: number;
  deckId: Exclude<DeckId, "Action">;
  name: string;
  altName?: string;
};

export type ActionCard = {
  cardType: Extract<"Action", CardTypes>;
  cardId: string;
  deckId: Extract<"Action", DeckId>;
  suit: Suit;
  value: number;
  fourPlayerOnly?: boolean;
};

type SetupCard = {
  cardType: Extract<"Setup", CardTypes>;
  cardId: number;
  deckId: FateId;
  act: 1 | 2 | 3;
};

export type Card =
  | (StandardCard &
      (
        | {
            cardType: Extract<"Guild", CardTypes>;
            resource: ValueOf<typeof RESOURCES>;
          }
        | {
            cardType: Extract<"Edict", CardTypes>;
            placement: number;
            twoPlayerOnly?: boolean;
          }
        | {
            cardType: Exclude<
              CardTypes,
              "Guild" | "Edict" | "Action" | "Setup"
            >;
          }
      ))
  | ActionCard
  | SetupCard;

const actionCards: Card[] = [
  {
    cardId: "aggro1",
    suit: SUITS.aggression,
    value: 1,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "aggro2",
    suit: SUITS.aggression,
    value: 2,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro3",
    suit: SUITS.aggression,
    value: 3,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro4",
    suit: SUITS.aggression,
    value: 4,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro5",
    suit: SUITS.aggression,
    value: 5,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro6",
    suit: SUITS.aggression,
    value: 6,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro7",
    suit: SUITS.aggression,
    value: 7,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "admin1",
    suit: SUITS.administration,
    value: 1,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "admin2",
    suit: SUITS.administration,
    value: 2,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin3",
    suit: SUITS.administration,
    value: 3,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin4",
    suit: SUITS.administration,
    value: 4,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin5",
    suit: SUITS.administration,
    value: 5,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin6",
    suit: SUITS.administration,
    value: 6,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin7",
    suit: SUITS.administration,
    value: 7,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "const1",
    suit: SUITS.construction,
    value: 1,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "const2",
    suit: SUITS.construction,
    value: 2,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const3",
    suit: SUITS.construction,
    value: 3,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const4",
    suit: SUITS.construction,
    value: 4,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const5",
    suit: SUITS.construction,
    value: 5,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const6",
    suit: SUITS.construction,
    value: 6,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const7",
    suit: SUITS.construction,
    value: 7,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "mobil1",
    suit: SUITS.mobilization,
    value: 1,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "mobil2",
    suit: SUITS.mobilization,
    value: 2,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil3",
    suit: SUITS.mobilization,
    value: 3,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil4",
    suit: SUITS.mobilization,
    value: 4,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil5",
    suit: SUITS.mobilization,
    value: 5,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil6",
    suit: SUITS.mobilization,
    value: 6,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil7",
    suit: SUITS.mobilization,
    value: 7,
    deckId: DECK_IDS.action,
    cardType: CARD_TYPES.action,
    fourPlayerOnly: true,
  },
];

const startingCards: Card[] = [
  {
    deckId: DECK_IDS.starting,
    cardId: 1,
    cardType: CARD_TYPES.imperialCouncil,
    name: "Imperial Council in Session",
    altName: "Imperil Council Decided",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 2,
    cardType: CARD_TYPES.edict,
    name: "Guild Envoys Depart",
    placement: 0,
    twoPlayerOnly: true,
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 3,
    cardType: CARD_TYPES.edict,
    name: "Govern the Imperial Reach",
    placement: 3,
    altName: "A Policy of War",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 4,
    cardType: CARD_TYPES.edict,
    name: "Govern the Imperial Reach",
    placement: 3,
    altName: "A Policy of Peace",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 5,
    cardType: CARD_TYPES.edict,
    name: "Govern the Imperial Reach",
    placement: 3,
    altName: "A Policy of Escalation",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 6,
    cardType: CARD_TYPES.title,
    name: "Imperial Regent",
    altName: "Outlaw",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 7,
    cardType: CARD_TYPES.title,
    name: "Imperial Regent",
    altName: "Outlaw",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 8,
    cardType: CARD_TYPES.title,
    name: "Imperial Regent",
    altName: "Outlaw",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 9,
    cardType: CARD_TYPES.title,
    name: "Imperial Regent",
    altName: "Outlaw",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 10,
    cardType: CARD_TYPES.ability,
    name: "Flagship Upgrades",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 11,
    cardType: CARD_TYPES.ability,
    name: "Flagship Upgrades",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 11,
    cardType: CARD_TYPES.ability,
    name: "Flagship Upgrades",
  },
  {
    deckId: DECK_IDS.starting,
    cardId: 11,
    cardType: CARD_TYPES.ability,
    name: "Flagship Upgrades",
  },
];

const campaignCourtCards: Card[] = [
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 1,
    name: "Mining Interest",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.material,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 2,
    name: "Construction Union",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.material,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 3,
    name: "Gatekeepers",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.fuel,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 4,
    name: "Shipping Interest",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.fuel,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 5,
    name: "Skirmishers",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.weapon,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 6,
    name: "Arms Union",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.weapon,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 7,
    name: "Lattice Spies",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.psionic,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 8,
    name: "Silver-Tongues",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.psionic,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 9,
    name: "Sworn Guardians",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.relic,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 10,
    name: "Elder Broker",
    cardType: CARD_TYPES.guild,
    resource: RESOURCES.relic,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 11,
    name: "Populist Demands",
    cardType: CARD_TYPES.vox,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 12,
    name: "Council Intrigue",
    cardType: CARD_TYPES.vox,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 13,
    name: "Diplomatic Fiasco",
    cardType: CARD_TYPES.vox,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 14,
    name: "Song of Freedom",
    cardType: CARD_TYPES.vox,
  },
  {
    deckId: DECK_IDS.campaignCourt,
    cardId: 15,
    name: "Blight Looms",
    cardType: CARD_TYPES.vox,
  },
];

const loreCards: Card[] = [
  {
    cardType: CARD_TYPES.lore,
    cardId: 1,
    deckId: DECK_IDS.lore,
    name: "Tool-Priests",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 2,
    deckId: DECK_IDS.lore,
    name: "Galactic Rifles",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 3,
    deckId: DECK_IDS.lore,
    name: "Sprinter Drives",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 4,
    deckId: DECK_IDS.lore,
    name: "Mirror Plating",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 5,
    deckId: DECK_IDS.lore,
    name: "Hidden Harbors",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 6,
    deckId: DECK_IDS.lore,
    name: "Signal Breaker",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 7,
    deckId: DECK_IDS.lore,
    name: "Repair Drones",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 8,
    deckId: DECK_IDS.lore,
    name: "Gate Ports",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 9,
    deckId: DECK_IDS.lore,
    name: "Cloud Cities",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 10,
    deckId: DECK_IDS.lore,
    name: "Living Structures",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 11,
    deckId: DECK_IDS.lore,
    name: "Gate Stations",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 12,
    deckId: DECK_IDS.lore,
    name: "Railgun Arrays",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 13,
    deckId: DECK_IDS.lore,
    name: "Ancient Holdings",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 14,
    deckId: DECK_IDS.lore,
    name: "Seeker Torpedoes",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 15,
    deckId: DECK_IDS.lore,
    name: "Predictive Sensors",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 16,
    deckId: DECK_IDS.lore,
    name: "Force Beams",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 17,
    deckId: DECK_IDS.lore,
    name: "Raider Exosuits",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 18,
    deckId: DECK_IDS.lore,
    name: "Survival Overrides",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 19,
    deckId: DECK_IDS.lore,
    name: "Empath's Vision",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 20,
    deckId: DECK_IDS.lore,
    name: "Empath's Bond",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 21,
    deckId: DECK_IDS.lore,
    name: "Keeper's Trust",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 22,
    deckId: DECK_IDS.lore,
    name: "Keeper's Solidarity",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 23,
    deckId: DECK_IDS.lore,
    name: "Warlord's Cruelty",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 24,
    deckId: DECK_IDS.lore,
    name: "Warlord's Terror",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 25,
    deckId: DECK_IDS.lore,
    name: "Tyrant's Ego",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 26,
    deckId: DECK_IDS.lore,
    name: "Tyrant's Authority",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 27,
    deckId: DECK_IDS.lore,
    name: "Tycoon's Ambition",
  },
  {
    cardType: CARD_TYPES.lore,
    cardId: 28,
    deckId: DECK_IDS.lore,
    name: "Tycoon's Charm",
  },
];

const cards = [
  ...startingCards,
  ...campaignCourtCards,
  ...actionCards,
  ...loreCards,
];
