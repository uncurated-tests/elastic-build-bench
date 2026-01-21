// Complex type file 59 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_59<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 59; depth: D };
      nested: DeepNested_59<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_59<T, Prev[D]>;
    };

type Distributed_59<T> = T extends string
  ? { type: 'string'; value: T; index: 59 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_59 = 'option_59_0' | 'option_59_1' | 'option_59_2' | 'option_59_3' | 'option_59_4' | 'option_59_5' | 'option_59_6' | 'option_59_7' | 'option_59_8' | 'option_59_9' | 'option_59_10' | 'option_59_11' | 'option_59_12' | 'option_59_13' | 'option_59_14' | 'option_59_15' | 'option_59_16' | 'option_59_17' | 'option_59_18' | 'option_59_19' | 'option_59_20' | 'option_59_21' | 'option_59_22' | 'option_59_23' | 'option_59_24' | 'option_59_25' | 'option_59_26' | 'option_59_27' | 'option_59_28';
type OptionMap_59 = {
  [K in OptionKey_59]: {
    key: K;
    index: 59;
    handler: (input: K) => Distributed_59<K>;
  };
};

type ExtractReturn_59<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_59 = `on${Capitalize<OptionKey_59>}Change`;

export type {
  DeepNested_59,
  Distributed_59,
  OptionKey_59,
  OptionMap_59,
  ExtractReturn_59,
  EventName_59,
};
