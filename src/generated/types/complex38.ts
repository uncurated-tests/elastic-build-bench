// Complex type file 38 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type DeepNested_38<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 38; depth: D };
      nested: DeepNested_38<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_38<T, Prev[D]>;
    };

type Distributed_38<T> = T extends string
  ? { type: 'string'; value: T; index: 38 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

type OptionKey_38 = 'option_38_0' | 'option_38_1' | 'option_38_2' | 'option_38_3' | 'option_38_4' | 'option_38_5' | 'option_38_6' | 'option_38_7' | 'option_38_8' | 'option_38_9' | 'option_38_10' | 'option_38_11' | 'option_38_12' | 'option_38_13' | 'option_38_14' | 'option_38_15' | 'option_38_16' | 'option_38_17' | 'option_38_18' | 'option_38_19' | 'option_38_20' | 'option_38_21' | 'option_38_22' | 'option_38_23' | 'option_38_24' | 'option_38_25' | 'option_38_26' | 'option_38_27';
type OptionMap_38 = {
  [K in OptionKey_38]: {
    key: K;
    index: 38;
    handler: (input: K) => Distributed_38<K>;
  };
};

type ExtractReturn_38<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

type EventName_38 = `on${Capitalize<OptionKey_38>}Change`;

export type {
  DeepNested_38,
  Distributed_38,
  OptionKey_38,
  OptionMap_38,
  ExtractReturn_38,
  EventName_38,
};
