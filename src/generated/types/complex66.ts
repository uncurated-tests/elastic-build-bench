// Complex type file 66 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_66<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 66; depth: D };
      nested: DeepNested_66<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_66<T, Prev[D]>;
    };

type Distributed_66<T> = T extends string
  ? { type: 'string'; value: T; index: 66 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_66 = 'option_66_0' | 'option_66_1' | 'option_66_2' | 'option_66_3' | 'option_66_4' | 'option_66_5' | 'option_66_6' | 'option_66_7' | 'option_66_8' | 'option_66_9' | 'option_66_10' | 'option_66_11' | 'option_66_12' | 'option_66_13' | 'option_66_14' | 'option_66_15';
type OptionMap_66 = {
  [K in OptionKey_66]: {
    key: K;
    index: 66;
    handler: (input: K) => Distributed_66<K>;
  };
};

type ExtractReturn_66<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_66 = `on${Capitalize<OptionKey_66>}Change`;

export type {
  DeepNested_66,
  Distributed_66,
  OptionKey_66,
  OptionMap_66,
  ExtractReturn_66,
  EventName_66,
};
