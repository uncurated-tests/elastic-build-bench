// Complex type file 4 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_4<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 4; depth: D };
      nested: DeepNested_4<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_4<T, Prev[D]>;
    };

type Distributed_4<T> = T extends string
  ? { type: 'string'; value: T; index: 4 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_4 = 'option_4_0' | 'option_4_1' | 'option_4_2' | 'option_4_3' | 'option_4_4' | 'option_4_5' | 'option_4_6' | 'option_4_7' | 'option_4_8' | 'option_4_9' | 'option_4_10' | 'option_4_11' | 'option_4_12' | 'option_4_13';
type OptionMap_4 = {
  [K in OptionKey_4]: {
    key: K;
    index: 4;
    handler: (input: K) => Distributed_4<K>;
  };
};

type ExtractReturn_4<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_4 = `on${Capitalize<OptionKey_4>}Change`;

export type {
  DeepNested_4,
  Distributed_4,
  OptionKey_4,
  OptionMap_4,
  ExtractReturn_4,
  EventName_4,
};
