// Complex type file 9 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_9<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 9; depth: D };
      nested: DeepNested_9<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_9<T, Prev[D]>;
    };

type Distributed_9<T> = T extends string
  ? { type: 'string'; value: T; index: 9 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_9 = 'option_9_0' | 'option_9_1' | 'option_9_2' | 'option_9_3' | 'option_9_4' | 'option_9_5' | 'option_9_6' | 'option_9_7' | 'option_9_8' | 'option_9_9' | 'option_9_10' | 'option_9_11' | 'option_9_12' | 'option_9_13' | 'option_9_14' | 'option_9_15' | 'option_9_16' | 'option_9_17' | 'option_9_18';
type OptionMap_9 = {
  [K in OptionKey_9]: {
    key: K;
    index: 9;
    handler: (input: K) => Distributed_9<K>;
  };
};

type ExtractReturn_9<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_9 = `on${Capitalize<OptionKey_9>}Change`;

export type {
  DeepNested_9,
  Distributed_9,
  OptionKey_9,
  OptionMap_9,
  ExtractReturn_9,
  EventName_9,
};
