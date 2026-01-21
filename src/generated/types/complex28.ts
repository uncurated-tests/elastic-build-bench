// Complex type file 28 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_28<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 28; depth: D };
      nested: DeepNested_28<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_28<T, Prev[D]>;
    };

type Distributed_28<T> = T extends string
  ? { type: 'string'; value: T; index: 28 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_28 = 'option_28_0' | 'option_28_1' | 'option_28_2' | 'option_28_3' | 'option_28_4' | 'option_28_5' | 'option_28_6' | 'option_28_7' | 'option_28_8' | 'option_28_9' | 'option_28_10' | 'option_28_11' | 'option_28_12' | 'option_28_13' | 'option_28_14' | 'option_28_15' | 'option_28_16' | 'option_28_17';
type OptionMap_28 = {
  [K in OptionKey_28]: {
    key: K;
    index: 28;
    handler: (input: K) => Distributed_28<K>;
  };
};

type ExtractReturn_28<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_28 = `on${Capitalize<OptionKey_28>}Change`;

export type {
  DeepNested_28,
  Distributed_28,
  OptionKey_28,
  OptionMap_28,
  ExtractReturn_28,
  EventName_28,
};
