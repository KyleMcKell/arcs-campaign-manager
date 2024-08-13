import { fateCards, FateId } from "./fates/fates";
import { steward } from "./fates/steward";
import { ValueOf } from "./types";

export const deckIds = {
  campaignCourt: "CC",
  lore: "L",
  starting: "AID",
  action: "Action",
} as const;

type NonFateDeckIds = ValueOf<typeof deckIds>;

type DeckId = NonFateDeckIds | FateId;

export const cardTypes = {
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
  reminder: "Reminder",
} as const;

type CardTypes = ValueOf<typeof cardTypes>;

export const resources = {
  material: "Material",
  fuel: "Fuel",
  weapon: "Weapon",
  relic: "Relic",
  psionic: "Psionic",
} as const;

export type Resource = ValueOf<typeof resources>;

const suits = {
  mobilization: "Mobilization",
  construction: "Construction",
  aggression: "Aggression",
  administration: "Administration",
  believer: "Believer",
  event: "Event",
};

export type Suit = ValueOf<typeof suits>;

export type StandardCard = {
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
  fourPlayerOnly: boolean;
};

export type SetupCard = {
  cardType: Extract<"Setup" | "Resolution", CardTypes>;
  cardId: number;
  deckId: FateId;
  act: 1 | 2 | 3;
};

export type RuleCard = StandardCard & {
  cardType: Extract<"Law" | "Edict" | "Summit", CardTypes>;
};

export type Card =
  | (StandardCard &
      (
        | {
            cardType: Extract<"Guild", CardTypes>;
            resource: ValueOf<typeof resources>;
          }
        | {
            cardType: Extract<"Edict", CardTypes>;
            placement: number;
            twoPlayerOnly?: boolean;
          }
        | {
            cardType: Exclude<
              CardTypes,
              | "Guild"
              | "Edict"
              | "Action"
              | "Setup"
              | "Resolution"
              | "Law"
              | "Edict"
              | "Summit"
            >;
          }
      ))
  | ActionCard
  | SetupCard
  | RuleCard;

export const actionCards: ActionCard[] = [
  {
    cardId: "event1",
    suit: suits.event,
    value: 0,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "event2",
    suit: suits.event,
    value: 0,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "event3",
    suit: suits.event,
    value: 0,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "aggro1",
    suit: suits.aggression,
    value: 1,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "aggro2",
    suit: suits.aggression,
    value: 2,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro3",
    suit: suits.aggression,
    value: 3,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro4",
    suit: suits.aggression,
    value: 4,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro5",
    suit: suits.aggression,
    value: 5,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro6",
    suit: suits.aggression,
    value: 6,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "aggro7",
    suit: suits.aggression,
    value: 7,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "admin1",
    suit: suits.administration,
    value: 1,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "admin2",
    suit: suits.administration,
    value: 2,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin3",
    suit: suits.administration,
    value: 3,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin4",
    suit: suits.administration,
    value: 4,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin5",
    suit: suits.administration,
    value: 5,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin6",
    suit: suits.administration,
    value: 6,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "admin7",
    suit: suits.administration,
    value: 7,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "const1",
    suit: suits.construction,
    value: 1,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "const2",
    suit: suits.construction,
    value: 2,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const3",
    suit: suits.construction,
    value: 3,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const4",
    suit: suits.construction,
    value: 4,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const5",
    suit: suits.construction,
    value: 5,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const6",
    suit: suits.construction,
    value: 6,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "const7",
    suit: suits.construction,
    value: 7,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "mobil1",
    suit: suits.mobilization,
    value: 1,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: true,
  },
  {
    cardId: "mobil2",
    suit: suits.mobilization,
    value: 2,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil3",
    suit: suits.mobilization,
    value: 3,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil4",
    suit: suits.mobilization,
    value: 4,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil5",
    suit: suits.mobilization,
    value: 5,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil6",
    suit: suits.mobilization,
    value: 6,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: false,
  },
  {
    cardId: "mobil7",
    suit: suits.mobilization,
    value: 7,
    deckId: deckIds.action,
    cardType: cardTypes.action,
    fourPlayerOnly: true,
  },
];

