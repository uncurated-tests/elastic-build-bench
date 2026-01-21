// Complex type file 60 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_60<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 60; depth: D };
      nested: DeepNested_60<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_60<T, Prev[D]>;
    };

type Distributed_60<T> = T extends string
  ? { type: 'string'; value: T; index: 60 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_60 = 'option_60_0' | 'option_60_1' | 'option_60_2' | 'option_60_3' | 'option_60_4' | 'option_60_5' | 'option_60_6' | 'option_60_7' | 'option_60_8' | 'option_60_9';
type OptionMap_60 = {
  [K in OptionKey_60]: {
    key: K;
    index: 60;
    handler: (input: K) => Distributed_60<K>;
  };
};

type ExtractReturn_60<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_60 = `on${Capitalize<OptionKey_60>}Change`;

export type {
  DeepNested_60,
  Distributed_60,
  OptionKey_60,
  OptionMap_60,
  ExtractReturn_60,
  EventName_60,
};
