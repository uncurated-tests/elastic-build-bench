// Complex type file 17 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_17<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 17; depth: D };
      nested: DeepNested_17<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_17<T, Prev[D]>;
    };

type Distributed_17<T> = T extends string
  ? { type: 'string'; value: T; index: 17 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_17 = 'option_17_0' | 'option_17_1' | 'option_17_2' | 'option_17_3' | 'option_17_4' | 'option_17_5' | 'option_17_6' | 'option_17_7' | 'option_17_8' | 'option_17_9' | 'option_17_10' | 'option_17_11' | 'option_17_12' | 'option_17_13' | 'option_17_14' | 'option_17_15' | 'option_17_16' | 'option_17_17' | 'option_17_18' | 'option_17_19' | 'option_17_20' | 'option_17_21' | 'option_17_22' | 'option_17_23' | 'option_17_24' | 'option_17_25' | 'option_17_26';
type OptionMap_17 = {
  [K in OptionKey_17]: {
    key: K;
    index: 17;
    handler: (input: K) => Distributed_17<K>;
  };
};

type ExtractReturn_17<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_17 = `on${Capitalize<OptionKey_17>}Change`;

export type {
  DeepNested_17,
  Distributed_17,
  OptionKey_17,
  OptionMap_17,
  ExtractReturn_17,
  EventName_17,
};
