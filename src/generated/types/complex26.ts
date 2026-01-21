// Complex type file 26 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_26<T, D extends number = 10> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 26; depth: D };
      nested: DeepNested_26<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_26<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_26<T> = T extends string
  ? { type: 'string'; value: T; index: 26 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_26 = 'option_26_0' | 'option_26_1' | 'option_26_2' | 'option_26_3' | 'option_26_4' | 'option_26_5' | 'option_26_6' | 'option_26_7' | 'option_26_8' | 'option_26_9' | 'option_26_10' | 'option_26_11' | 'option_26_12' | 'option_26_13' | 'option_26_14' | 'option_26_15';
type OptionMap_26 = {
  [K in OptionKey_26]: {
    key: K;
    index: 26;
    handler: (input: K) => Distributed_26<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_26<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_26 = `on${Capitalize<OptionKey_26>}Change`;

// Export all types
export type {
  DeepNested_26,
  Distributed_26,
  OptionKey_26,
  OptionMap_26,
  ExtractReturn_26,
  EventName_26,
};
