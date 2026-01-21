// Complex type file 36 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_36<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 36; depth: D };
      nested: DeepNested_36<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_36<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_36<T> = T extends string
  ? { type: 'string'; value: T; index: 36 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_36 = 'option_36_0' | 'option_36_1' | 'option_36_2' | 'option_36_3' | 'option_36_4' | 'option_36_5' | 'option_36_6' | 'option_36_7' | 'option_36_8' | 'option_36_9' | 'option_36_10' | 'option_36_11' | 'option_36_12' | 'option_36_13' | 'option_36_14' | 'option_36_15' | 'option_36_16' | 'option_36_17' | 'option_36_18' | 'option_36_19' | 'option_36_20' | 'option_36_21' | 'option_36_22' | 'option_36_23' | 'option_36_24' | 'option_36_25';
type OptionMap_36 = {
  [K in OptionKey_36]: {
    key: K;
    index: 36;
    handler: (input: K) => Distributed_36<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_36<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_36 = `on${Capitalize<OptionKey_36>}Change`;

// Export all types
export type {
  DeepNested_36,
  Distributed_36,
  OptionKey_36,
  OptionMap_36,
  ExtractReturn_36,
  EventName_36,
};
