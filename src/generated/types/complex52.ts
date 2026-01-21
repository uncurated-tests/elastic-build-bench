// Complex type file 52 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_52<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 52; depth: D };
      nested: DeepNested_52<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_52<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_52<T> = T extends string
  ? { type: 'string'; value: T; index: 52 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_52 = 'option_52_0' | 'option_52_1' | 'option_52_2' | 'option_52_3' | 'option_52_4' | 'option_52_5' | 'option_52_6' | 'option_52_7' | 'option_52_8' | 'option_52_9' | 'option_52_10' | 'option_52_11' | 'option_52_12' | 'option_52_13' | 'option_52_14' | 'option_52_15' | 'option_52_16' | 'option_52_17' | 'option_52_18' | 'option_52_19' | 'option_52_20' | 'option_52_21';
type OptionMap_52 = {
  [K in OptionKey_52]: {
    key: K;
    index: 52;
    handler: (input: K) => Distributed_52<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_52<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_52 = `on${Capitalize<OptionKey_52>}Change`;

// Export all types
export type {
  DeepNested_52,
  Distributed_52,
  OptionKey_52,
  OptionMap_52,
  ExtractReturn_52,
  EventName_52,
};
