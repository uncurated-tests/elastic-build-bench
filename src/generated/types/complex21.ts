// Complex type file 21 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_21<T, D extends number = 11> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 21; depth: D };
      nested: DeepNested_21<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_21<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_21<T> = T extends string
  ? { type: 'string'; value: T; index: 21 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_21 = 'option_21_0' | 'option_21_1' | 'option_21_2' | 'option_21_3' | 'option_21_4' | 'option_21_5' | 'option_21_6' | 'option_21_7' | 'option_21_8' | 'option_21_9' | 'option_21_10';
type OptionMap_21 = {
  [K in OptionKey_21]: {
    key: K;
    index: 21;
    handler: (input: K) => Distributed_21<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_21<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_21 = `on${Capitalize<OptionKey_21>}Change`;

// Export all types
export type {
  DeepNested_21,
  Distributed_21,
  OptionKey_21,
  OptionMap_21,
  ExtractReturn_21,
  EventName_21,
};
