// Complex type file 57 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_57<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 57; depth: D };
      nested: DeepNested_57<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_57<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_57<T> = T extends string
  ? { type: 'string'; value: T; index: 57 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_57 = 'option_57_0' | 'option_57_1' | 'option_57_2' | 'option_57_3' | 'option_57_4' | 'option_57_5' | 'option_57_6' | 'option_57_7' | 'option_57_8' | 'option_57_9' | 'option_57_10' | 'option_57_11' | 'option_57_12' | 'option_57_13' | 'option_57_14' | 'option_57_15' | 'option_57_16' | 'option_57_17' | 'option_57_18' | 'option_57_19' | 'option_57_20' | 'option_57_21' | 'option_57_22' | 'option_57_23' | 'option_57_24' | 'option_57_25' | 'option_57_26';
type OptionMap_57 = {
  [K in OptionKey_57]: {
    key: K;
    index: 57;
    handler: (input: K) => Distributed_57<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_57<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_57 = `on${Capitalize<OptionKey_57>}Change`;

// Export all types
export type {
  DeepNested_57,
  Distributed_57,
  OptionKey_57,
  OptionMap_57,
  ExtractReturn_57,
  EventName_57,
};
