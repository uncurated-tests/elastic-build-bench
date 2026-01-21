// Complex type file 8 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_8<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 8; depth: D };
      nested: DeepNested_8<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_8<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_8<T> = T extends string
  ? { type: 'string'; value: T; index: 8 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_8 = 'option_8_0' | 'option_8_1' | 'option_8_2' | 'option_8_3' | 'option_8_4' | 'option_8_5' | 'option_8_6' | 'option_8_7' | 'option_8_8' | 'option_8_9' | 'option_8_10' | 'option_8_11' | 'option_8_12' | 'option_8_13' | 'option_8_14' | 'option_8_15' | 'option_8_16' | 'option_8_17';
type OptionMap_8 = {
  [K in OptionKey_8]: {
    key: K;
    index: 8;
    handler: (input: K) => Distributed_8<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_8<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_8 = `on${Capitalize<OptionKey_8>}Change`;

// Export all types
export type {
  DeepNested_8,
  Distributed_8,
  OptionKey_8,
  OptionMap_8,
  ExtractReturn_8,
  EventName_8,
};
