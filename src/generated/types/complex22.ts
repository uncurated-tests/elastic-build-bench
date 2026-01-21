// Complex type file 22 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_22<T, D extends number = 12> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 22; depth: D };
      nested: DeepNested_22<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_22<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_22<T> = T extends string
  ? { type: 'string'; value: T; index: 22 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_22 = 'option_22_0' | 'option_22_1' | 'option_22_2' | 'option_22_3' | 'option_22_4' | 'option_22_5' | 'option_22_6' | 'option_22_7' | 'option_22_8' | 'option_22_9' | 'option_22_10' | 'option_22_11';
type OptionMap_22 = {
  [K in OptionKey_22]: {
    key: K;
    index: 22;
    handler: (input: K) => Distributed_22<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_22<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_22 = `on${Capitalize<OptionKey_22>}Change`;

// Export all types
export type {
  DeepNested_22,
  Distributed_22,
  OptionKey_22,
  OptionMap_22,
  ExtractReturn_22,
  EventName_22,
};
