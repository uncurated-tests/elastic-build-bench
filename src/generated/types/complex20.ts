// Complex type file 20 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_20<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 20; depth: D };
      nested: DeepNested_20<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_20<T, Prev[D]>;
    };

type Distributed_20<T> = T extends string
  ? { type: 'string'; value: T; index: 20 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_20 = 'option_20_0' | 'option_20_1' | 'option_20_2' | 'option_20_3' | 'option_20_4' | 'option_20_5' | 'option_20_6' | 'option_20_7' | 'option_20_8' | 'option_20_9';
type OptionMap_20 = {
  [K in OptionKey_20]: {
    key: K;
    index: 20;
    handler: (input: K) => Distributed_20<K>;
  };
};

type ExtractReturn_20<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_20 = `on${Capitalize<OptionKey_20>}Change`;

export type {
  DeepNested_20,
  Distributed_20,
  OptionKey_20,
  OptionMap_20,
  ExtractReturn_20,
  EventName_20,
};
