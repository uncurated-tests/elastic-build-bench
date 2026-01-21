// Complex type file 40 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_40<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 40; depth: D };
      nested: DeepNested_40<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_40<T, Prev[D]>;
    };

type Distributed_40<T> = T extends string
  ? { type: 'string'; value: T; index: 40 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_40 = 'option_40_0' | 'option_40_1' | 'option_40_2' | 'option_40_3' | 'option_40_4' | 'option_40_5' | 'option_40_6' | 'option_40_7' | 'option_40_8' | 'option_40_9';
type OptionMap_40 = {
  [K in OptionKey_40]: {
    key: K;
    index: 40;
    handler: (input: K) => Distributed_40<K>;
  };
};

type ExtractReturn_40<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_40 = `on${Capitalize<OptionKey_40>}Change`;

export type {
  DeepNested_40,
  Distributed_40,
  OptionKey_40,
  OptionMap_40,
  ExtractReturn_40,
  EventName_40,
};
