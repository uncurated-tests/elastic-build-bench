// Complex type file 53 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_53<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 53; depth: D };
      nested: DeepNested_53<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_53<T, Prev[D]>;
    };

type Distributed_53<T> = T extends string
  ? { type: 'string'; value: T; index: 53 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_53 = 'option_53_0' | 'option_53_1' | 'option_53_2' | 'option_53_3' | 'option_53_4' | 'option_53_5' | 'option_53_6' | 'option_53_7' | 'option_53_8' | 'option_53_9' | 'option_53_10' | 'option_53_11' | 'option_53_12' | 'option_53_13' | 'option_53_14' | 'option_53_15' | 'option_53_16' | 'option_53_17' | 'option_53_18' | 'option_53_19' | 'option_53_20' | 'option_53_21' | 'option_53_22';
type OptionMap_53 = {
  [K in OptionKey_53]: {
    key: K;
    index: 53;
    handler: (input: K) => Distributed_53<K>;
  };
};

type ExtractReturn_53<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_53 = `on${Capitalize<OptionKey_53>}Change`;

export type {
  DeepNested_53,
  Distributed_53,
  OptionKey_53,
  OptionMap_53,
  ExtractReturn_53,
  EventName_53,
};
