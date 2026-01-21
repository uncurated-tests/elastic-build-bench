// Complex type file 51 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_51<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 51; depth: D };
      nested: DeepNested_51<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_51<T, Prev[D]>;
    };

type Distributed_51<T> = T extends string
  ? { type: 'string'; value: T; index: 51 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_51 = 'option_51_0' | 'option_51_1' | 'option_51_2' | 'option_51_3' | 'option_51_4' | 'option_51_5' | 'option_51_6' | 'option_51_7' | 'option_51_8' | 'option_51_9' | 'option_51_10' | 'option_51_11' | 'option_51_12' | 'option_51_13' | 'option_51_14' | 'option_51_15' | 'option_51_16' | 'option_51_17' | 'option_51_18' | 'option_51_19' | 'option_51_20';
type OptionMap_51 = {
  [K in OptionKey_51]: {
    key: K;
    index: 51;
    handler: (input: K) => Distributed_51<K>;
  };
};

type ExtractReturn_51<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_51 = `on${Capitalize<OptionKey_51>}Change`;

export type {
  DeepNested_51,
  Distributed_51,
  OptionKey_51,
  OptionMap_51,
  ExtractReturn_51,
  EventName_51,
};
