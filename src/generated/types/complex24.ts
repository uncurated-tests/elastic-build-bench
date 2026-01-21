// Complex type file 24 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_24<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 24; depth: D };
      nested: DeepNested_24<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_24<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_24<T> = T extends string
  ? { type: 'string'; value: T; index: 24 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_24 = 'option_24_0' | 'option_24_1' | 'option_24_2' | 'option_24_3' | 'option_24_4' | 'option_24_5' | 'option_24_6' | 'option_24_7' | 'option_24_8' | 'option_24_9' | 'option_24_10' | 'option_24_11' | 'option_24_12' | 'option_24_13';
type OptionMap_24 = {
  [K in OptionKey_24]: {
    key: K;
    index: 24;
    handler: (input: K) => Distributed_24<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_24<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_24 = `on${Capitalize<OptionKey_24>}Change`;

// Export all types
export type {
  DeepNested_24,
  Distributed_24,
  OptionKey_24,
  OptionMap_24,
  ExtractReturn_24,
  EventName_24,
};
