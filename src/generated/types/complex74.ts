// Complex type file 74 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_74<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 74; depth: D };
      nested: DeepNested_74<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_74<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_74<T> = T extends string
  ? { type: 'string'; value: T; index: 74 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_74 = 'option_74_0' | 'option_74_1' | 'option_74_2' | 'option_74_3' | 'option_74_4' | 'option_74_5' | 'option_74_6' | 'option_74_7' | 'option_74_8' | 'option_74_9' | 'option_74_10' | 'option_74_11' | 'option_74_12' | 'option_74_13' | 'option_74_14' | 'option_74_15' | 'option_74_16' | 'option_74_17' | 'option_74_18' | 'option_74_19' | 'option_74_20' | 'option_74_21' | 'option_74_22' | 'option_74_23';
type OptionMap_74 = {
  [K in OptionKey_74]: {
    key: K;
    index: 74;
    handler: (input: K) => Distributed_74<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_74<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_74 = `on${Capitalize<OptionKey_74>}Change`;

// Export all types
export type {
  DeepNested_74,
  Distributed_74,
  OptionKey_74,
  OptionMap_74,
  ExtractReturn_74,
  EventName_74,
};
