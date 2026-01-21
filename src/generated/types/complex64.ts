// Complex type file 64 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_64<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 64; depth: D };
      nested: DeepNested_64<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_64<T, Prev[D]>;
    };

type Distributed_64<T> = T extends string
  ? { type: 'string'; value: T; index: 64 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_64 = 'option_64_0' | 'option_64_1' | 'option_64_2' | 'option_64_3' | 'option_64_4' | 'option_64_5' | 'option_64_6' | 'option_64_7' | 'option_64_8' | 'option_64_9' | 'option_64_10' | 'option_64_11' | 'option_64_12' | 'option_64_13';
type OptionMap_64 = {
  [K in OptionKey_64]: {
    key: K;
    index: 64;
    handler: (input: K) => Distributed_64<K>;
  };
};

type ExtractReturn_64<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_64 = `on${Capitalize<OptionKey_64>}Change`;

export type {
  DeepNested_64,
  Distributed_64,
  OptionKey_64,
  OptionMap_64,
  ExtractReturn_64,
  EventName_64,
};
