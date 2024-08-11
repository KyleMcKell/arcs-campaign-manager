type ExcludeFirst<T extends string> = T extends `F0` ? never : T;

type Range<
  N extends number,
  Acc extends number[] = [],
> = Acc["length"] extends N ? Acc[number] : Range<N, [...Acc, Acc["length"]]>;

type FateTypes = ExcludeFirst<`Fate${Range<25>}`>;

type CardID = "CC" | "L" | "S" | FateTypes;
