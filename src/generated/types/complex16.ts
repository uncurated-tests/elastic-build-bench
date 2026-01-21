// Complex type file 16 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_16<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 16; depth: D };
      nested: DeepNested_16<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_16<T, Prev[D]>;
    };

type Distributed_16<T> = T extends string
  ? { type: 'string'; value: T; index: 16 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_16 = 'option_16_0' | 'option_16_1' | 'option_16_2' | 'option_16_3' | 'option_16_4' | 'option_16_5' | 'option_16_6' | 'option_16_7' | 'option_16_8' | 'option_16_9' | 'option_16_10' | 'option_16_11' | 'option_16_12' | 'option_16_13' | 'option_16_14' | 'option_16_15' | 'option_16_16' | 'option_16_17' | 'option_16_18' | 'option_16_19' | 'option_16_20' | 'option_16_21' | 'option_16_22' | 'option_16_23' | 'option_16_24' | 'option_16_25';
type OptionMap_16 = {
  [K in OptionKey_16]: {
    key: K;
    index: 16;
    handler: (input: K) => Distributed_16<K>;
  };
};

type ExtractReturn_16<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_16 = `on${Capitalize<OptionKey_16>}Change`;

export type {
  DeepNested_16,
  Distributed_16,
  OptionKey_16,
  OptionMap_16,
  ExtractReturn_16,
  EventName_16,
};
