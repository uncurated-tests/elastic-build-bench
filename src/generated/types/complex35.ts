// Complex type file 35 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_35<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 35; depth: D };
      nested: DeepNested_35<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_35<T, Prev[D]>;
    };

type Distributed_35<T> = T extends string
  ? { type: 'string'; value: T; index: 35 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_35 = 'option_35_0' | 'option_35_1' | 'option_35_2' | 'option_35_3' | 'option_35_4' | 'option_35_5' | 'option_35_6' | 'option_35_7' | 'option_35_8' | 'option_35_9' | 'option_35_10' | 'option_35_11' | 'option_35_12' | 'option_35_13' | 'option_35_14' | 'option_35_15' | 'option_35_16' | 'option_35_17' | 'option_35_18' | 'option_35_19' | 'option_35_20' | 'option_35_21' | 'option_35_22' | 'option_35_23' | 'option_35_24';
type OptionMap_35 = {
  [K in OptionKey_35]: {
    key: K;
    index: 35;
    handler: (input: K) => Distributed_35<K>;
  };
};

type ExtractReturn_35<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_35 = `on${Capitalize<OptionKey_35>}Change`;

export type {
  DeepNested_35,
  Distributed_35,
  OptionKey_35,
  OptionMap_35,
  ExtractReturn_35,
  EventName_35,
};
