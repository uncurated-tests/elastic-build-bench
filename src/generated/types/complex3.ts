// Complex type file 3 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_3<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 3; depth: D };
      nested: DeepNested_3<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_3<T, Prev[D]>;
    };

type Distributed_3<T> = T extends string
  ? { type: 'string'; value: T; index: 3 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_3 = 'option_3_0' | 'option_3_1' | 'option_3_2' | 'option_3_3' | 'option_3_4' | 'option_3_5' | 'option_3_6' | 'option_3_7' | 'option_3_8' | 'option_3_9' | 'option_3_10' | 'option_3_11' | 'option_3_12';
type OptionMap_3 = {
  [K in OptionKey_3]: {
    key: K;
    index: 3;
    handler: (input: K) => Distributed_3<K>;
  };
};

type ExtractReturn_3<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_3 = `on${Capitalize<OptionKey_3>}Change`;

export type {
  DeepNested_3,
  Distributed_3,
  OptionKey_3,
  OptionMap_3,
  ExtractReturn_3,
  EventName_3,
};