const startingCards: Card[] = [
  {
    deckId: deckIds.starting,
    cardId: 1,
    cardType: cardTypes.imperialCouncil,
    name: "Imperial Council in Session",
    altName: "Imperil Council Decided",
  },
  {
    deckId: deckIds.starting,
    cardId: 2,
    cardType: cardTypes.edict,
    name: "Guild Envoys Depart",
    placement: 0,
    twoPlayerOnly: true,
  },
  {
    deckId: deckIds.starting,
    cardId: 3,
    cardType: cardTypes.edict,
    name: "Govern the Imperial Reach",
    placement: 3,
    altName: "A Policy of War",
  },
  {
    deckId: deckIds.starting,
    cardId: 4,
    cardType: cardTypes.edict,
    name: "Govern the Imperial Reach",
    placement: 3,
    altName: "A Policy of Peace",
  },
  {
    deckId: deckIds.starting,
    cardId: 5,
    cardType: cardTypes.edict,
    name: "Govern the Imperial Reach",
    placement: 3,
    altName: "A Policy of Escalation",
  },
  {
    deckId: deckIds.starting,
    cardId: 6,
    cardType: cardTypes.title,
    name: "Imperial Regent",
    altName: "Outlaw",
  },
  {
    deckId: deckIds.starting,
    cardId: 7,
    cardType: cardTypes.title,
    name: "Imperial Regent",
    altName: "Outlaw",
  },
  {
    deckId: deckIds.starting,
    cardId: 8,
    cardType: cardTypes.title,
    name: "Imperial Regent",
    altName: "Outlaw",
  },
  {
    deckId: deckIds.starting,
    cardId: 9,
    cardType: cardTypes.title,
    name: "Imperial Regent",
    altName: "Outlaw",
  },
  {
    deckId: deckIds.starting,
    cardId: 10,
    cardType: cardTypes.ability,
    name: "Flagship Upgrades",
  },
  {
    deckId: deckIds.starting,
    cardId: 11,
    cardType: cardTypes.ability,
    name: "Flagship Upgrades",
  },
  {
    deckId: deckIds.starting,
    cardId: 11,
    cardType: cardTypes.ability,
    name: "Flagship Upgrades",
  },
  {
    deckId: deckIds.starting,
    cardId: 11,
    cardType: cardTypes.ability,
    name: "Flagship Upgrades",
  },
];

const campaignCourtCards: Card[] = [
  {
    deckId: deckIds.campaignCourt,
    cardId: 1,
    name: "Mining Interest",
    cardType: cardTypes.guild,
    resource: resources.material,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 2,
    name: "Construction Union",
    cardType: cardTypes.guild,
    resource: resources.material,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 3,
    name: "Gatekeepers",
    cardType: cardTypes.guild,
    resource: resources.fuel,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 4,
    name: "Shipping Interest",
    cardType: cardTypes.guild,
    resource: resources.fuel,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 5,
    name: "Skirmishers",
    cardType: cardTypes.guild,
    resource: resources.weapon,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 6,
    name: "Arms Union",
    cardType: cardTypes.guild,
    resource: resources.weapon,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 7,
    name: "Lattice Spies",
    cardType: cardTypes.guild,
    resource: resources.psionic,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 8,
    name: "Silver-Tongues",
    cardType: cardTypes.guild,
    resource: resources.psionic,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 9,
    name: "Sworn Guardians",
    cardType: cardTypes.guild,
    resource: resources.relic,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 10,
    name: "Elder Broker",
    cardType: cardTypes.guild,
    resource: resources.relic,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 11,
    name: "Populist Demands",
    cardType: cardTypes.vox,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 12,
    name: "Council Intrigue",
    cardType: cardTypes.vox,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 13,
    name: "Diplomatic Fiasco",
    cardType: cardTypes.vox,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 14,
    name: "Song of Freedom",
    cardType: cardTypes.vox,
  },
  {
    deckId: deckIds.campaignCourt,
    cardId: 15,
    name: "Blight Looms",
    cardType: cardTypes.vox,
  },
];

