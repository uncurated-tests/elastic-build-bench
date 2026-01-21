// Complex type file 32 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_32<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 32; depth: D };
      nested: DeepNested_32<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_32<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_32<T> = T extends string
  ? { type: 'string'; value: T; index: 32 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_32 = 'option_32_0' | 'option_32_1' | 'option_32_2' | 'option_32_3' | 'option_32_4' | 'option_32_5' | 'option_32_6' | 'option_32_7' | 'option_32_8' | 'option_32_9' | 'option_32_10' | 'option_32_11' | 'option_32_12' | 'option_32_13' | 'option_32_14' | 'option_32_15' | 'option_32_16' | 'option_32_17' | 'option_32_18' | 'option_32_19' | 'option_32_20' | 'option_32_21';
type OptionMap_32 = {
  [K in OptionKey_32]: {
    key: K;
    index: 32;
    handler: (input: K) => Distributed_32<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_32<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_32 = `on${Capitalize<OptionKey_32>}Change`;

// Export all types
export type {
  DeepNested_32,
  Distributed_32,
  OptionKey_32,
  OptionMap_32,
  ExtractReturn_32,
  EventName_32,
};
