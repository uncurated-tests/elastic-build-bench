// Complex type file 62 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_62<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 62; depth: D };
      nested: DeepNested_62<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_62<T, Prev[D]>;
    };

type Distributed_62<T> = T extends string
  ? { type: 'string'; value: T; index: 62 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_62 = 'option_62_0' | 'option_62_1' | 'option_62_2' | 'option_62_3' | 'option_62_4' | 'option_62_5' | 'option_62_6' | 'option_62_7' | 'option_62_8' | 'option_62_9' | 'option_62_10' | 'option_62_11';
type OptionMap_62 = {
  [K in OptionKey_62]: {
    key: K;
    index: 62;
    handler: (input: K) => Distributed_62<K>;
  };
};

type ExtractReturn_62<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_62 = `on${Capitalize<OptionKey_62>}Change`;

export type {
  DeepNested_62,
  Distributed_62,
  OptionKey_62,
  OptionMap_62,
  ExtractReturn_62,
  EventName_62,
};
