// Complex type file 15 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_15<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 15; depth: D };
      nested: DeepNested_15<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_15<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_15<T> = T extends string
  ? { type: 'string'; value: T; index: 15 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_15 = 'option_15_0' | 'option_15_1' | 'option_15_2' | 'option_15_3' | 'option_15_4' | 'option_15_5' | 'option_15_6' | 'option_15_7' | 'option_15_8' | 'option_15_9' | 'option_15_10' | 'option_15_11' | 'option_15_12' | 'option_15_13' | 'option_15_14' | 'option_15_15' | 'option_15_16' | 'option_15_17' | 'option_15_18' | 'option_15_19' | 'option_15_20' | 'option_15_21' | 'option_15_22' | 'option_15_23' | 'option_15_24';
type OptionMap_15 = {
  [K in OptionKey_15]: {
    key: K;
    index: 15;
    handler: (input: K) => Distributed_15<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_15<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_15 = `on${Capitalize<OptionKey_15>}Change`;

// Export all types
export type {
  DeepNested_15,
  Distributed_15,
  OptionKey_15,
  OptionMap_15,
  ExtractReturn_15,
  EventName_15,
};
