// Complex type file 79 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_79<T, D extends number = 9> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 79; depth: D };
      nested: DeepNested_79<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_79<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_79<T> = T extends string
  ? { type: 'string'; value: T; index: 79 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_79 = 'option_79_0' | 'option_79_1' | 'option_79_2' | 'option_79_3' | 'option_79_4' | 'option_79_5' | 'option_79_6' | 'option_79_7' | 'option_79_8' | 'option_79_9' | 'option_79_10' | 'option_79_11' | 'option_79_12' | 'option_79_13' | 'option_79_14' | 'option_79_15' | 'option_79_16' | 'option_79_17' | 'option_79_18' | 'option_79_19' | 'option_79_20' | 'option_79_21' | 'option_79_22' | 'option_79_23' | 'option_79_24' | 'option_79_25' | 'option_79_26' | 'option_79_27' | 'option_79_28';
type OptionMap_79 = {
  [K in OptionKey_79]: {
    key: K;
    index: 79;
    handler: (input: K) => Distributed_79<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_79<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_79 = `on${Capitalize<OptionKey_79>}Change`;

// Export all types
export type {
  DeepNested_79,
  Distributed_79,
  OptionKey_79,
  OptionMap_79,
  ExtractReturn_79,
  EventName_79,
};
