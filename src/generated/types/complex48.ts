// Complex type file 48 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_48<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 48; depth: D };
      nested: DeepNested_48<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_48<T, Prev[D]>;
    };

type Distributed_48<T> = T extends string
  ? { type: 'string'; value: T; index: 48 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_48 = 'option_48_0' | 'option_48_1' | 'option_48_2' | 'option_48_3' | 'option_48_4' | 'option_48_5' | 'option_48_6' | 'option_48_7' | 'option_48_8' | 'option_48_9' | 'option_48_10' | 'option_48_11' | 'option_48_12' | 'option_48_13' | 'option_48_14' | 'option_48_15' | 'option_48_16' | 'option_48_17';
type OptionMap_48 = {
  [K in OptionKey_48]: {
    key: K;
    index: 48;
    handler: (input: K) => Distributed_48<K>;
  };
};

type ExtractReturn_48<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_48 = `on${Capitalize<OptionKey_48>}Change`;

export type {
  DeepNested_48,
  Distributed_48,
  OptionKey_48,
  OptionMap_48,
  ExtractReturn_48,
  EventName_48,
};