const loreCards: Card[] = [
  {
    cardType: cardTypes.lore,
    cardId: 1,
    deckId: deckIds.lore,
    name: "Tool-Priests",
  },
  {
    cardType: cardTypes.lore,
    cardId: 2,
    deckId: deckIds.lore,
    name: "Galactic Rifles",
  },
  {
    cardType: cardTypes.lore,
    cardId: 3,
    deckId: deckIds.lore,
    name: "Sprinter Drives",
  },
  {
    cardType: cardTypes.lore,
    cardId: 4,
    deckId: deckIds.lore,
    name: "Mirror Plating",
  },
  {
    cardType: cardTypes.lore,
    cardId: 5,
    deckId: deckIds.lore,
    name: "Hidden Harbors",
  },
  {
    cardType: cardTypes.lore,
    cardId: 6,
    deckId: deckIds.lore,
    name: "Signal Breaker",
  },
  {
    cardType: cardTypes.lore,
    cardId: 7,
    deckId: deckIds.lore,
    name: "Repair Drones",
  },
  {
    cardType: cardTypes.lore,
    cardId: 8,
    deckId: deckIds.lore,
    name: "Gate Ports",
  },
  {
    cardType: cardTypes.lore,
    cardId: 9,
    deckId: deckIds.lore,
    name: "Cloud Cities",
  },
  {
    cardType: cardTypes.lore,
    cardId: 10,
    deckId: deckIds.lore,
    name: "Living Structures",
  },
  {
    cardType: cardTypes.lore,
    cardId: 11,
    deckId: deckIds.lore,
    name: "Gate Stations",
  },
  {
    cardType: cardTypes.lore,
    cardId: 12,
    deckId: deckIds.lore,
    name: "Railgun Arrays",
  },
  {
    cardType: cardTypes.lore,
    cardId: 13,
    deckId: deckIds.lore,
    name: "Ancient Holdings",
  },
  {
    cardType: cardTypes.lore,
    cardId: 14,
    deckId: deckIds.lore,
    name: "Seeker Torpedoes",
  },
  {
    cardType: cardTypes.lore,
    cardId: 15,
    deckId: deckIds.lore,
    name: "Predictive Sensors",
  },
  {
    cardType: cardTypes.lore,
    cardId: 16,
    deckId: deckIds.lore,
    name: "Force Beams",
  },
  {
    cardType: cardTypes.lore,
    cardId: 17,
    deckId: deckIds.lore,
    name: "Raider Exosuits",
  },
  {
    cardType: cardTypes.lore,
    cardId: 18,
    deckId: deckIds.lore,
    name: "Survival Overrides",
  },
  {
    cardType: cardTypes.lore,
    cardId: 19,
    deckId: deckIds.lore,
    name: "Empath's Vision",
  },
  {
    cardType: cardTypes.lore,
    cardId: 20,
    deckId: deckIds.lore,
    name: "Empath's Bond",
  },
  {
    cardType: cardTypes.lore,
    cardId: 21,
    deckId: deckIds.lore,
    name: "Keeper's Trust",
  },
  {
    cardType: cardTypes.lore,
    cardId: 22,
    deckId: deckIds.lore,
    name: "Keeper's Solidarity",
  },
  {
    cardType: cardTypes.lore,
    cardId: 23,
    deckId: deckIds.lore,
    name: "Warlord's Cruelty",
  },
  {
    cardType: cardTypes.lore,
    cardId: 24,
    deckId: deckIds.lore,
    name: "Warlord's Terror",
  },
  {
    cardType: cardTypes.lore,
    cardId: 25,
    deckId: deckIds.lore,
    name: "Tyrant's Ego",
  },
  {
    cardType: cardTypes.lore,
    cardId: 26,
    deckId: deckIds.lore,
    name: "Tyrant's Authority",
  },
  {
    cardType: cardTypes.lore,
    cardId: 27,
    deckId: deckIds.lore,
    name: "Tycoon's Ambition",
  },
  {
    cardType: cardTypes.lore,
    cardId: 28,
    deckId: deckIds.lore,
    name: "Tycoon's Charm",
  },
];

const cardsArray: Array<Card> = [
  ...campaignCourtCards,
  ...actionCards,
  ...loreCards,
  ...startingCards,
  ...fateCards,
];

type CardMap = {
  [key: string]: Card;
};

export const cards: CardMap = cardsArray.reduce((acc, card) => {
  const key = `${card.deckId}_${card.cardId}`;
  acc[key] = card;
  return acc;
}, {} as CardMap);

export const getCard = (deckId: DeckId, cardId: number): Card | undefined => {
  const key = `${deckId}_${cardId}`;
  return cards[key];
};
