// Complex type file 5 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_5<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 5; depth: D };
      nested: DeepNested_5<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_5<T, Prev[D]>;
    };

type Distributed_5<T> = T extends string
  ? { type: 'string'; value: T; index: 5 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_5 = 'option_5_0' | 'option_5_1' | 'option_5_2' | 'option_5_3' | 'option_5_4' | 'option_5_5' | 'option_5_6' | 'option_5_7' | 'option_5_8' | 'option_5_9' | 'option_5_10' | 'option_5_11' | 'option_5_12' | 'option_5_13' | 'option_5_14';
type OptionMap_5 = {
  [K in OptionKey_5]: {
    key: K;
    index: 5;
    handler: (input: K) => Distributed_5<K>;
  };
};

type ExtractReturn_5<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_5 = `on${Capitalize<OptionKey_5>}Change`;

export type {
  DeepNested_5,
  Distributed_5,
  OptionKey_5,
  OptionMap_5,
  ExtractReturn_5,
  EventName_5,
};
