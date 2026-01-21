// Complex type file 23 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_23<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 23; depth: D };
      nested: DeepNested_23<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_23<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_23<T> = T extends string
  ? { type: 'string'; value: T; index: 23 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_23 = 'option_23_0' | 'option_23_1' | 'option_23_2' | 'option_23_3' | 'option_23_4' | 'option_23_5' | 'option_23_6' | 'option_23_7' | 'option_23_8' | 'option_23_9' | 'option_23_10' | 'option_23_11' | 'option_23_12';
type OptionMap_23 = {
  [K in OptionKey_23]: {
    key: K;
    index: 23;
    handler: (input: K) => Distributed_23<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_23<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_23 = `on${Capitalize<OptionKey_23>}Change`;

// Export all types
export type {
  DeepNested_23,
  Distributed_23,
  OptionKey_23,
  OptionMap_23,
  ExtractReturn_23,
  EventName_23,
};
