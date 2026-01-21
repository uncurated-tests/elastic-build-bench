// Complex type file 14 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_14<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 14; depth: D };
      nested: DeepNested_14<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_14<T, Prev[D]>;
    };

type Distributed_14<T> = T extends string
  ? { type: 'string'; value: T; index: 14 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_14 = 'option_14_0' | 'option_14_1' | 'option_14_2' | 'option_14_3' | 'option_14_4' | 'option_14_5' | 'option_14_6' | 'option_14_7' | 'option_14_8' | 'option_14_9' | 'option_14_10' | 'option_14_11' | 'option_14_12' | 'option_14_13' | 'option_14_14' | 'option_14_15' | 'option_14_16' | 'option_14_17' | 'option_14_18' | 'option_14_19' | 'option_14_20' | 'option_14_21' | 'option_14_22' | 'option_14_23';
type OptionMap_14 = {
  [K in OptionKey_14]: {
    key: K;
    index: 14;
    handler: (input: K) => Distributed_14<K>;
  };
};

type ExtractReturn_14<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_14 = `on${Capitalize<OptionKey_14>}Change`;

export type {
  DeepNested_14,
  Distributed_14,
  OptionKey_14,
  OptionMap_14,
  ExtractReturn_14,
  EventName_14,
};
