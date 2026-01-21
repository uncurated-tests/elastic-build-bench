// Complex type file 41 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_41<T, D extends number = 13> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 41; depth: D };
      nested: DeepNested_41<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_41<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_41<T> = T extends string
  ? { type: 'string'; value: T; index: 41 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_41 = 'option_41_0' | 'option_41_1' | 'option_41_2' | 'option_41_3' | 'option_41_4' | 'option_41_5' | 'option_41_6' | 'option_41_7' | 'option_41_8' | 'option_41_9' | 'option_41_10';
type OptionMap_41 = {
  [K in OptionKey_41]: {
    key: K;
    index: 41;
    handler: (input: K) => Distributed_41<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_41<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_41 = `on${Capitalize<OptionKey_41>}Change`;

// Export all types
export type {
  DeepNested_41,
  Distributed_41,
  OptionKey_41,
  OptionMap_41,
  ExtractReturn_41,
  EventName_41,
};
