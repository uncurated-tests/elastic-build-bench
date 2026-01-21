// Complex type file 10 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_10<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 10; depth: D };
      nested: DeepNested_10<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_10<T, Prev[D]>;
    };

type Distributed_10<T> = T extends string
  ? { type: 'string'; value: T; index: 10 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_10 = 'option_10_0' | 'option_10_1' | 'option_10_2' | 'option_10_3' | 'option_10_4' | 'option_10_5' | 'option_10_6' | 'option_10_7' | 'option_10_8' | 'option_10_9' | 'option_10_10' | 'option_10_11' | 'option_10_12' | 'option_10_13' | 'option_10_14' | 'option_10_15' | 'option_10_16' | 'option_10_17' | 'option_10_18' | 'option_10_19';
type OptionMap_10 = {
  [K in OptionKey_10]: {
    key: K;
    index: 10;
    handler: (input: K) => Distributed_10<K>;
  };
};

type ExtractReturn_10<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_10 = `on${Capitalize<OptionKey_10>}Change`;

export type {
  DeepNested_10,
  Distributed_10,
  OptionKey_10,
  OptionMap_10,
  ExtractReturn_10,
  EventName_10,
};
