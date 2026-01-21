// Complex type file 58 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_58<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 58; depth: D };
      nested: DeepNested_58<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_58<T, Prev[D]>;
    };

type Distributed_58<T> = T extends string
  ? { type: 'string'; value: T; index: 58 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_58 = 'option_58_0' | 'option_58_1' | 'option_58_2' | 'option_58_3' | 'option_58_4' | 'option_58_5' | 'option_58_6' | 'option_58_7' | 'option_58_8' | 'option_58_9' | 'option_58_10' | 'option_58_11' | 'option_58_12' | 'option_58_13' | 'option_58_14' | 'option_58_15' | 'option_58_16' | 'option_58_17' | 'option_58_18' | 'option_58_19' | 'option_58_20' | 'option_58_21' | 'option_58_22' | 'option_58_23' | 'option_58_24' | 'option_58_25' | 'option_58_26' | 'option_58_27';
type OptionMap_58 = {
  [K in OptionKey_58]: {
    key: K;
    index: 58;
    handler: (input: K) => Distributed_58<K>;
  };
};

type ExtractReturn_58<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_58 = `on${Capitalize<OptionKey_58>}Change`;

export type {
  DeepNested_58,
  Distributed_58,
  OptionKey_58,
  OptionMap_58,
  ExtractReturn_58,
  EventName_58,
};
