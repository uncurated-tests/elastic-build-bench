// Complex type file 11 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_11<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 11; depth: D };
      nested: DeepNested_11<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_11<T, Prev[D]>;
    };

type Distributed_11<T> = T extends string
  ? { type: 'string'; value: T; index: 11 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_11 = 'option_11_0' | 'option_11_1' | 'option_11_2' | 'option_11_3' | 'option_11_4' | 'option_11_5' | 'option_11_6' | 'option_11_7' | 'option_11_8' | 'option_11_9' | 'option_11_10' | 'option_11_11' | 'option_11_12' | 'option_11_13' | 'option_11_14' | 'option_11_15' | 'option_11_16' | 'option_11_17' | 'option_11_18' | 'option_11_19' | 'option_11_20';
type OptionMap_11 = {
  [K in OptionKey_11]: {
    key: K;
    index: 11;
    handler: (input: K) => Distributed_11<K>;
  };
};

type ExtractReturn_11<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_11 = `on${Capitalize<OptionKey_11>}Change`;

export type {
  DeepNested_11,
  Distributed_11,
  OptionKey_11,
  OptionMap_11,
  ExtractReturn_11,
  EventName_11,
};
