// Complex type file 29 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_29<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 29; depth: D };
      nested: DeepNested_29<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_29<T, Prev[D]>;
    };

type Distributed_29<T> = T extends string
  ? { type: 'string'; value: T; index: 29 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_29 = 'option_29_0' | 'option_29_1' | 'option_29_2' | 'option_29_3' | 'option_29_4' | 'option_29_5' | 'option_29_6' | 'option_29_7' | 'option_29_8' | 'option_29_9' | 'option_29_10' | 'option_29_11' | 'option_29_12' | 'option_29_13' | 'option_29_14' | 'option_29_15' | 'option_29_16' | 'option_29_17' | 'option_29_18';
type OptionMap_29 = {
  [K in OptionKey_29]: {
    key: K;
    index: 29;
    handler: (input: K) => Distributed_29<K>;
  };
};

type ExtractReturn_29<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_29 = `on${Capitalize<OptionKey_29>}Change`;

export type {
  DeepNested_29,
  Distributed_29,
  OptionKey_29,
  OptionMap_29,
  ExtractReturn_29,
  EventName_29,
};
