// Complex type file 55 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_55<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 55; depth: D };
      nested: DeepNested_55<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_55<T, Prev[D]>;
    };

type Distributed_55<T> = T extends string
  ? { type: 'string'; value: T; index: 55 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_55 = 'option_55_0' | 'option_55_1' | 'option_55_2' | 'option_55_3' | 'option_55_4' | 'option_55_5' | 'option_55_6' | 'option_55_7' | 'option_55_8' | 'option_55_9' | 'option_55_10' | 'option_55_11' | 'option_55_12' | 'option_55_13' | 'option_55_14' | 'option_55_15' | 'option_55_16' | 'option_55_17' | 'option_55_18' | 'option_55_19' | 'option_55_20' | 'option_55_21' | 'option_55_22' | 'option_55_23' | 'option_55_24';
type OptionMap_55 = {
  [K in OptionKey_55]: {
    key: K;
    index: 55;
    handler: (input: K) => Distributed_55<K>;
  };
};

type ExtractReturn_55<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_55 = `on${Capitalize<OptionKey_55>}Change`;

export type {
  DeepNested_55,
  Distributed_55,
  OptionKey_55,
  OptionMap_55,
  ExtractReturn_55,
  EventName_55,
};
