// Complex type file 54 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_54<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 54; depth: D };
      nested: DeepNested_54<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_54<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_54<T> = T extends string
  ? { type: 'string'; value: T; index: 54 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_54 = 'option_54_0' | 'option_54_1' | 'option_54_2' | 'option_54_3' | 'option_54_4' | 'option_54_5' | 'option_54_6' | 'option_54_7' | 'option_54_8' | 'option_54_9' | 'option_54_10' | 'option_54_11' | 'option_54_12' | 'option_54_13' | 'option_54_14' | 'option_54_15' | 'option_54_16' | 'option_54_17' | 'option_54_18' | 'option_54_19' | 'option_54_20' | 'option_54_21' | 'option_54_22' | 'option_54_23';
type OptionMap_54 = {
  [K in OptionKey_54]: {
    key: K;
    index: 54;
    handler: (input: K) => Distributed_54<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_54<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_54 = `on${Capitalize<OptionKey_54>}Change`;

// Export all types
export type {
  DeepNested_54,
  Distributed_54,
  OptionKey_54,
  OptionMap_54,
  ExtractReturn_54,
  EventName_54,
};
