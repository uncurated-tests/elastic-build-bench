// Complex type file 50 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_50<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 50; depth: D };
      nested: DeepNested_50<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_50<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_50<T> = T extends string
  ? { type: 'string'; value: T; index: 50 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_50 = 'option_50_0' | 'option_50_1' | 'option_50_2' | 'option_50_3' | 'option_50_4' | 'option_50_5' | 'option_50_6' | 'option_50_7' | 'option_50_8' | 'option_50_9' | 'option_50_10' | 'option_50_11' | 'option_50_12' | 'option_50_13' | 'option_50_14' | 'option_50_15' | 'option_50_16' | 'option_50_17' | 'option_50_18' | 'option_50_19';
type OptionMap_50 = {
  [K in OptionKey_50]: {
    key: K;
    index: 50;
    handler: (input: K) => Distributed_50<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_50<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_50 = `on${Capitalize<OptionKey_50>}Change`;

// Export all types
export type {
  DeepNested_50,
  Distributed_50,
  OptionKey_50,
  OptionMap_50,
  ExtractReturn_50,
  EventName_50,
};
