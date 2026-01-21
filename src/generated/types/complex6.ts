// Complex type file 6 - Deep inference and conditional types
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Recursive object type requiring deep inference
type DeepNested_6<T, D extends number = 8> = D extends 0
  ? T
  : {
      value: T;
      meta: { index: 6; depth: D };
      nested: DeepNested_6<T, Prev[D]>;
      sibling: D extends 1 ? T : DeepNested_6<T, Prev[D]>;
    };

// Conditional type with union distribution
type Distributed_6<T> = T extends string
  ? { type: 'string'; value: T; index: 6 }
  : T extends number
  ? { type: 'number'; value: T; computed: `value_${T}` }
  : T extends boolean
  ? { type: 'boolean'; flag: T }
  : { type: 'unknown'; raw: T };

// Mapped type over union
type OptionKey_6 = 'option_6_0' | 'option_6_1' | 'option_6_2' | 'option_6_3' | 'option_6_4' | 'option_6_5' | 'option_6_6' | 'option_6_7' | 'option_6_8' | 'option_6_9' | 'option_6_10' | 'option_6_11' | 'option_6_12' | 'option_6_13' | 'option_6_14' | 'option_6_15';
type OptionMap_6 = {
  [K in OptionKey_6]: {
    key: K;
    index: 6;
    handler: (input: K) => Distributed_6<K>;
  };
};

// Infer from complex function signatures  
type ExtractReturn_6<T> = T extends (...args: infer A) => infer R
  ? { args: A; return: R; arity: A['length'] }
  : never;

// Template literal types
type EventName_6 = `on${Capitalize<OptionKey_6>}Change`;

// Export all types
export type {
  DeepNested_6,
  Distributed_6,
  OptionKey_6,
  OptionMap_6,
  ExtractReturn_6,
  EventName_6,
};
