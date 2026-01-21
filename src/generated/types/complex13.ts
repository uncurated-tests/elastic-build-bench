// Complex type file 13 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_13<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 13; depth: D };
      nested: DeepNested_13<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_13<T, Prev[D]>;
    };

type Distributed_13<T> = T extends string
  ? { type: 'string'; value: T; index: 13 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_13 = 'option_13_0' | 'option_13_1' | 'option_13_2' | 'option_13_3' | 'option_13_4' | 'option_13_5' | 'option_13_6' | 'option_13_7' | 'option_13_8' | 'option_13_9' | 'option_13_10' | 'option_13_11' | 'option_13_12' | 'option_13_13' | 'option_13_14' | 'option_13_15' | 'option_13_16' | 'option_13_17' | 'option_13_18' | 'option_13_19' | 'option_13_20' | 'option_13_21' | 'option_13_22';
type OptionMap_13 = {
  [K in OptionKey_13]: {
    key: K;
    index: 13;
    handler: (input: K) => Distributed_13<K>;
  };
};

type ExtractReturn_13<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_13 = `on${Capitalize<OptionKey_13>}Change`;

export type {
  DeepNested_13,
  Distributed_13,
  OptionKey_13,
  OptionMap_13,
  ExtractReturn_13,
  EventName_13,
};
