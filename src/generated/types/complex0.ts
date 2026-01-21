// Complex type file 0 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_0<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 0; depth: D };
      nested: DeepNested_0<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_0<T, Prev[D]>;
    };

type Distributed_0<T> = T extends string
  ? { type: 'string'; value: T; index: 0 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_0 = 'option_0_0' | 'option_0_1' | 'option_0_2' | 'option_0_3' | 'option_0_4' | 'option_0_5' | 'option_0_6' | 'option_0_7' | 'option_0_8' | 'option_0_9';
type OptionMap_0 = {
  [K in OptionKey_0]: {
    key: K;
    index: 0;
    handler: (input: K) => Distributed_0<K>;
  };
};

type ExtractReturn_0<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_0 = `on${Capitalize<OptionKey_0>}Change`;

export type {
  DeepNested_0,
  Distributed_0,
  OptionKey_0,
  OptionMap_0,
  ExtractReturn_0,
  EventName_0,
};
