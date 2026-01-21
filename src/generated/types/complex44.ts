// Complex type file 44 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_44<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 44; depth: D };
      nested: DeepNested_44<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_44<T, Prev[D]>;
    };

type Distributed_44<T> = T extends string
  ? { type: 'string'; value: T; index: 44 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_44 = 'option_44_0' | 'option_44_1' | 'option_44_2' | 'option_44_3' | 'option_44_4' | 'option_44_5' | 'option_44_6' | 'option_44_7' | 'option_44_8' | 'option_44_9' | 'option_44_10' | 'option_44_11' | 'option_44_12' | 'option_44_13';
type OptionMap_44 = {
  [K in OptionKey_44]: {
    key: K;
    index: 44;
    handler: (input: K) => Distributed_44<K>;
  };
};

type ExtractReturn_44<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_44 = `on${Capitalize<OptionKey_44>}Change`;

export type {
  DeepNested_44,
  Distributed_44,
  OptionKey_44,
  OptionMap_44,
  ExtractReturn_44,
  EventName_44,
};
