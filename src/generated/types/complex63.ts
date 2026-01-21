// Complex type file 63 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_63<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 63; depth: D };
      nested: DeepNested_63<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_63<T, Prev[D]>;
    };

type Distributed_63<T> = T extends string
  ? { type: 'string'; value: T; index: 63 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_63 = 'option_63_0' | 'option_63_1' | 'option_63_2' | 'option_63_3' | 'option_63_4' | 'option_63_5' | 'option_63_6' | 'option_63_7' | 'option_63_8' | 'option_63_9' | 'option_63_10' | 'option_63_11' | 'option_63_12';
type OptionMap_63 = {
  [K in OptionKey_63]: {
    key: K;
    index: 63;
    handler: (input: K) => Distributed_63<K>;
  };
};

type ExtractReturn_63<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_63 = `on${Capitalize<OptionKey_63>}Change`;

export type {
  DeepNested_63,
  Distributed_63,
  OptionKey_63,
  OptionMap_63,
  ExtractReturn_63,
  EventName_63,
};
