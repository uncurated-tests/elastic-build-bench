// Complex type file 49 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_49<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 49; depth: D };
      nested: DeepNested_49<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_49<T, Prev[D]>;
    };

type Distributed_49<T> = T extends string
  ? { type: 'string'; value: T; index: 49 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_49 = 'option_49_0' | 'option_49_1' | 'option_49_2' | 'option_49_3' | 'option_49_4' | 'option_49_5' | 'option_49_6' | 'option_49_7' | 'option_49_8' | 'option_49_9' | 'option_49_10' | 'option_49_11' | 'option_49_12' | 'option_49_13' | 'option_49_14' | 'option_49_15' | 'option_49_16' | 'option_49_17' | 'option_49_18';
type OptionMap_49 = {
  [K in OptionKey_49]: {
    key: K;
    index: 49;
    handler: (input: K) => Distributed_49<K>;
  };
};

type ExtractReturn_49<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_49 = `on${Capitalize<OptionKey_49>}Change`;

export type {
  DeepNested_49,
  Distributed_49,
  OptionKey_49,
  OptionMap_49,
  ExtractReturn_49,
  EventName_49,
};
