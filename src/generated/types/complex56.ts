// Complex type file 56 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_56<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 56; depth: D };
      nested: DeepNested_56<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_56<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_56<T> = T extends string
  ? { type: 'string'; value: T; index: 56 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_56 = 'option_56_0' | 'option_56_1' | 'option_56_2' | 'option_56_3' | 'option_56_4' | 'option_56_5' | 'option_56_6' | 'option_56_7' | 'option_56_8' | 'option_56_9' | 'option_56_10' | 'option_56_11' | 'option_56_12' | 'option_56_13' | 'option_56_14' | 'option_56_15' | 'option_56_16' | 'option_56_17' | 'option_56_18' | 'option_56_19' | 'option_56_20' | 'option_56_21' | 'option_56_22' | 'option_56_23' | 'option_56_24' | 'option_56_25';
type OptionMap_56 = {
  [K in OptionKey_56]: {
    key: K;
    index: 56;
    handler: (input: K) => Distributed_56<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_56<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_56 = `on${Capitalize<OptionKey_56>}Change`;

// Export all types
export type {
  DeepNested_56,
  Distributed_56,
  OptionKey_56,
  OptionMap_56,
  ExtractReturn_56,
  EventName_56,
};
